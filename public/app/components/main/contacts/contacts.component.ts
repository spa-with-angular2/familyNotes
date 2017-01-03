import { Component } from '@angular/core';

@Component({
    selector: 'contacts',
    template: `
        <div>
            <h1>Contacts</h1>
            <img src="./app/assets/images/address.png" >
            <span class="address" ><strong>Address: </strong> Sofia 1729, Mladost 1А,  "Al. Malinov Street", 31</span>
            <span class="address" ><strong>GPS coordinates: </strong> 42.650911, 23.379464</span>
        </div>
    `,
    styles: [`
        div {
            margin: auto;
        }
        span {
            text-align: center;
            display: block;
            margin-top: 20px;
            font-size: 18px;
        }
        h1{
            text-align: center;
        }

        img {
            margin: auto;
            display: block;
            width: 600px;
            height: 400px;
            -webkit-box-shadow: 0px 0px 23px -3px rgba(97,89,89,1);
            -moz-box-shadow: 0px 0px 23px -3px rgba(97,89,89,1);
            box-shadow: 0px 0px 23px -3px rgba(97,89,89,1);
        }
    `]

})

export class ContactsComponent {
}