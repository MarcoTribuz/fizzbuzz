import RuleInterface from "../interfaces/RuleInterface";

/**
 * @class
 * @classdesc Class that implements the game
 */
class FizzBuzzGame {
  rules: RuleInterface[] = [];

  addRule(rule: RuleInterface): void {
    this.rules.push(rule)
  }

  generate(n: number): string[] {
    const output: string[] = [];

    for (let i = 1; i <= n; i++) {
      output.push(this.getReplacement(i))
    }

    return output;
  }

  getReplacement (n: number): string {
    for (const rule of this.rules){
      if (rule.matches(n)) {
        return rule.getRightWord()
      }
    }
    return n.toString()
  }
}

export default FizzBuzzGame
