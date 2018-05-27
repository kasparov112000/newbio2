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
var BlogPreviewComponent = /** @class */ (function () {
    function BlogPreviewComponent() {
    }
    BlogPreviewComponent.prototype.onToggleFavorite = function (favorited) {
        this.blog['favorited'] = favorited;
        if (favorited) {
            this.blog['favoritesCount']++;
        }
        else {
            this.blog['favoritesCount']--;
        }
    };
    BlogPreviewComponent.prototype.showHidden = function () {
        if (this.frontPage) {
            if (!this.blog.approved || !this.blog.toFrontPage) {
                return true;
            }
            return false;
        }
        return false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BlogPreviewComponent.prototype, "blog", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], BlogPreviewComponent.prototype, "frontPage", void 0);
    BlogPreviewComponent = __decorate([
        core_1.Component({
            selector: 'app-blog-preview',
            templateUrl: './blog-preview.component.html'
        })
    ], BlogPreviewComponent);
    return BlogPreviewComponent;
}());
exports.BlogPreviewComponent = BlogPreviewComponent;
//# sourceMappingURL=blog-preview.component.js.map