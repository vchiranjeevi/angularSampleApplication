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
var ChildViewComponent = ChildViewComponent_1 = (function () {
    function ChildViewComponent() {
        this.outgoingData = new core_1.EventEmitter();
        this.childSampleData = "Some child Data";
    }
    ChildViewComponent.prototype.sendData = function (data) {
        this.outgoingData.emit(data);
    };
    return ChildViewComponent;
}());
__decorate([
    core_1.Input('parentData'),
    __metadata("design:type", String)
], ChildViewComponent.prototype, "incomingData", void 0);
__decorate([
    core_1.Output('childData'),
    __metadata("design:type", Object)
], ChildViewComponent.prototype, "outgoingData", void 0);
ChildViewComponent = ChildViewComponent_1 = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [ChildViewComponent_1],
        bootstrap: [ChildViewComponent_1]
    }),
    core_1.Component({
        selector: 'app-child-view',
        template: "<h3>Child Component</h3>\n\n<div class=\"parent-data\">\n\tData from parent view : <b>{{ incomingData }}</b>\n</div>\n\n<div class=\"child-data\">\n\t<input type=\"text\" class=\"form-control\" \n\t\tvalue=\"{{ childSampleData }}\" \n\t\t[(ngModel)]='childSampleData' \n\t\t(ngModelChange)=\"sendData($event)\" \n\t\tplaceholder=\"write some thing to send parent component\">\n</div> ",
    }),
    __metadata("design:paramtypes", [])
], ChildViewComponent);
exports.ChildViewComponent = ChildViewComponent;
var ChildViewComponent_1;
//# sourceMappingURL=child-view.component.js.map