interface FlyBehavior {
  fly():void;
}

export class CanFlyBehavior implements FlyBehavior {
  fly():void {
    console.log("Flies away!");
  }
}

class NoFlyBehavior implements FlyBehavior {
  fly():void {}
}

/** Example of strategies as Functions not Classes */
interface FlyFunction {
  (dist:number): void;
}

let canFlyFunction:FlyFunction = function(dist:number){
  console.log("Flying!");
}

// let behavior:FlyBehavior = new NoFlyBehavior();
// behavior.fly();


/**
 * A class that represents a Duck.
 * Intended to be extended to specific species.
 */
export abstract class Duck {

  public flyBehavior:FlyBehavior = new CanFlyBehavior();
  //private eatBehavior = new EatsBehavior();

  /**
   * Has the duck speak
   */
  quack() {
    console.log("quack!"); //prints a message
  }

  /**
   * Has the duck swim.
   * @param distance how far to swim
   */
  swim(distance:number) {
    console.log("Swims the "+distance+"m duckstyle.") //prints a message about swimming
  }

  /**
   * Gets the duck's description
   * @returns A description of the duck
   */
  abstract display():string;

  fly() {
    // console.log("Flies away!");
    this.flyBehavior.fly();
  }

  // eat() {
  //   this.eatBehavior.eat();
  // }
}


export class RedheadDuck extends Duck {
  display() {
    return "Looks like a RedHead";
  }

}


export class MallardDuck extends Duck {
  display() {
    return "Looks like a Mallard";
  } 
}


export class TealDuck extends Duck {
  display() {
    return "Looks like a Teal";
  }
}


export class RubberDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new NoFlyBehavior();
  }

  quack() {
    console.log('squeek!')
  }

  display() {
    return "A rubber ducky!"
  }
}

export class DecoyDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new NoFlyBehavior();
  }

  quack() {}
  display() {
    return "Looks like a duck, but isn't";
  }
}