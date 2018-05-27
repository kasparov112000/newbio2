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
var DonateComponent = /** @class */ (function () {
    function DonateComponent(donationsService, route, router, fb, userService) {
        this.donationsService = donationsService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.userService = userService;
        this.donation = {};
        this.tagField = new forms_1.FormControl();
        this.errors = {};
        this.isSubmitting = false;
        // use the FormBuilder to create a form group
        this.donationForm = this.fb.group({
            title: '',
            description: '',
            location: '',
            body: ''
        });
        // Initialized tagList as empty array
        this.donation.tagList = [];
        // Optional: subscribe to value changes on the form
        // this.donationForm.valueChanges.subscribe(value => this.updateDonation(value));
    }
    DonateComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If there's an donation prefetched, load it
        this.userService.isAuthenticated.subscribe(function (authenticated) {
            _this.isAuthenticated = authenticated;
        });
        if (!this.isAuthenticated) {
            this.router.navigateByUrl('/login');
            return;
        }
        this.route.data.subscribe(function (data) {
            if (data.donation) {
                _this.donation = data.donation;
                _this.donationForm.patchValue(data.donation);
            }
        });
    };
    DonateComponent.prototype.addTag = function () {
        // retrieve tag control
        var tag = this.tagField.value;
        // only add tag if it does not exist yet
        if (this.donation.tagList.indexOf(tag) < 0) {
            this.donation.tagList.push(tag);
        }
        // clear the input
        this.tagField.reset('');
    };
    DonateComponent.prototype.removeTag = function (tagName) {
        this.donation.tagList = this.donation.tagList.filter(function (tag) { return tag !== tagName; });
    };
    DonateComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        // update the model
        this.updateDonation(this.donationForm.value);
        // post the changes
        this.donationsService.save(this.donation).subscribe(function (donation) { return _this.router.navigateByUrl('/donation/' + donation.slug); }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    DonateComponent.prototype.updateDonation = function (values) {
        Object.assign(this.donation, values);
    };
    DonateComponent = __decorate([
        core_1.Component({
            selector: 'app-donate-page',
            templateUrl: './donate.component.html'
        }),
        __metadata("design:paramtypes", [core_2.DonationsService,
            router_1.ActivatedRoute,
            router_1.Router,
            forms_1.FormBuilder,
            core_2.UserService])
    ], DonateComponent);
    return DonateComponent;
}());
exports.DonateComponent = DonateComponent;
//# sourceMappingURL=donate.component.js.map