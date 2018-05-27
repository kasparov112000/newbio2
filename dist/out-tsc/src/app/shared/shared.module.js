"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var blog_helpers_1 = require("./blog-helpers");
var buttons_1 = require("./buttons");
var list_errors_component_1 = require("./list-errors.component");
var show_authed_directive_1 = require("./show-authed.directive");
var event_helpers_1 = require("./event-helpers");
var buttons_2 = require("./buttons");
var markdown_pipe_1 = require("./blog-helpers/markdown.pipe");
var _1 = require(".");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                router_1.RouterModule
            ],
            declarations: [
                _1.DonationListComponent,
                _1.DonationMetaComponent,
                _1.DonationPreviewComponent,
                blog_helpers_1.BlogListComponent,
                blog_helpers_1.BlogMetaComponent,
                blog_helpers_1.BlogPreviewComponent,
                event_helpers_1.EventListComponent,
                event_helpers_1.EventMetaComponent,
                event_helpers_1.EventPreviewComponent,
                buttons_1.FavoriteButtonComponent,
                buttons_2.Favorite1ButtonComponent,
                buttons_2.Favorite2ButtonComponent,
                buttons_1.FollowButtonComponent,
                buttons_1.AttendButtonComponent,
                list_errors_component_1.ListErrorsComponent,
                show_authed_directive_1.ShowAuthedDirective,
                markdown_pipe_1.MarkdownPipe
            ],
            exports: [
                blog_helpers_1.BlogListComponent,
                blog_helpers_1.BlogMetaComponent,
                blog_helpers_1.BlogPreviewComponent,
                event_helpers_1.EventListComponent,
                event_helpers_1.EventMetaComponent,
                event_helpers_1.EventPreviewComponent,
                _1.DonationListComponent,
                _1.DonationMetaComponent,
                _1.DonationPreviewComponent,
                common_1.CommonModule,
                buttons_1.FavoriteButtonComponent,
                buttons_2.Favorite1ButtonComponent,
                buttons_2.Favorite2ButtonComponent,
                buttons_1.FollowButtonComponent,
                buttons_1.AttendButtonComponent,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                list_errors_component_1.ListErrorsComponent,
                router_1.RouterModule,
                show_authed_directive_1.ShowAuthedDirective
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map