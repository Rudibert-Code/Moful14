// Um etwas in eine andere Datei importieren zu können, MUSS es mit export freigegeben werden
export interface User{
    readonly name:string, // readonly  = Eigenschaften können nicht geändert werden
    role?:string, // Optionaler Objekt
}

interface Car{
    wheels:number,
}

interface Employee extends User, Car{ // extends User  = Alles was in User (siehe oben) bereits definiert wurde, wird hier automatisch hinzugefügt
    staff:boolean,
}

let carl:Employee = {
    name:"Karl",
    staff:true,
    role:"user",
    wheels:2,
}



let sven:Employee = {
    name:"Karl",
    staff:true,
    role:"user",
    wheels:2,
    birthday:"monday"
}

let person:Employee = sven; 
//  Checkt, ob in sven alle Angaben enthalten sind, die für interface "Employee" benötigt werden, wenn mehr enthalten sind, werden diese nicht als Fehler angezeigt. Dies verursacht allerdings Fehler.
//  Kann benutzt werden um zu prüfen, ob in einer von einer Datenbank erhaltenen Datei alle nötigen Informationen enthalten sind.