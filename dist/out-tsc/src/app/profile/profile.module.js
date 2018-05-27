"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var profile_blogs_component_1 = require("./profile-blogs.component");
var profile_component_1 = require("./profile.component");
var profile_favorites_component_1 = require("./profile-favorites.component");
var profile_resolver_service_1 = require("./profile-resolver.service");
var shared_1 = require("../shared");
var profile_routing_module_1 = require("./profile-routing.module");
var profile_events_component_1 = require("./profile-events.component");
var profile_attends_component_1 = require("./profile-attends.component");
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_1.SharedModule,
                profile_routing_module_1.ProfileRoutingModule
            ],
            declarations: [
                profile_blogs_component_1.ProfileBlogsComponent,
                profile_component_1.ProfileComponent,
                profile_favorites_component_1.ProfileFavoritesComponent,
                profile_events_component_1.ProfileEventsComponent,
                profile_attends_component_1.ProfileAttendsComponent
            ],
            providers: [
                profile_resolver_service_1.ProfileResolver
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());
exports.ProfileModule = ProfileModule;
//# sourceMappingURL=profile.module.js.map