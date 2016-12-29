import { Component } from '@angular/core';

import { CountriesEnum } from '../../../enumerations/countries.enum'

@Component({
    selector: 'register',
    templateUrl: './app/components/main/register/register.component.html',
    styleUrls: ['./app/components/header/nav-component.css' ,'./app/components/main/register/register-component.css' , './app/assets/css/hover.css'],
})
export class RegisterComponent {
    options: string[];
    myValue: CountriesEnum;
    AgentStatus: typeof CountriesEnum = CountriesEnum;
     isOffline: boolean ;

    ngOnInit() {
        var x = CountriesEnum;
        var options = Object.keys(CountriesEnum);
        this.options = options.slice(options.length / 2);
    }

    parseValue(value: string) {
        this.myValue = CountriesEnum[value];
        this.isOffline = this.myValue == CountriesEnum.Bulgaria;
    }
}

}
