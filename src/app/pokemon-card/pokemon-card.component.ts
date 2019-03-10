import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  pokemons: Object;
  pokemon: Object;
  constructor(public data:DataService, private route: ActivatedRoute, private router: Router) { }

  pokemonUrl: "https://pokeapi.co/api/v2/pokemon/25/";

  setUrl(url){
    this.pokemonUrl = url;
  }

  ngOnInit() {
    this.data.getPokemons().subscribe(data => {
      this.pokemons = data;
      console.log(this.pokemons);      
    }) 
  }
}
