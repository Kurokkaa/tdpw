import {helloWorld,helloYou,helloHuman,repeathelloYou} from "./hello-funcs";
import type {Human}  from './types';

try {
    // Exemple d'appel à helloYou
    const message1 = helloYou("John"); // Cela va lever une erreur
    console.log(message1);
  } catch (error) {
    console.error("Error in helloYou:", (error as Error).message);
  }
  
  try {
    // Exemple d'appel à helloHuman
    const johnDoe: Human = {
      firstname: "John",
      lastname: "Doe",
      birthyear: 1980
    };
  
    const message2 = helloHuman(johnDoe); // Aucun problème ici
    console.log(message2);
  } catch (error) {
    console.error("Error in helloHuman:", (error as Error).message);
  }
  
  try {
    // Exemple d'appel à repeatHelloYou
    const message3 = repeathelloYou(7, "John"); // Cela va lever une erreur
    console.log(message3);
  } catch (error) {
    console.error("Error in repeatHelloYou:", (error as Error).message);
  }
