import { Component,  EventEmitter,  Input, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponentDbz {

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();


  //En caso de que no reciba datos enviara los de abajo como default
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  onDeleteCharacter(index: number): void {
    console.log(index);
    this.onDelete.emit(index);
  }
 }
