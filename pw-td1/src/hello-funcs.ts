import type Human from './types';

export  {helloWorld};
/*Fonction retournant une phrase
return String
*/
function helloWorld(){
    return "Hello, World!";
}

export function helloYou(name:String){
    return "Hello, " + name;
}

export function helloHuman(human: Human): string {
    const currentYear = new Date().getFullYear();
    const age = currentYear - human.birthyear;
    return `Hello, ${human.firstname} ${human.lastname}! You are ${age} years old.`;
}

export function repeathelloYou(n:number, name:string){
    let chaine:string= "";
    for(let i = 0; i < n; i++){
        chaine += helloYou(name) + "\n";
    }
    return chaine;
}