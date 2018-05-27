"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var http_token_interceptor_1 = require("./interceptors/http.token.interceptor");
var services_1 = require("./services");
var donations_service_1 = require("./services/donations.service");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: http_token_interceptor_1.HttpTokenInterceptor, multi: true },
                services_1.ApiService,
                services_1.BlogsService,
                donations_service_1.DonationsService,
                services_1.EventsService,
                services_1.AuthGuard,
                services_1.CommentsService,
                services_1.JwtService,
                services_1.ProfilesService,
                services_1.TagsService,
                services_1.UserService
            ],
            declarations: []
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map