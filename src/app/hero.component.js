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
var hero_service_1 = require("./hero.service");
var HeroComponent = (function () {
    function HeroComponent(_heroService) {
        this._heroService = _heroService;
        this.value = "";
    }
    HeroComponent.prototype.ngOnInit = function () {
        this.value = this._heroService.getApp();
    };
    return HeroComponent;
}());
HeroComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: '<div>{{value}}</div>',
        providers: [hero_service_1.HeroService]
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroComponent);
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.component.js.map