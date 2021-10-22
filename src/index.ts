import FizzBuzzGame from "./classes/FizzBuzzGame";
import FizzRule from "./classes/FizzRule";
import FizzBuzzRule from "./classes/FizzBuzzRule";
import BuzzRule from "./classes/BuzzRule";

const fizzBuzzGame = new FizzBuzzGame();
fizzBuzzGame.addRule(new FizzBuzzRule())
fizzBuzzGame.addRule(new FizzRule())
fizzBuzzGame.addRule(new BuzzRule())
const result = fizzBuzzGame.generate(100);

console.log(result.join(", "));
