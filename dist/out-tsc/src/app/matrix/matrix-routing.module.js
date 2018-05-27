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
var matrix_component_1 = require("./matrix.component");
var editable_event_resolver_service_1 = require("./editable-event-resolver.service");
var core_2 = require("../core");
var routes = [
    {
        path: '',
        component: matrix_component_1.MatrixComponent,
        canActivate: [core_2.AuthGuard]
    },
    {
        path: ':slug',
        component: matrix_component_1.MatrixComponent,
        canActivate: [core_2.AuthGuard],
        resolve: {
            event: editable_event_resolver_service_1.EditableEventResolver
        }
    }
];
var MatrixRoutingModule = /** @class */ (function () {
    function MatrixRoutingModule() {
    }
    MatrixRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], MatrixRoutingModule);
    return MatrixRoutingModule;
}());
exports.MatrixRoutingModule = MatrixRoutingModule;
//# sourceMappingURL=matrix-routing.module.js.map