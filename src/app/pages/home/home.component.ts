import { Component } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(
  private service: PokemonService
){

}
pokemonList: PokemonData[] = []
loading: boolean = true;

ngOnInit(): void {
  this.getPokemonList();
}

getPokemonList(): void {
  this.service.getListPokemon().subscribe({
    next: pokemonList => {
      this.pokemonList = pokemonList
      this.loading = false
    }

  }

  );
}
}
