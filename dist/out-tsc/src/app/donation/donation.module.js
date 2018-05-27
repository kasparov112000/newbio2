"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var donation_component_1 = require("./donation.component");
var donation_comment_component_1 = require("./donation-comment.component");
var donation_resolver_service_1 = require("./donation-resolver.service");
var markdown_pipe_1 = require("./markdown.pipe");
var shared_1 = require("../shared");
var donation_routing_module_1 = require("./donation-routing.module");
var DonationModule = /** @class */ (function () {
    function DonationModule() {
    }
    DonationModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_1.SharedModule,
                donation_routing_module_1.DonationRoutingModule
            ],
            declarations: [
                donation_component_1.DonationComponent,
                donation_comment_component_1.DonationCommentComponent,
                markdown_pipe_1.MarkdownPipe
            ],
            providers: [
                donation_resolver_service_1.DonationResolver
            ]
        })
    ], DonationModule);
    return DonationModule;
}());
exports.DonationModule = DonationModule;
//# sourceMappingURL=donation.module.js.map