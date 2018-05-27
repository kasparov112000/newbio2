"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var auth_module_1 = require("./auth/auth.module");
var home_module_1 = require("./home/home.module");
var home2_module_1 = require("./home2/home2.module");
var home3_module_1 = require("./home3/home3.module");
var shared_1 = require("./shared");
var app_my_nav_component_1 = require("./app-my-nav/app-my-nav.component");
var app_routing_module_1 = require("./app-routing.module");
var core_module_1 = require("./core/core.module");
var animations_1 = require("@angular/platform-browser/animations");
var layout_1 = require("@angular/cdk/layout");
var material_1 = require("@angular/material");
var first_page_component_1 = require("./first-page/first-page.component");
var my_dashboard_component_1 = require("./my-dashboard/my-dashboard.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [my_dashboard_component_1.AppMyDashboardComponent, app_component_1.AppComponent, shared_1.FooterComponent, shared_1.HeaderComponent, app_my_nav_component_1.AppMyNavComponent, first_page_component_1.FirstPageComponent],
            imports: [
                platform_browser_1.BrowserModule,
                core_module_1.CoreModule,
                shared_1.SharedModule,
                home_module_1.HomeModule,
                home2_module_1.Home2Module,
                home3_module_1.Home3Module,
                auth_module_1.AuthModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                layout_1.LayoutModule,
                material_1.MatToolbarModule,
                material_1.MatButtonModule,
                material_1.MatSidenavModule,
                material_1.MatIconModule,
                material_1.MatListModule,
                material_1.MatGridListModule,
                material_1.MatCardModule,
                material_1.MatMenuModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map