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
var EditorComponent = /** @class */ (function () {
    function EditorComponent(blogsService, route, router, fb, userService) {
        this.blogsService = blogsService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.userService = userService;
        this.blog = {};
        this.tagField = new forms_1.FormControl();
        this.errors = {};
        this.isSubmitting = false;
        // use the FormBuilder to create a form group
        this.blogForm = this.fb.group({
            title: '',
            description: '',
            toFrontPage: '',
            approved: '',
            showOnlyPreview: '',
            body: ''
        });
        // Initialized tagList as empty array
        this.blog.tagList = [];
        // Optional: subscribe to value changes on the form
        // this.blogForm.valueChanges.subscribe(value => this.updateBlog(value));
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If there's an blog prefetched, load it
        this.route.data.subscribe(function (data) {
            if (data.blog) {
                _this.blog = data.blog;
                _this.blogForm.patchValue(data.blog);
            }
        });
        // Load the current user's data
        this.userService.currentUser.subscribe(function (userData) {
            _this.isAdmin = (userData.isAdmin);
        });
    };
    EditorComponent.prototype.addTag = function () {
        // retrieve tag control
        var tag = this.tagField.value;
        // only add tag if it does not exist yet
        if (this.blog.tagList.indexOf(tag) < 0) {
            this.blog.tagList.push(tag);
        }
        // clear the input
        this.tagField.reset('');
    };
    EditorComponent.prototype.removeTag = function (tagName) {
        this.blog.tagList = this.blog.tagList.filter(function (tag) { return tag !== tagName; });
    };
    EditorComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        // update the model
        this.updateBlog(this.blogForm.value);
        // post the changes
        this.blogsService.save(this.blog).subscribe(function (blog) { return _this.router.navigateByUrl('/blog/' + blog.slug); }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    EditorComponent.prototype.updateBlog = function (values) {
        Object.assign(this.blog, values);
    };
    EditorComponent = __decorate([
        core_1.Component({
            selector: 'app-editor-page',
            templateUrl: './editor.component.html'
        }),
        __metadata("design:paramtypes", [core_2.BlogsService,
            router_1.ActivatedRoute,
            router_1.Router,
            forms_1.FormBuilder,
            core_2.UserService])
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;
//# sourceMappingURL=editor.component.js.map