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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var my_date_picker_module_1 = require('mydatepicker/dist/my-date-picker.module');
var toastr_ng2_1 = require("toastr-ng2");
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var topband_component_1 = require('./components/header/topband.component');
var nav_component_1 = require('./components/header/nav.component');
var footer_component_1 = require('./components/footer/footer.component');
var no_content_component_1 = require('./components/error-pages/no-content.component');
var home_component_1 = require('./components/main/home.component');
var about_component_1 = require('./components/main/about.component');
var note_component_1 = require('./components/main/notes/note.component');
var notes_component_1 = require('./components/main/notes/notes.component');
var add_note_component_1 = require('./components/main/notes/add-note.component');
var profile_component_1 = require('./components/main/profile/profile.component');
var login_component_1 = require('./components/main/login/login.component');
var logout_component_1 = require("./components/main/logout/logout.component");
var register_component_1 = require('./components/main/register/register.component');
var user_info_component_1 = require("./components/main/profile/user-info/user-info.component");
var notes_service_1 = require("./services/notes.service");
var http_options_service_1 = require("./services/http-options.service");
var toastr_ng2_2 = require("toastr-ng2");
var is_logged_guard_1 = require('./route-guards/is-logged.guard');
var user_auth_service_1 = require("./services/user/user-auth.service");
var user_main_service_1 = require("./services/user/user-main.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                http_1.HttpModule,
                my_date_picker_module_1.MyDatePickerModule,
                toastr_ng2_1.ToastrModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent,
                topband_component_1.TopbandComponent,
                home_component_1.HomeComponent,
                note_component_1.NoteComponent,
                notes_component_1.NotesComponent,
                add_note_component_1.AddNoteComponent,
                nav_component_1.NavComponent,
                footer_component_1.FooterComponent,
                no_content_component_1.NoContentComponent,
                about_component_1.AboutComponent,
                profile_component_1.ProfileComponent,
                login_component_1.LoginComponent,
                logout_component_1.LogoutComponent,
                register_component_1.RegisterComponent,
                user_info_component_1.UserInfoComponent
            ],
            providers: [
                notes_service_1.NotesService,
                user_auth_service_1.UserAuthService,
                user_main_service_1.UserMainService,
                http_options_service_1.HttpOptionsService,
                toastr_ng2_2.ToastrService,
                is_logged_guard_1.IsLoggedUserGuard,
                forms_1.FormBuilder
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map