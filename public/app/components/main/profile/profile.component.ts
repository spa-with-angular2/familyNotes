import { Component } from '@angular/core';

@Component({
    selector: 'profile',
    templateUrl: './app/components/main/profile/profile.component.html',
    styleUrls: ['./app/components/main/profile/profile-component.css'],
})
export class ProfileComponent {
    user = {
        username: 'ivan.ivanov',
        email: 'ivan.ivanov@abv.bg',
        name: 'Ivan Ivanov',
        age: '20',
        country: 'Bulgaria',
        imageUrl: 'app/assets/images/cover-photo.jpg'
    }

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

}
