import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero1 = 'Windstorm';

  hero: Hero = {
    id:1,
    name: 'Pep'
  };

  constructor() { }

  ngOnInit() {
  }

}
