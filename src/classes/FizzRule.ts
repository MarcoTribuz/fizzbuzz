import RuleInterface from "../interfaces/RuleInterface";

/**
 * @class
 * @classdesc Class that implement Fizz Rule
 * @author Marco Tribuzio
 */
class FizzRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 3 === 0;
  }

  getRightWord(): string {
    return "Fizz";
  }
}

export default FizzRule
