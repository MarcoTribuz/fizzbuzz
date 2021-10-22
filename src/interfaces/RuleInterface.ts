interface RuleInterface {
  matches(number: number): boolean;
  getRightWord(): string;
}

export default RuleInterface
