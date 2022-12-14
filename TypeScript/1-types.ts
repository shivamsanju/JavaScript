/* -------- PRIMITIVE TYPES -------- */

// string, number, boolean
const x: number = 2;
const y: string = 'hello';
const z: boolean = true;



/* ------ ARRAYS ------- */

const arr: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];





/* ------- ANY TYPE ------- */

let obj: any = { x: 0 };
// None of the lines below throw compiler error - any skips type checking
obj.abc = 100;
obj();
obj.foo();


// Automatic type detection - variables
let xx = 'types';  // automaticaly detects types as string






/* ------ FUNCTION TYPES ------- */

const f = (name: string): string => {
    return `My name is ${name}`;
}

function f2(name: string): string {
    return `My name is ${name}`;
}

// Anonymous functions - functions where typescript can detect types
const names: string[] = ['Shivam', 'Satyam', 'Debu'];

names.forEach((name) => { 
    console.log(name.toLowerCase()); // typescript detects type of name automatically
})





/* ------- OBJECT TYPES & OPTIONAL PROPERTIES -------- */

const distance = (pt: {x: number, y: number}) : number => {
    return (pt.x - pt.y);
}


// Optional Properties
const printName = (name: {first: string, last?: string}): void => {
    console.log(name.first + name.last)
}
// Both OK
printName({first: "Shivam"})
printName({first: "Shivam", last: "Sanju"})


function printName2(obj: { first: string; last?: string }) {
    // console.log(obj.last.toUpperCase());  -----> Error - Object is possibly 'undefined'
    
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase()); //OK
    }
    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
}
   





/* --------- UNION TYPES ---------- */

const printId = (id: string | number): void => {
    console.log(id)
    // console.log(id.toUpperCase())  ----> Error: If we use union types we can only use methods which are availaibe on both types

    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id);
    }
}

printId('2')  // OK
printId(2)    // Ok
// printId({id: 2})  -----> Error

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}





/* -------- LITERAL TYPES ------------ */

let hello: "hello" = "hello";
// let hello: "hello" = "not hello";; ----> Error

let alignment: "left" | "right" | "center" = "center";
let binaryNumber: 0 | 1 = 1
// let binaryNumber2: 0 | 1 = 3 -------> Error




/* ----------- BIG INT -------------- */
// let bigNumber: bigint = 2000000n; - Available after es2020
