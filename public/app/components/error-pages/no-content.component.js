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
var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    NoContentComponent = __decorate([
        core_1.Component({
            selector: 'no-content',
            template: "\n        <div class=\"container\">\n            <div class=\"boo-wrapper\">\n                <h1>Whoops!</h1>\n                <p>\n                    We couldn't find the page you\n                    <br /> were looking for.\n                </p>\n            </div>\n        </div>",
            styles: ["\n        .container {\n            font-family: 'Varela Round', sans-serif;\n            color: $booFaceColor;\n            position: relative;\n            height: 100vh;\n            text-align: center;\n            font-size: $jaggedDistance / 2;\n            h1 {\n                font-size: $jaggedDistance;\n                margin-top: $jaggedDistance;\n            }\n        }\n        .boo-wrapper {\n            width: 100%;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            padding-top: $jaggedDistance * 2;\n            padding-bottom: $jaggedDistance * 2;"]
        }), 
        __metadata('design:paramtypes', [])
    ], NoContentComponent);
    return NoContentComponent;
}());
exports.NoContentComponent = NoContentComponent;
//# sourceMappingURL=no-content.component.js.map