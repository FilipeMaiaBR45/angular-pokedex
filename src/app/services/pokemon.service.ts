import { PokemonData } from './../models/pokemonData';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, mergeMap, toArray } from 'rxjs';
import { BaseResponse } from '../models/baseResponse';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
  private listPokemon: PokemonData[] = []
  constructor(
    private http: HttpClient
  ) {

   }

  //  getListPokemon(){
  //   this.http.get<BaseResponse>(this.baseURL).subscribe({
  //     next: (res: BaseResponse) => {
  //       res.results.forEach(element => {
  //           //console.log(element.url)
  //           console.log(this.http.get<PokemonData>(element.url).subscribe({
  //             next: res => this.listPokemon.push(res)
  //           }))
  //       });
  //     }
  //   })

  //   console.log(this.listPokemon.length)


  //  }

  getListPokemon(): Observable<PokemonData[]> {
    return this.http.get<BaseResponse>(this.baseURL).pipe(
      mergeMap((res: BaseResponse) =>
        forkJoin(res.results.map(element =>
          this.http.get<PokemonData>(element.url)
        ))
      )
    );
  }

  getTypeBorderColor(type: string): string {
    // Mapeie os tipos para as cores hexadecimais desejadas
    switch (type) {
      case 'normal':
        return '#A8A77A';
      case 'fighting':
        return '#C22E28';
      case 'flying':
        return '#A98FF3';
      case 'poison':
        return '#A33EA1';
      case 'ground':
        return '#E2BF65';
      case 'rock':
        return '#B6A136';
      case 'bug':
        return '#A6B91A';
      case 'ghost':
        return '#735797';
      case 'stell':
        return '#B7B7CE';
      case 'fire':
        return '#EE8130';
      case 'water':
        return '#6390F0';
      case 'grass':
        return '#7AC74C';
      case 'electric':
        return '#F7D02C';
      case 'psychic':
        return '#F95587';
      case 'ice':
        return '#96D9D6';
      case 'dragon':
        return '#6F35FC';
      case 'dark':
        return '#705746';
      case 'fairy':
        return '#D685AD';
      case 'shadow':
        return '#757575';
      case 'unknown':
        return '#FFFFFF';
      default:
        return '#FFFFFF'; // Cor padrão
    }
  }


}

