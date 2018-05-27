"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var matrix_component_1 = require("./matrix.component");
var editable_event_resolver_service_1 = require("./editable-event-resolver.service");
var shared_1 = require("../shared");
var matrix_routing_module_1 = require("./matrix-routing.module");
var MatrixModule = /** @class */ (function () {
    function MatrixModule() {
    }
    MatrixModule = __decorate([
        core_1.NgModule({
            imports: [shared_1.SharedModule, matrix_routing_module_1.MatrixRoutingModule],
            declarations: [matrix_component_1.MatrixComponent],
            providers: [editable_event_resolver_service_1.EditableEventResolver]
        })
    ], MatrixModule);
    return MatrixModule;
}());
exports.MatrixModule = MatrixModule;
//# sourceMappingURL=matrix.module.js.map