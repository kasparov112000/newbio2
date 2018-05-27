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
var BlogListComponent = /** @class */ (function () {
    function BlogListComponent(blogsService) {
        this.blogsService = blogsService;
        this.loading = false;
        this.currentPage = 1;
        this.totalPages = [1];
    }
    Object.defineProperty(BlogListComponent.prototype, "config", {
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
    BlogListComponent.prototype.setPageTo = function (pageNumber) {
        this.currentPage = pageNumber;
        this.runQuery();
    };
    BlogListComponent.prototype.runQuery = function () {
        var _this = this;
        this.loading = true;
        this.results = [];
        // Create limit and offset filter (if necessary)
        if (this.limit) {
            this.query.filters.limit = this.limit;
            this.query.filters.offset = (this.limit * (this.currentPage - 1));
        }
        this.blogsService.query(this.query)
            .subscribe(function (data) {
            _this.loading = false;
            _this.results = data.blogs;
            // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
            _this.totalPages = Array.from(new Array(Math.ceil(data.blogsCount / _this.limit)), function (val, index) { return index + 1; });
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], BlogListComponent.prototype, "limit", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], BlogListComponent.prototype, "frontPage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], BlogListComponent.prototype, "config", null);
    BlogListComponent = __decorate([
        core_1.Component({
            selector: 'app-blog-list',
            styleUrls: ['blog-list.component.css'],
            templateUrl: './blog-list.component.html'
        }),
        __metadata("design:paramtypes", [core_2.BlogsService])
    ], BlogListComponent);
    return BlogListComponent;
}());
exports.BlogListComponent = BlogListComponent;
//# sourceMappingURL=blog-list.component.js.map