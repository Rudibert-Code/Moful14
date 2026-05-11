// Primitive Types

let myString:string = "Das ist ein String"; // :string = "Zeichenkette" , "123"
let myNumber:number = 123; // :number = 123, 1.23, NaN
let myBoolean:boolean = true; // :boolean = true  or  false  statement

let myNull:null = null; // Ergebnis wird erwartet, aber aktuell ist es auf 0 / Nutzung zB. für leere Strings
let myUndefined:undefined; // was ein Ergebnis ist, ist nicht definiert 

// weitere primitive types : bigInt & Symbol

let myAny:any; // :any vermeiden




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// Zusweisen

// Da TypeScript zB. einen String direkt daran erkennt, dass dessen Inhalt in "..." steht, muss unser Beispiel
//  nicht mit  :string  als solcher definiert werden. Gute Form  >  let exampleString = "This is an example."

let exampleString:string | number = "This is an example." // UNION_Type  >  kann sowohl String als auch Number beinhalten.



class MyClass{
    myAttribute:string; // TypeScript kann benutzt werden um in Klassen Attribute vorzudefinieren

    constructor(){
        this.myAttribute = "Hallo"
    }
}



let myLiteral: "admin" | "staff" | "member" | 42 = 42; // Literals geben GENAUE Typen vor



let myFirstArray:number[] = [123, 456, 789] // Inhalt-Type eines Arrays wird VOR dem Array-Type festgelegt
let mySecondArray:string[] |number[] = [123, 456, 789] //  :string[] | number[]  Array kann ENTWEDER nur strings ODER nur numbers enthalten
let myThirdArray:(string|number)[] = [123, 456, 789] // :( string | number ) [] Array kann strings UND numbers enthalten

let myZeroArray:[] = [] // :[] Array kann nur nichts enthalten




let myTupelArray:[string,number] = ["admin", 42] // :[ sting , number ] Array kann nur zwei Objekte enthalten. Objekte müssen in der vorgegebenen Reihenfolge 1. "String" 2. Number enthalten sein
// Beispiel
let myExampleTupelArray:[string, 42 | 24, boolean] = ["admin", 24 , true] // Array kann nur 1. einen "string", 2. die Zahl 42 oder 24 und 3. true / false enthalten




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




function withReturn(a:number,b:number):number{ // Funktion kann nur Number "a" und Number "b" enthalten und als Returnwert eine Number herausgegeben
    return a + b;
}

function withoutReturn(name?:string):void{ // die Variable der Funktion kann ein Name sein, oder undefiniert sein. Die art des Ergebnisses ist nicht definiert (:void)
    console.log(name ? name : "unknown"); // name?  Falls name vorhanden, console.log(name), sonst console.log("unknown")
}



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// Objekte
// Attribute in Objecten können vordefiniert werden. Objekt kann nur Attribute enthalten, die vordefiniert wurden
let myProduct:{ 
    name:string,

    // Optionales Attribut
    price?:number,

    // Parameter in Methoden, so wie deren Returnwert können vordefiniert werden
    logger: (message:string) => void
} = {
    name : "Book",

    logger:(message) => {console.log(message)}
}




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// Interfaces

// wurde in interfaces.ts verschoben
//interface User{
//    name:string,
//    role?:string, // Optionaler Objekt
//}

import {User} from './interfaces'; // User wird aus './interfaces' importiert

function logAdmin(user:User) : User{ // Nach Definition durch interface kann User als typ (user : User) und zur definition des Returnwerts benutzt werden
    return user
}




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// Inport - Export