import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 9000
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 9001
  },
  {
    id: uuid(),
    name: 'Picoro',
    power: 7000
  }
  ];

  addCharacter( character: Character): void {

    const newCharacter: Character = {
      id: uuid(),
      ...character
    }
    this.characters.push( newCharacter );
  }

  // onDeleteCharacter(index: number) :void {
  //   console.log(index);
  //   this.characters.splice(index, 1);
  // }

 deleteCharacterById (id: string): void{
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
