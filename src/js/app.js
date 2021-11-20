import Magician from './characters/Magician';

const gandalf = new Magician('Gandalf');
gandalf.stoned = true;

gandalf._attack = 100;
gandalf.attack = 5;

console.log(gandalf);
