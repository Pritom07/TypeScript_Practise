type paramType1 = number | string | boolean;
const formatValue = (value: paramType1): paramType1 => {
  if (typeof value === "string") return value.toUpperCase();
  else if (typeof value === "number") return value * 10;
  else return !value;
};

type paramType2 = string | Array<number> | Array<string>;
const getLength = (value: paramType2): number | undefined => {
  if (typeof value === "string") return value.length;
  if (Array.isArray(value)) return value.length;
};

class Person {
  public name: string;
  public age: number;
  public constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}
const person1 = new Person("John Doe", 30);
const person2 = new Person("Alice", 25);
