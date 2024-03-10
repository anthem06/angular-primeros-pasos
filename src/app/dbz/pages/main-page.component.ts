import { Component } from '@angular/core';

import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent {

  public characters: Character[] = [{
    name: 'Goku',
    power: 9000
  },
  {
    name: 'Vegeta',
    power: 9001
  },
  {
    name: 'Picoro',
    power: 7000
  }
  ];

  onNewCharacter( character: Character): void {
    console.log('MainPage')
    console.log(character);
  }
}
