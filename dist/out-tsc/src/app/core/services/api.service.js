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
var environment_1 = require("../../../environments/environment");
var http_1 = require("@angular/common/http");
var jwt_service_1 = require("./jwt.service");
var ErrorObservable_1 = require("rxjs/observable/ErrorObservable");
var operators_1 = require("rxjs/operators");
var ApiService = /** @class */ (function () {
    function ApiService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
    }
    ApiService.prototype.formatErrors = function (error) {
        return new ErrorObservable_1.ErrorObservable(error.error);
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new http_1.HttpParams(); }
        return this.http.get("" + environment_1.environment.api_url + path, { params: params })
            .pipe(operators_1.catchError(this.formatErrors));
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + environment_1.environment.api_url + path, JSON.stringify(body)).pipe(operators_1.catchError(this.formatErrors));
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + environment_1.environment.api_url + path, JSON.stringify(body)).pipe(operators_1.catchError(this.formatErrors));
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + environment_1.environment.api_url + path).pipe(operators_1.catchError(this.formatErrors));
    };
    ApiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            jwt_service_1.JwtService])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map