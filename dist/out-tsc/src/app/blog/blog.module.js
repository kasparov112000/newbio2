"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var blog_component_1 = require("./blog.component");
var blog_comment_component_1 = require("./blog-comment.component");
var blog_resolver_service_1 = require("./blog-resolver.service");
var markdown_pipe_1 = require("./markdown.pipe");
var shared_1 = require("../shared");
var blog_routing_module_1 = require("./blog-routing.module");
var BlogModule = /** @class */ (function () {
    function BlogModule() {
    }
    BlogModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_1.SharedModule,
                blog_routing_module_1.BlogRoutingModule
            ],
            declarations: [
                blog_component_1.BlogComponent,
                blog_comment_component_1.BlogCommentComponent,
                markdown_pipe_1.MarkdownPipe
            ],
            providers: [
                blog_resolver_service_1.BlogResolver
            ]
        })
    ], BlogModule);
    return BlogModule;
}());
exports.BlogModule = BlogModule;
//# sourceMappingURL=blog.module.js.map