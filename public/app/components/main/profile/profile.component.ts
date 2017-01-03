import {Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {User} from "../../../models/user.model";
import {UserDateService} from "../../../services/user/user-data.service";
import {UserAuthService} from "../../../services/user/user-auth.service";

@Component({
    selector: 'profile',
    templateUrl: './app/components/main/profile/profile.component.html',
    styleUrls: ['./app/components/main/profile/profile-component.css'],
})
export class ProfileComponent {
    public user: User;
    private profilePictureUrl: string;
    private firstName: string;

    doneNotes = [
        { noteUrl: '#', name: "Clean House"},
        { noteUrl: '#', name: "Cook Dinner" },
        { noteUrl: '#', name: "Feed the cat" },
        { noteUrl: '#', name: "Brush teeth" }
    ];
    activeNotes = [
        { noteUrl: '#', name: "Finish homework"},
        { noteUrl: '#', name: "Study for exam" }
    ];

    public isLoggedIn: boolean;
    public isLoggedInSubscription: any;

    constructor(
        private userDataService: UserDateService,
        private userAuthService: UserAuthService,
        private router: Router
    ){
        this.isLoggedInSubscription = this.userAuthService.subscribe((newValue) => this.onLoggedInUpdated(newValue));
    }

    onLoggedInUpdated(changedValue: any) {
        console.log('isLoggedIn value changed!', changedValue);
        this.isLoggedIn = changedValue;
    }
    ngOnDestroy() {
        this.isLoggedInSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.isLoggedIn = this.userAuthService.authenticated;
        this.profilePictureUrl = '';
        this.firstName = '';
        console.log('isLoggedIn profile-'+this.isLoggedIn);

        if(this.isLoggedIn){
            var userDataStringLocal: string = localStorage.getItem('user');
            var id: string = JSON.parse(userDataStringLocal)._id;

            //let localUser: User = localStorage.getItem('user');
            console.log('localUser _id-' + id);
            this.userDataService
                .getUserData(id)
                .subscribe((resultDbUser) => {
                    this.user = resultDbUser.result;
                    console.log(this.user);

                    this.profilePictureUrl = this.user.profilePictures[0];
                    this.firstName = this.user.firstName;

                });

        } else {
            this.router.navigate(['home']);
        }
    }
}
