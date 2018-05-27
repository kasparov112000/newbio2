"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_component_1 = require("./auth.component");
var no_auth_guard_service_1 = require("./no-auth-guard.service");
var shared_1 = require("../shared");
var auth_routing_module_1 = require("./auth-routing.module");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_1.SharedModule,
                auth_routing_module_1.AuthRoutingModule
            ],
            declarations: [
                auth_component_1.AuthComponent
            ],
            providers: [
                no_auth_guard_service_1.NoAuthGuard
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map