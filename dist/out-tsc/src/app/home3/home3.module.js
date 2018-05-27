"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var home3_component_1 = require("./home3.component");
var home3_auth_resolver_service_1 = require("./home3-auth-resolver.service");
var shared_1 = require("../shared");
var home3_routing_module_1 = require("./home3-routing.module");
var Home3Module = /** @class */ (function () {
    function Home3Module() {
    }
    Home3Module = __decorate([
        core_1.NgModule({
            imports: [
                shared_1.SharedModule,
                home3_routing_module_1.Home3RoutingModule
            ],
            declarations: [
                home3_component_1.Home3Component
            ],
            providers: [
                home3_auth_resolver_service_1.Home3AuthResolver
            ]
        })
    ], Home3Module);
    return Home3Module;
}());
exports.Home3Module = Home3Module;
//# sourceMappingURL=home3.module.js.map