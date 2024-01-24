import { Component, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

interface PokemonCard {
  id: number,
  name: string,
  color: string,
  imgSrc: string,
  weight: number,
  height: number
  types: Types[]
}

interface Types {
  type: string
}

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  constructor(private service: PokemonService){

  }

  @Input()
  id: number = 0
  @Input()
  name: string = ""
  @Input()
  color: string = ""
  @Input()
  imgSrc: string = ""
  @Input()
  weight: number = 0
  @Input()
  height: number = 0
  @Input()
  types: {
    slot:number,
    type: {
      name: string,
      url: string
    }
  }[] = []

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

  getBoxShadow(typeName: string): string {
    const borderColor = this.getTypeBorderColor(typeName);

    // Use a cor dinâmica no box-shadow
    return `0px 0px 12px ${borderColor}, 0px 0px 15px ${borderColor} inset`;
  }
}
