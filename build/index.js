"use strict";
var Ducks = require("./ducks"); //subclasses
//make some ducks
var mallard = new Ducks.MallardDuck(); //example
var ducks = [];
ducks.push(mallard);
ducks.push(new Ducks.RedheadDuck());
ducks.push(new Ducks.TealDuck());
ducks.push(new Ducks.RubberDuck());
ducks.push(new Ducks.DecoyDuck());
//rubby ducky can fly
ducks[3].flyBehavior = new Ducks.CanFlyBehavior();
//have them all act!
ducks.forEach(function (duck) {
    console.log(duck.display());
    duck.quack();
    duck.fly();
});
