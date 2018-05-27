"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppMyDashboardComponent = /** @class */ (function () {
    function AppMyDashboardComponent() {
        this.cards = [
            { title: 'Card 1', cols: 2, rows: 1 },
            { title: 'Card 2', cols: 1, rows: 1 },
            { title: 'Card 3', cols: 1, rows: 2 },
            { title: 'Card 4', cols: 1, rows: 1 }
        ];
    }
    AppMyDashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-my-dashboard',
            templateUrl: './my-dashboard.component.html',
            styleUrls: ['./my-dashboard.component.scss']
        })
    ], AppMyDashboardComponent);
    return AppMyDashboardComponent;
}());
exports.AppMyDashboardComponent = AppMyDashboardComponent;
//# sourceMappingURL=my-dashboard.component.js.map