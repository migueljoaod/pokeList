import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  name: any[];
  id: any;

  constructor(private http: HttpClient) { }
  apiUrl = "https://pokeapi.co/api/v2/pokemon/";
  limit = "?limit=964"
  getPokemons(){
    return this.http.get(this.apiUrl + this.limit)
  }
  
  getPokemon(url){
    return this.http.get(url)
  }
  
  
}
