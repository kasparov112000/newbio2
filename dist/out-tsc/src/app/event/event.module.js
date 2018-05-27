"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var event_component_1 = require("./event.component");
var event_comment_component_1 = require("./event-comment.component");
var event_resolver_service_1 = require("./event-resolver.service");
var markdown_pipe_1 = require("./markdown.pipe");
var shared_1 = require("../shared");
var event_routing_module_1 = require("./event-routing.module");
var EventModule = /** @class */ (function () {
    function EventModule() {
    }
    EventModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_1.SharedModule,
                event_routing_module_1.EventRoutingModule
            ],
            declarations: [
                event_component_1.EventComponent,
                event_comment_component_1.EventCommentComponent,
                markdown_pipe_1.MarkdownPipe
            ],
            providers: [
                event_resolver_service_1.EventResolver
            ]
        })
    ], EventModule);
    return EventModule;
}());
exports.EventModule = EventModule;
//# sourceMappingURL=event.module.js.map