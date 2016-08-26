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
var core_1 = require('@angular/core');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
    { id: 1, name: 'Max' },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Kreditsimulation';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent.prototype.berechneHaushaltsausgaben = function (einkommen, blablub) {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>{{title}}</h1>' +
                '<div *ngIf ="selectedHero">' +
                '<h2>{{selectedHero.name}} Mustermann</h2>' +
                '<div><label>Id: </label>{{selectedHero.id}}</div>' +
                '<div><label>Name: </label><input [(ngModel)]="selectedHero.name" placeholder="name"></div></div>' +
                '<h2>My Heroes</h2>' +
                '<ul class="heroes">' +
                '<li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">' +
                '<span class="badge">{{hero.id}}</span> {{hero.name}}</li>' +
                '</ul>' +
                '<div class="trafficlight"> ' +
                '<div class="protector"></div> ' +
                '<div class="protector"></div> ' +
                '<div class="protector"></div> ' +
                '<div class="red"></div> ' +
                '<div class="yellow"></div> ' +
                '<div class="green"></div> ' +
                '</div>',
            styles: ["\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n}\n.heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n}\n.heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n}\n.heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n}\n.heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n}\n.heroes .text {\n    position: relative;\n    top: -3px;\n}\n.heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n}\n\n.trafficlight{\n    background: #222;\n    background-image: linear-gradient(transparent 2%, #111 2%, transparent 3%, #111 30%);\n    width: 170px;\n    height: 400px;\n    border-radius: 20px;\n    position: relative;\n    border: solid 5px #333;\n}\n\n.trafficlight:before{\n    background: #222;\n    background-image: radial-gradient(#444, #000);\n    content: \"\";\n    width: 170px;\n    height: 150px;\n    margin: 0 auto;\n    position: absolute;\n    top: -20px;\n    margin-left: 0px;\n    border-radius: 50%;\n    z-index: -1;\n}\n\n//.trafficlight:after{\n//    background: #222;\n//    background-image: linear-gradient(-90deg, #222 0%, #444 30%, #000);\n//    content: \"\";\n//    width: 50px;\n//    height: 500px;\n//    margin-left: 60px;\n//    position: absolute;\n//    top: 150px;\n//    z-index: -1;\n//}\n\n.protector{\n    background: transparent;\n    width: 180px;\n    height: 0;\n    position: absolute;\n    top: 20px;\n    left: -35px;\n    border-right: solid 30px transparent;\n    border-left: solid 30px transparent;\n    border-top: solid 90px #111;\n    border-radius: 10px;\n    z-index: -1;\n}\n\n.protector:nth-child(2){\n    top: 140px;\n}\n\n.protector:nth-child(3){\n    top: 260px;\n}\n\n.red{\n    background: red;\n    background-image: radial-gradient(brown, transparent);\n    background-size: 5px 5px;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    position: absolute;\n    top: 20px;\n    left: 35px;\n    animation: 13s red infinite;\n    border: dotted 2px red;\n    box-shadow:\n    0 0 20px #111 inset,\n        0 0 10px red;\n}\n\n.yellow{\n    background: yellow;\n    background-image: radial-gradient(orange, transparent);\n    background-size: 5px 5px;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    border: dotted 2px yellow;\n    position: absolute;\n    top: 145px;\n    left: 35px;\n    animation: 13s yellow infinite;\n    box-shadow:\n    0 0 20px #111 inset,\n        0 0 10px yellow;\n}\n\n.green{\n    background: green;\n    background-image: radial-gradient(lime, transparent);\n    background-size: 5px 5px;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    border: dotted 2px lime;\n    position: absolute;\n    top: 270px;\n    left: 35px;\n    box-shadow:\n    0 0 20px #111 inset,\n        0 0 10px lime;\n    animation: 13s green infinite;\n}\n\n@keyframes red{\n    0%{opacity: 1}\n    20%{opacity: 1}\n    40%{opacity: 1}\n    60%{opacity: .1}\n    80%{opacity: .1}\n    100%{opacity: .1}\n}\n\n@keyframes yellow{\n    0%{opacity: .1}\n    20%{opacity: .1}\n    40%{opacity: 1}\n    50%{opacity: .1}\n    60%{opacity: .1}\n    80%{opacity: .1}\n    100%{opacity: .1}\n}\n\n@keyframes green{\n    0%{opacity: .1}\n    20%{opacity: .1}\n    40%{opacity: .1}\n    60%{opacity: 1}\n    80%{opacity: 1}\n    83%{opacity: .1}\n    86%{opacity: 1}\n    89%{opacity: .1}\n    93%{opacity: 1}\n    96%{opacity: .1}\n    100%{opacity: 1}\n}\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map