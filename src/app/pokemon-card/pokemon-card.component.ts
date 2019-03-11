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
  p: number = 1;
  pokemons: Object;
  pokemon: Object;
  constructor(public data:DataService, private route: ActivatedRoute, private router: Router) { }

  pokemonUrl: any;

  setUrl(url){
    this.pokemonUrl = url;
  }

  ngOnInit() {
    this.getPokemons();
    this.getPokemon(this.pokemonUrl);
  }
  getPokemons(){
    this.data.getPokemons().subscribe(data => {
      this.pokemons = data['results'];
      console.log(this.pokemons);      
    })
  }

  getPokemon(pokemonUrl){
    this.data.getPokemon(pokemonUrl).subscribe(data => {
      this.pokemon = data['results'];
      console.log(this.pokemon);      
    })
  }
   
}
