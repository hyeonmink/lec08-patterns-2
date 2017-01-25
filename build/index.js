"use strict";
var Ducks = require("./ducks"); //subclasses
var PondSimulation = (function () {
    function PondSimulation() {
        this.ducks = [];
        var mallard = new Ducks.MallardDuck(); //example
        this.ducks.push(mallard);
        this.ducks.push(new Ducks.RedheadDuck());
        this.ducks.push(new Ducks.TealDuck());
        this.ducks.push(new Ducks.RubberDuck());
        this.ducks.push(new Ducks.DecoyDuck());
    }
    PondSimulation.prototype.run = function () {
        this.ducks.forEach(function (duck) {
            console.log("..." + duck.display());
            duck.quack();
            duck.fly();
            console.log(""); //blank line
        });
    };
    return PondSimulation;
}());
var sim = new PondSimulation();
sim.run();
