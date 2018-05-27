"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var home2_component_1 = require("./home2.component");
var home2_auth_resolver_service_1 = require("./home2-auth-resolver.service");
var shared_1 = require("../shared");
var home2_routing_module_1 = require("./home2-routing.module");
var Home2Module = /** @class */ (function () {
    function Home2Module() {
    }
    Home2Module = __decorate([
        core_1.NgModule({
            imports: [
                shared_1.SharedModule,
                home2_routing_module_1.Home2RoutingModule
            ],
            declarations: [
                home2_component_1.Home2Component
            ],
            providers: [
                home2_auth_resolver_service_1.Home2AuthResolver
            ]
        })
    ], Home2Module);
    return Home2Module;
}());
exports.Home2Module = Home2Module;
//# sourceMappingURL=home2.module.js.map