/***
 * Method Strategies 
 ***/

abstract class FlyBehavior {
  private speed;
  abstract fly():void;
  getSpeed():number;
}

class CanFlyBehavior extends FlyBehavior {
  fly():void { console.log("The duck flies through the air"); }
}

class NoFlyBehavior implements FlyBehavior {
  fly():void {}
}

interface QuackBehavior {
  quack():void;
}

class Quack implements QuackBehavior {
  quack() { console.log("Quack quack quack!")}
}

class Squeek implements QuackBehavior {
  quack() { console.log("Squeek!")}
}

class SilentQuack implements QuackBehavior {
  quack() {};
}


/**
 * A class that represents an abstract Duck.
 */
export abstract class Duck {

  //defaut can fly and quack
  protected flyBehavior:FlyBehavior = new CanFlyBehavior();
  protected quackBehavior:QuackBehavior = new Quack();

  quack() {
    this.quackBehavior.quack();
  }

  fly() {
    this.flyBehavior.fly();
  }

  getSpeed() {
    return this.flyBehavior.getSpeed();
  }

  /**
   * Gets the duck's description
   * @returns A description of the duck
   */
  abstract display():string;
}

class HatDecorator extends DuckDecorator {
  private duck:Duck;
  private tipStrategy:tipBehavior;

  setTip() {

  }

  tip() {
    this.tipStrategy.tip();
  }

}

new HatDecorator(new Mallard(), new JauntyTip())

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
    this.quackBehavior = new Squeek();
  }

  display() {
    return "A rubber ducky!"
  }
}

export class DecoyDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new NoFlyBehavior();
    this.quackBehavior = new SilentQuack();
  }

  display() {
    return "Looks like a duck, but isn't";
  }
}