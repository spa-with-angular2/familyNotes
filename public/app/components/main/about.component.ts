import { Component } from '@angular/core';

@Component ({
    selector: 'about',
    templateUrl: './app/components/main/about.component.html',
    styleUrls: ['./app/components/main/about-component.css']
    
})

export class AboutComponent {
    teamMembers = [
       {gitHub: 'https://github.com/nadejdanicolova', name: "Nadezhda Nikolova" , image: 'nadejda'},
       {gitHub: 'https://github.com/MikeSteiner ' , name: "Aleksandar Topliiski", image: 'aleksandur'},
       {gitHub: 'https://github.com/susanok' , name: "Suzana Manova", image: 'suzana'}
     ];

}