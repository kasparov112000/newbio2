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
var http_1 = require("@angular/common/http");
var api_service_1 = require("./api.service");
var operators_1 = require("rxjs/operators");
var DonationsService = /** @class */ (function () {
    function DonationsService(apiService) {
        this.apiService = apiService;
    }
    DonationsService.prototype.query = function (config) {
        // Convert any filters over to Angular's URLSearchParams
        var params = {};
        Object.keys(config.filters)
            .forEach(function (key) {
            params[key] = config.filters[key];
        });
        return this.apiService
            .get('/donations' + ((config.type === 'feed') ? '/feed' : ''), new http_1.HttpParams({ fromObject: params }));
    };
    DonationsService.prototype.get = function (slug) {
        return this.apiService.get('/donations/' + slug)
            .pipe(operators_1.map(function (data) { return data.donation; }));
    };
    DonationsService.prototype.destroy = function (slug) {
        return this.apiService.delete('/donations/' + slug);
    };
    DonationsService.prototype.save = function (donation) {
        // If we're updating an existing donation
        if (donation.slug) {
            return this.apiService.put('/donations/' + donation.slug, { donation: donation })
                .pipe(operators_1.map(function (data) { return data.donation; }));
            // Otherwise, create a new donation
        }
        else {
            return this.apiService.post('/donations/', { donation: donation })
                .pipe(operators_1.map(function (data) { return data.donation; }));
        }
    };
    DonationsService.prototype.favorite = function (slug) {
        return this.apiService.post('/donations/' + slug + '/favorite');
    };
    DonationsService.prototype.unfavorite = function (slug) {
        return this.apiService.delete('/donations/' + slug + '/favorite');
    };
    DonationsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], DonationsService);
    return DonationsService;
}());
exports.DonationsService = DonationsService;
//# sourceMappingURL=donations.service.js.map