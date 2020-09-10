import { Component, OnInit } from '@angular/core';
import { Town } from '../town';
//import { Towns } from '../mock-town';
import { TownService } from '../town.service'

@Component({
  selector: 'app-list-town',
  templateUrl: './list-town.component.html',
  styleUrls: ['./list-town.component.css']
})
export class ListTownComponent implements OnInit {
  
  towns : Town[];        //declaring tonws is variable type Town
  selectedTown: Town; 
  constructor(private town: TownService) {}
  onSelect(town: Town): void{
    this.selectedTown = town;
    console.log("Clicked");
  }
  ngOnInit() {
    this.getTowns();
  }
  getTowns(): void {
    this.towns = this.town.getTowns();
  }
}
