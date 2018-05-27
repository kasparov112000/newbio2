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
var EventsService = /** @class */ (function () {
    function EventsService(apiService) {
        this.apiService = apiService;
    }
    EventsService.prototype.query = function (config) {
        // Convert any filters over to Angular's URLSearchParams
        var params = {};
        Object.keys(config.filters)
            .forEach(function (key) {
            params[key] = config.filters[key];
        });
        return this.apiService
            .get('/events' + ((config.type === 'feed') ? '/feed' : ''), new http_1.HttpParams({ fromObject: params }));
    };
    EventsService.prototype.get = function (slug) {
        return this.apiService.get('/events/' + slug)
            .pipe(operators_1.map(function (data) { return data.event; }));
    };
    EventsService.prototype.destroy = function (slug) {
        return this.apiService.delete('/events/' + slug);
    };
    EventsService.prototype.save = function (event) {
        // If we're updating an existing event
        if (event.slug) {
            return this.apiService.put('/events/' + event.slug, { event: event })
                .pipe(operators_1.map(function (data) { return data.event; }));
            // Otherwise, create a new event
        }
        else {
            return this.apiService.post('/events/', { event: event })
                .pipe(operators_1.map(function (data) { return data.event; }));
        }
    };
    EventsService.prototype.favorite = function (slug) {
        return this.apiService.post('/events/' + slug + '/favorite');
    };
    EventsService.prototype.unfavorite = function (slug) {
        return this.apiService.delete('/events/' + slug + '/favorite');
    };
    EventsService.prototype.attend = function (slug) {
        return this.apiService.post('/events/' + slug + '/attend');
    };
    EventsService.prototype.unattend = function (slug) {
        return this.apiService.delete('/events/' + slug + '/unattend');
    };
    EventsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], EventsService);
    return EventsService;
}());
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map