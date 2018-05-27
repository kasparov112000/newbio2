"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var editor_component_1 = require("./editor.component");
var editable_blog_resolver_service_1 = require("./editable-blog-resolver.service");
var core_2 = require("../core");
var routes = [
    {
        path: '',
        component: editor_component_1.EditorComponent,
        canActivate: [core_2.AuthGuard]
    },
    {
        path: ':slug',
        component: editor_component_1.EditorComponent,
        canActivate: [core_2.AuthGuard],
        resolve: {
            blog: editable_blog_resolver_service_1.EditableBlogResolver
        }
    }
];
var EditorRoutingModule = /** @class */ (function () {
    function EditorRoutingModule() {
    }
    EditorRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], EditorRoutingModule);
    return EditorRoutingModule;
}());
exports.EditorRoutingModule = EditorRoutingModule;
//# sourceMappingURL=editor-routing.module.js.map