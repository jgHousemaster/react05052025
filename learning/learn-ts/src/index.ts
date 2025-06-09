let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;
let level;
level = 1;

function render(doc: any) {
  console.log(doc);
}

let numbers: number[] = [1, 2, 3];

let user: [number, string] = [1, "Mosh"]; // Keep tuples to 2 elements

const enum Size {
  Small,
  Medium,
  Large = "l",
} // 0, 1, 'l'

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000, 2022);

type Employee = {
  readonly id: number;
  name: string;
  fax?: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Bob",
  retire: (date: Date) => {
    console.log(date);
  },
};

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(100);

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase);
  else console.log("Hola!");
}

greet(null);

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined{
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
if (customer !== null && customer !== undefined) {
    console.log(customer?.birthday?.getFullYear());
}

function getFirstElement<T>(array: T[]) {
    return array[0];
}

const myNumbers = [1, 2, 3]
const firstNum = getFirstElement<number>(myNumbers)
