import { Duck } from './ducks'; //general class
import * as Ducks from './ducks'; //subclasses

class PondSimulation {
  private ducks:Duck[] = [];

  constructor() {
    let mallard = new Ducks.MallardDuck(); //example
    this.ducks.push(mallard);
    this.ducks.push(new Ducks.RedheadDuck());
    this.ducks.push(new Ducks.TealDuck());
    this.ducks.push(new Ducks.RubberDuck());
    this.ducks.push(new Ducks.DecoyDuck());
  }

  run() {
    this.ducks.forEach( (duck:Duck) => {
      console.log("..."+duck.display());
      duck.quack();
      duck.fly();
      console.log(""); //blank line
    });
  }
}

let sim:PondSimulation = new PondSimulation();
sim.run();