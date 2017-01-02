import { Component, OnInit } from '@angular/core';

import {User} from "../../../models/user.model";
import {UserDateService} from "../../../services/user/user-data.service";

@Component({
    selector: 'profile',
    providers: [UserDateService],
    templateUrl: './app/components/main/profile/profile.component.html',
    styleUrls: ['./app/components/main/profile/profile-component.css'],
})
export class ProfileComponent {
    // user = {
    //     username: 'ivan.ivanov',
    //     email: 'ivan.ivanov@abv.bg',
    //     name: 'Ivan Ivanov',
    //     age: '20',
    //     country: 'Bulgaria',
    //     imageUrl: 'app/assets/images/cover-photo.jpg'
    // }
    public user: User;
    public localUser: User;
    public dbUser: any;
    public profilePictureUrl: string;

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

    constructor(private userDataService: UserDateService){
        this.localUser = JSON.parse(localStorage.getItem('user'));
        //console.log('localUsaerData');
        //console.log(this.localUser);
    }

    ngOnInit(): void {
        //console.log(this.localUser._id);
        this.userDataService
            .getUserData(this.localUser._id)
            .subscribe((resultDbUser) => {
                this.dbUser = resultDbUser;
                //console.log(resultDbUser);

            });
        this.user = this.localUser;
        this.profilePictureUrl = this.localUser.profilePictures[0];
        //this.user = this.dbUser;
    }

}
