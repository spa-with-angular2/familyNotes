import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import {User} from "../../../../models/user.model";
import {UserDateService} from "../../../../services/user/user-data.service";


@Component({
    selector: 'user-info',
    templateUrl: './app/components/main/profile/user-info/user-info.component.html',
    styleUrls: ['./app/components/main/profile/user-info/user-info.component.css']
})
export class UserInfoComponent {
    // @Input() public notedata: Note;
    @Input() public userdata: User;
    private userLikeObject: any;

    public isInEditMode: boolean;

    constructor(private userDataService: UserDateService ) {
        this.isInEditMode = false;
    }

    public toggleEditMode(): void {
        if(this.isInEditMode){
            this.isInEditMode = false;
        } else {
            this.isInEditMode = true;
        }
    }

    public updateAdditionalInfo(): void {
        let userId = JSON.parse(localStorage.getItem('user')).result._id;
        // this.userDataService
        //     .updateUserData(userId, this.form.value)
        //     .subscribe(user => {
        //         if (user) {
        //             localStorage.setItem('user', JSON.stringify(user));
        //             this.user = JSON.parse(localStorage.getItem('user')).result;
        //
        //             this.toggleEditMode();
        //             this._notificationService.create('Success!', 'Profile updated.', 'success');
        //         }
        //     }, console.log);
    }

}
