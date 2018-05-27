"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_my_nav_component_1 = require("./app-my-nav.component");
describe('MyNavComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.fakeAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_my_nav_component_1.AppMyNavComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(app_my_nav_component_1.AppMyNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should compile', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=app-my-nav.component.spec.js.map