import RuleInterface from "../interfaces/RuleInterface";

/**
 * @class
 * @classdesc Class that implement Fizz Buzz Rule
 * @author Marco Tribuzio
 */
class FizzBuzzRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 3 === 0 && number % 5 === 0;
  }

  getRightWord(): string {
    return "FizzBuzz";
  }
}

export default FizzBuzzRule
