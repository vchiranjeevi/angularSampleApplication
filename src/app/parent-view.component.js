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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var child_view_component_1 = require("./child-view.component");
var ParentViewComponent = ParentViewComponent_1 = (function () {
    function ParentViewComponent() {
        this.sampleData = "some parent Data";
        this.sampleChildData = '';
    }
    ParentViewComponent.prototype.handleEvent = function (childData) {
        this.sampleChildData = childData;
    };
    return ParentViewComponent;
}());
ParentViewComponent = ParentViewComponent_1 = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [ParentViewComponent_1, child_view_component_1.ChildViewComponent],
        bootstrap: [ParentViewComponent_1]
    }),
    core_1.Component({
        selector: 'app-parent-view',
        template: "\n    <div class=\"container parent-view\">\n    \t<div class=\"\">\n    \n    \t\t<h3>Parent Component</h3>\n    \n    \t\t\t<input type=\"text\" class=\"form-control\" value=\"{{ sampleData }}\" [(ngModel)]='sampleData'>\n    \n    \t\t\t<br>\n    \n    \t\t\t<p>Data from child component : <b>{{ sampleChildData }}</b></p>\n    \t\t<hr>\n    \t\t\n    \t\t<div class=\"child-view\">\n    \t\t\t<app-child-view [parentData]=\"sampleData\" (childData)='handleEvent($event)'>app-child-view</app-child-view>\n    \t\t</div>\n    \t\t\n    \t</div>\n    </div>\n    \n\t\t<br/>\n\t\t<div class=\"resource-provider\">Find more cool stuff at <a href=\"http://www.codershood.info/\">www.codershood.info</a></div>\n  "
    }),
    __metadata("design:paramtypes", [])
], ParentViewComponent);
exports.ParentViewComponent = ParentViewComponent;
var ParentViewComponent_1;
//# sourceMappingURL=parent-view.component.js.map