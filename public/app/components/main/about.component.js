"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AboutComponent = (function () {
    function AboutComponent() {
        this.teamMembers = [
            { gitHub: 'https://github.com/nadejdanicolova', name: "Nadezhda Nikolova", image: 'nadejda' },
            { gitHub: 'https://github.com/MikeSteiner ', name: "Aleksandar Topliiski", image: 'aleksandur' }
        ];
    }
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about',
            template: "\n        <div>\n            <h1>Our Team</h1>\n            <hr>\n            <div *ngFor=\"let teamMate of teamMembers\">\n                <img src=\"app/assets/images/{{teamMate.image}}.jpg\" alt=\"\">\n                <h3>{{teamMate.name}}</h3>\n                <a href=\"{{teamMate.gitHub}}\">GitHub Profile</a>\n                <hr>\n            </div>\n        </div>\n    ",
            styleUrls: ['./app/components/main/about-component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map