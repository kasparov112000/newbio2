"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var donate_component_1 = require("./donate.component");
var editable_donate_resolver_service_1 = require("./editable-donate-resolver.service");
var shared_1 = require("../shared");
var donate_routing_module_1 = require("./donate-routing.module");
var DonateModule = /** @class */ (function () {
    function DonateModule() {
    }
    DonateModule = __decorate([
        core_1.NgModule({
            imports: [shared_1.SharedModule, donate_routing_module_1.DonateRoutingModule],
            declarations: [donate_component_1.DonateComponent],
            providers: [editable_donate_resolver_service_1.EditableDonateResolver]
        })
    ], DonateModule);
    return DonateModule;
}());
exports.DonateModule = DonateModule;
//# sourceMappingURL=donate.module.js.map