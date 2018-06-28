"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var first_page_component_1 = require("./first-page/first-page.component");
var my_dashboard_component_1 = require("./my-dashboard/my-dashboard.component");
var routes = [
    {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule'
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
    },
    {
        path: 'first-page',
        component: first_page_component_1.FirstPageComponent
    },

    {
        path: 'editor',
        loadChildren: './editor/editor.module#EditorModule'
    },
    {
        path: 'matrix',
        loadChildren: './matrix/matrix.module#MatrixModule'
    },
    {
        path: 'donate',
        loadChildren: './donate/donate.module#DonateModule'
    },
    {
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule'
    },
    {
        path: 'donation',
        loadChildren: './donation/donation.module#DonationModule'
    },
    {
        path: 'event',
        loadChildren: './event/event.module#EventModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, {
                    // preload all modules; optionally we could
                    // implement a custom preloading strategy for just some
                    // of the modules (PRs welcome 😉)
                    preloadingStrategy: router_1.PreloadAllModules
                })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map