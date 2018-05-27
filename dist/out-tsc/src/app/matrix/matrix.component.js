"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var core_2 = require("../core");
var MatrixComponent = /** @class */ (function () {
    function MatrixComponent(eventsService, route, router, fb) {
        this.eventsService = eventsService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.event = {};
        this.tagField = new forms_1.FormControl();
        this.errors = {};
        this.isSubmitting = false;
        // use the FormBuilder to create a form group
        this.eventForm = this.fb.group({
            title: '',
            description: '',
            location: '',
            body: ''
        });
        // Initialized tagList as empty array
        this.event.tagList = [];
        // Optional: subscribe to value changes on the form
        // this.eventForm.valueChanges.subscribe(value => this.updateEvent(value));
    }
    MatrixComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If there's an event prefetched, load it
        this.route.data.subscribe(function (data) {
            if (data.event) {
                _this.event = data.event;
                _this.eventForm.patchValue(data.event);
            }
        });
    };
    MatrixComponent.prototype.addTag = function () {
        // retrieve tag control
        var tag = this.tagField.value;
        // only add tag if it does not exist yet
        if (this.event.tagList.indexOf(tag) < 0) {
            this.event.tagList.push(tag);
        }
        // clear the input
        this.tagField.reset('');
    };
    MatrixComponent.prototype.removeTag = function (tagName) {
        this.event.tagList = this.event.tagList.filter(function (tag) { return tag !== tagName; });
    };
    MatrixComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        // update the model
        this.updateEvent(this.eventForm.value);
        // post the changes
        this.eventsService.save(this.event).subscribe(function (event) { return _this.router.navigateByUrl('/event/' + event.slug); }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    MatrixComponent.prototype.updateEvent = function (values) {
        Object.assign(this.event, values);
    };
    MatrixComponent = __decorate([
        core_1.Component({
            selector: 'app-matrix-page',
            templateUrl: './matrix.component.html'
        }),
        __metadata("design:paramtypes", [core_2.EventsService,
            router_1.ActivatedRoute,
            router_1.Router,
            forms_1.FormBuilder])
    ], MatrixComponent);
    return MatrixComponent;
}());
exports.MatrixComponent = MatrixComponent;
//# sourceMappingURL=matrix.component.js.map