import { Component } from '@angular/core';

@Component({
    selector: 'about',
    template: `
        <div>
            <h1>Our Team</h1>
            <hr>
            <div *ngFor="let teamMate of teamMembers">
                <img src="app/assets/images/{{teamMate.image}}.jpg" alt="">
                <h3>{{teamMate.name}}</h3>
                <a href="{{teamMate.gitHub}}">GitHub Profile</a>
                <hr>
            </div>
        </div>
    `,
    styleUrls: ['./app/components/main/about-component.css']

})

export class AboutComponent {
    teamMembers = [
        { gitHub: 'https://github.com/nadejdanicolova', name: "Nadezhda Nikolova", image: 'nadejda' },
        { gitHub: 'https://github.com/MikeSteiner ', name: "Aleksandar Topliiski", image: 'aleksandur' },
        { gitHub: 'https://github.com/susanok', name: "Suzana Manova", image: 'suzana' }
    ];

}