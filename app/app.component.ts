import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
    { id: 1, name: 'Max' },
];

@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1>' +
      '<div *ngIf ="selectedHero">'+
  '<h2>{{selectedHero.name}} Mustermann</h2>' +
  '<div><label>Id: </label>{{selectedHero.id}}</div>' +
  '<div><label>Name: </label><input [(ngModel)]="selectedHero.name" placeholder="name"></div></div>' +
      '<h2>My Heroes</h2>' +
'<ul class="heroes">' +
'<li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">' +
'<span class="badge">{{hero.id}}</span> {{hero.name}}</li>' +
  '</ul>'+
    '<div class="trafficlight"> ' +
'<div class="protector"></div> ' +
'<div class="protector"></div> ' +
'<div class="protector"></div> ' +
'<div class="red"></div> ' +
'<div class="yellow"></div> ' +
  '<div class="green"></div> ' +
  '</div>',
    styles: [`
.selected {
    background-color: #CFD8DC !important;
    color: white;
}
.heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
}
.heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
}
.heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
}
.heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
}
.heroes .text {
    position: relative;
    top: -3px;
}
.heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
}

.trafficlight{
    background: #222;
    background-image: linear-gradient(transparent 2%, #111 2%, transparent 3%, #111 30%);
    width: 170px;
    height: 400px;
    border-radius: 20px;
    position: relative;
    border: solid 5px #333;
}

.trafficlight:before{
    background: #222;
    background-image: radial-gradient(#444, #000);
    content: "";
    width: 170px;
    height: 150px;
    margin: 0 auto;
    position: absolute;
    top: -20px;
    margin-left: 0px;
    border-radius: 50%;
    z-index: -1;
}

//.trafficlight:after{
//    background: #222;
//    background-image: linear-gradient(-90deg, #222 0%, #444 30%, #000);
//    content: "";
//    width: 50px;
//    height: 500px;
//    margin-left: 60px;
//    position: absolute;
//    top: 150px;
//    z-index: -1;
//}

.protector{
    background: transparent;
    width: 180px;
    height: 0;
    position: absolute;
    top: 20px;
    left: -35px;
    border-right: solid 30px transparent;
    border-left: solid 30px transparent;
    border-top: solid 90px #111;
    border-radius: 10px;
    z-index: -1;
}

.protector:nth-child(2){
    top: 140px;
}

.protector:nth-child(3){
    top: 260px;
}

.red{
    background: red;
    background-image: radial-gradient(brown, transparent);
    background-size: 5px 5px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: 35px;
    animation: 13s red infinite;
    border: dotted 2px red;
    box-shadow:
    0 0 20px #111 inset,
        0 0 10px red;
}

.yellow{
    background: yellow;
    background-image: radial-gradient(orange, transparent);
    background-size: 5px 5px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: dotted 2px yellow;
    position: absolute;
    top: 145px;
    left: 35px;
    animation: 13s yellow infinite;
    box-shadow:
    0 0 20px #111 inset,
        0 0 10px yellow;
}

.green{
    background: green;
    background-image: radial-gradient(lime, transparent);
    background-size: 5px 5px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: dotted 2px lime;
    position: absolute;
    top: 270px;
    left: 35px;
    box-shadow:
    0 0 20px #111 inset,
        0 0 10px lime;
    animation: 13s green infinite;
}

@keyframes red{
    0%{opacity: 1}
    20%{opacity: 1}
    40%{opacity: 1}
    60%{opacity: .1}
    80%{opacity: .1}
    100%{opacity: .1}
}

@keyframes yellow{
    0%{opacity: .1}
    20%{opacity: .1}
    40%{opacity: 1}
    50%{opacity: .1}
    60%{opacity: .1}
    80%{opacity: .1}
    100%{opacity: .1}
}

@keyframes green{
    0%{opacity: .1}
    20%{opacity: .1}
    40%{opacity: .1}
    60%{opacity: 1}
    80%{opacity: 1}
    83%{opacity: .1}
    86%{opacity: 1}
    89%{opacity: .1}
    93%{opacity: 1}
    96%{opacity: .1}
    100%{opacity: 1}
}
`]


})

export class AppComponent {
title = 'Kreditsimulation';
selectedHero : Hero ;
heroes = HEROES;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    berechneHaushaltsausgaben(einkommen, blablub): void{

    }
}


