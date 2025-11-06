type Flatten<T> = T extends (infer E)[] ? E : T;
type NumArray = number[];
type Str = string;
let el1: Flatten<NumArray> = 123;
let el2: Flatten<Str> = "hello";

// @ts-expect-error 
let errorEl: Flatten<NumArray> = "string";
console.log("Soru 19 Başarılı!", el1, el2);
export {};