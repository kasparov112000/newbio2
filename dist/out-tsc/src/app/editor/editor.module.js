"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var editor_component_1 = require("./editor.component");
var editable_blog_resolver_service_1 = require("./editable-blog-resolver.service");
var shared_1 = require("../shared");
var editor_routing_module_1 = require("./editor-routing.module");
var EditorModule = /** @class */ (function () {
    function EditorModule() {
    }
    EditorModule = __decorate([
        core_1.NgModule({
            imports: [shared_1.SharedModule, editor_routing_module_1.EditorRoutingModule],
            declarations: [editor_component_1.EditorComponent],
            providers: [editable_blog_resolver_service_1.EditableBlogResolver]
        })
    ], EditorModule);
    return EditorModule;
}());
exports.EditorModule = EditorModule;
//# sourceMappingURL=editor.module.js.map