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

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (book: Book): void => {
  const bookDetail = `Title: ${book.title}, Author: ${
    book.author
  }, Published: ${book.publishedYear}, Available: ${
    book.isAvailable ? "Yes" : "No"
  }`;
  console.log(bookDetail);
};

interface Iunique {
  (arr1: Array<number>, arr2: Array<number>): Array<number>;
}
const insertionSorting = (arr: Array<number>): Array<number> => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};
const binarySearch = (arr: Array<number>, target: number): boolean => {
  const sortedArray = insertionSorting(arr);
  let left = 0;
  let right = sortedArray.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (sortedArray[mid] === target) {
      return true;
    }
    if (sortedArray[mid] > target) {
      right = mid - 1;
    }
    if (sortedArray[mid] < target) {
      left = mid + 1;
    }
  }
  return false;
};

const getUniqueValues: Iunique = (arr1, arr2) => {
  const arr: Array<number> = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        break;
      } else {
        if (
          binarySearch(arr, arr1[i]) === true &&
          binarySearch(arr, arr2[j]) === true
        ) {
          break;
        }
        if (
          binarySearch(arr, arr1[i]) === true &&
          binarySearch(arr, arr2[j]) === false
        ) {
          arr[arr.length] = arr2[j];
        }
        if (
          binarySearch(arr, arr1[i]) === false &&
          binarySearch(arr, arr2[j]) === true
        ) {
          arr[arr.length] = arr1[i];
        }
        if (
          binarySearch(arr, arr1[i]) === false &&
          binarySearch(arr, arr2[j]) === false
        ) {
          arr[arr.length] = arr1[i];
          arr[arr.length] = arr2[j];
        }
      }
    }
  }
  return arr;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const totalPriceCalculation = (arr: Array<number>): number => {
  const total = arr.reduce((init, val) => {
    return init + val;
  }, 0);
  return total;
};
const calculateTotalPrice = (arr: Array<Product>): number => {
  const priceArray: Array<number> = arr.map((productObj: Product) => {
    const initAmount = productObj.price * productObj.quantity;
    if (productObj?.discount) {
      const totDiscount = (productObj?.discount / 100) * initAmount;
      const totPrice = initAmount - totDiscount;
      return totPrice;
    }
    return initAmount;
  });
  return totalPriceCalculation(priceArray);
};
