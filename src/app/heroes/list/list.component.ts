import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] =
   ['Spiderman', 'Ironman', 'Thor',
   'Hulk', 'Black Widow', 'Captain America',
   'Hawkeye', 'Antman', 'Black Panther',
   'Vision', 'Wolverine', 'Deadpool',
   'Dr. Strange', 'Groot', 'Rocket Raccoon',
   ];

   public deletedHero?: string;

   removeLastHero(): void{
     this.deletedHero =this.heroNames.pop();
   }
}
