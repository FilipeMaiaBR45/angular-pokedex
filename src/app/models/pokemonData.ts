export type PokemonData = {
  id: number,
  name: string,
  color: string,
  sprites: {
    other: {
      officialArtwork:{
        front_default: string,
      }
    },
    front_default: string
  },
  weight: number,
  height: number
  types: {
    slot:number,
    type: {
      name: string,
      url: string
    }
  }[]
}


