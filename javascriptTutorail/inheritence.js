const person = {
  name: "Eyup",
  lastName: "Ersoy",
  printName() {
    console.log(`my name is ${this.name}`);
  },
};

function printLastName() {
  console.log(`my last name is ${this.lastName}`);
}
globalThis.lastName = "Batman";
person.printName();
printLastName();
// printLastName.call(person);

function Player(name, goalCount) {
  this.name = name;
  this.goalCount = goalCount;
  this.shootGoal = function () {
    console.log(`${this.name} scored ${this.goalCount} goals `);
  };
}

class BestPlayer extends Player {
  constructor(name, goalCount, bestPlayer) {
    super(name, goalCount);
    this.bestPlayer = bestPlayer;
  }
  shootGoal() {
    console.log(`${this.name} scored ${this.goalCount} goals `);
  }
  isSuperPlayer() {
    if (this.bestPlayer) {
      console.log(`${this.name} is best player `);
    }
  }
}

const player = new Player("Ronaldo", 5);
Player.prototype.getGoalCount = function () {
  console.log(`Number of Goals ${this.name} scored is: ${this.goalCount}`);
};
player.getGoalCount();
const player2 = new Player("Hagi", 3);
player2.getGoalCount();
player.shootGoal();

const bestPlayer = new BestPlayer("Messi", 15, true);
bestPlayer.shootGoal();
bestPlayer.isSuperPlayer();
