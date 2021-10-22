import RuleInterface from "../interfaces/RuleInterface";

/**
 * @class
 * @classdesc Class that implement Buzz Rule
 * @author Marco Tribuzio
 */
class BuzzRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 5 === 0;
  }

  getRightWord(): string {
    return "Buzz";
  }
}

export default BuzzRule
