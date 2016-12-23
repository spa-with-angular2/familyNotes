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
var TopbandComponent = (function () {
    function TopbandComponent() {
    }
    TopbandComponent = __decorate([
        core_1.Component({
            selector: 'top-band',
            templateUrl: './app/components/header/topband.component.html',
            styles: ["\n        .top-band{\n            background-color: lightgray;\n        }\n        .logo{\n            color: white;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], TopbandComponent);
    return TopbandComponent;
}());
exports.TopbandComponent = TopbandComponent;
//# sourceMappingURL=topband.component.js.map