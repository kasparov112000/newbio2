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
var home2_component_1 = require("./home2.component");
var home2_auth_resolver_service_1 = require("./home2-auth-resolver.service");
var routes = [
    {
        path: 'events',
        component: home2_component_1.Home2Component,
        resolve: {
            isAuthenticated: home2_auth_resolver_service_1.Home2AuthResolver
        }
    }
];
var Home2RoutingModule = /** @class */ (function () {
    function Home2RoutingModule() {
    }
    Home2RoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], Home2RoutingModule);
    return Home2RoutingModule;
}());
exports.Home2RoutingModule = Home2RoutingModule;
//# sourceMappingURL=home2-routing.module.js.map