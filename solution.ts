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

type itemsObj = { title: string; rating: number };
type FilterByRating = (arr: Array<itemsObj>) => Array<itemsObj>;
const filterByRating: FilterByRating = (arr) => {
  const newArray = arr.filter((item) => item.rating >= 4.0);
  return newArray;
};

type usersType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
type ActiveUsersFunc = (arr: Array<usersType>) => Array<usersType>;
const filterActiveUsers: ActiveUsersFunc = (arr) => {
  const activeUsersArray = arr.filter((user) => user.isActive === true);
  return activeUsersArray;
};
