function sum(...numbers: number[]): number {
   return numbers.reduce((acc, current) => acc + current, 0);
  }
  console.log(sum(1, 2, 3));
  console.log(sum(10, 20, 30, 40));
  export {};