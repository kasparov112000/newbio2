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
var core_2 = require("../../core");
var EventListComponent = /** @class */ (function () {
    function EventListComponent(eventsService) {
        this.eventsService = eventsService;
        this.loading = false;
        this.currentPage = 1;
        this.totalPages = [1];
    }
    Object.defineProperty(EventListComponent.prototype, "config", {
        set: function (config) {
            if (config) {
                this.query = config;
                this.currentPage = 1;
                this.runQuery();
            }
        },
        enumerable: true,
        configurable: true
    });
    EventListComponent.prototype.setPageTo = function (pageNumber) {
        this.currentPage = pageNumber;
        this.runQuery();
    };
    EventListComponent.prototype.runQuery = function () {
        var _this = this;
        this.loading = true;
        this.results = [];
        // Create limit and offset filter (if necessary)
        if (this.limit) {
            this.query.filters.limit = this.limit;
            this.query.filters.offset = (this.limit * (this.currentPage - 1));
        }
        this.eventsService.query(this.query)
            .subscribe(function (data) {
            _this.loading = false;
            _this.results = data.events;
            // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
            _this.totalPages = Array.from(new Array(Math.ceil(data.eventsCount / _this.limit)), function (val, index) { return index + 1; });
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], EventListComponent.prototype, "limit", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EventListComponent.prototype, "config", null);
    EventListComponent = __decorate([
        core_1.Component({
            selector: 'app-event-list',
            styleUrls: ['event-list.component.scss'],
            templateUrl: './event-list.component.html'
        }),
        __metadata("design:paramtypes", [core_2.EventsService])
    ], EventListComponent);
    return EventListComponent;
}());
exports.EventListComponent = EventListComponent;
//# sourceMappingURL=event-list.component.js.map