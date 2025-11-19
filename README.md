## 1. TypeScript-এ `keyof` কীওয়ার্ডের ব্যবহার

`keyof` হল TypeScript-এর একটি অপারেটর, যা কোনো object type-এর **সব কীগুলোর union type** রিটার্ন করে।

### কেন দরকার?

- Object-এর property নামকে **type-safe** করতে
- Dynamic object key access করার সময় **ভুল এড়াতে**
- **Utility types** তৈরি করতে

---

### ✔ Example:

```ts
type User = {
  id: number;
  name: string;
  email: string;
};

type UserKeys = keyof User;
// "id" | "name" | "email"

function getValue(obj: User, key: UserKeys) {
  return obj[key];
}

const u: User = { id: 1, name: "Pritom", email: "pritommohajon4545@gmail.com" };

console.log(getValue(u, "name")); // valid
// console.log(getValue(u, "address")); // error: not a User key
```

### 📝 ব্যাখ্যা:

- `keyof User` → `"id" | "name" | "email"`
- অর্থাৎ, শুধুমাত্র এই ৩টি key ফাংশন প্যারামিটার হিসেবে নেওয়া যাবে
- ফলে **টাইপ সেফটি** নিশ্চিত থাকে

---

## 2. `any`, `unknown` এবং `never` টাইপের পার্থক্য

TypeScript-এ এই তিনটি টাইপ সবচেয়ে গুরুত্বপূর্ণ এবং confusing টাইপগুলোর একটি।  
এগুলো তিন ধরনের ভিন্ন ভিন্ন ব্যবহার আছে।

---

### **any type**

এটি TypeScript-এর সবচেয়ে flexible এবং dangerous টাইপ।

- যেকোনো value রাখা যায়
- Type checking বন্ধ হয়ে যায়
- ভুল কোডও error ছাড়াই চলে

```ts
let x: any = 10;
x = "Hello";
x = true; // সবই valid
```

### **unknown type**

এটি any এর মতো flexible, কিন্তু type-safe।

- যেকোনো value রাখা যায়
- কিন্তু value ব্যবহার করার আগে অবশ্যই type-check করতে হবে

```ts
let data: unknown = "hello";

if (typeof data === "string") {
  console.log(data.toUpperCase()); // safe
}
```

### **never type**

never মানে এই কোড কখনো return করবে না।

ব্যবহার হয় যখন—

- ফাংশন কোনো value return করে না
- infinite loop
- error throw করে
- unreachable code-এ

```ts
const errorMessage = (msg: string): never => {
  throw new Error(msg);
};
```
