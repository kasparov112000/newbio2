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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../services");
var HttpTokenInterceptor = /** @class */ (function () {
    function HttpTokenInterceptor(jwtService) {
        this.jwtService = jwtService;
    }
    HttpTokenInterceptor.prototype.intercept = function (req, next) {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        var token = this.jwtService.getToken();
        if (token) {
            headersConfig['Authorization'] = "Token " + token;
        }
        var request = req.clone({ setHeaders: headersConfig });
        return next.handle(request);
    };
    HttpTokenInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [services_1.JwtService])
    ], HttpTokenInterceptor);
    return HttpTokenInterceptor;
}());
exports.HttpTokenInterceptor = HttpTokenInterceptor;
//# sourceMappingURL=http.token.interceptor.js.map