import { Component, Input } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponentDbz {

  //En caso de que no reciba datos enviara los de abajo como default
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];
 }
