import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = environment.url.pokeUrl
  imageUrl: string = environment.url.imageUrl;

  constructor(private http: HttpClient) {
  }

  getPokemon(offset = 0){
    return this.http.get(`${this.baseUrl}pokemon?limit=15&offset=${offset}`).pipe(
      map((result: any) => {
        return result['results'];
      }),
      map(pokemons => {
        return pokemons.map((poke: any, index: any) => {
          poke.image = this.getPokemonImage(index + offset +1);
          poke.pokeIndex = offset + index +1;
          this.getType(offset + index +1).then((res:any) => {
            poke.data = res.types;
          });  
          this.getPokemonColor(offset + index +1).then((res:any)=> {
            poke.color = new Colors(res.color.name)
          });
          return poke;
        })
      })
    )
  }

  getPokemonImage(index: number){
    return `${this.imageUrl}${index}.png`;
  }

  getPokemonDetail(id: any){
    return this.http.get(`${this.baseUrl}pokemon/${id}`)
  }

  getPokemonColor(id: number):any{
    return new Promise((resolve,reject)=>{
      this.http.get<any>(`${this.baseUrl}pokemon-species/${id}`).subscribe(res=>{
        resolve(res)
      });
    }) 
  }

  getType(id: number):any{
    return new Promise((resolve,reject)=>{
      this.http.get<any>(`${this.baseUrl}pokemon/${id}`).subscribe(res=>{
        resolve(res)
      });
    }) 
  }

  getSpecies(id: number):any{
    return this.http.get<any>(`${this.baseUrl}pokemon-species/${id}`)
  }
}

export class Colors {

  colorList:any = {
    black :"#000000",
    blue : "#0000FF",
    gray : "#808080",
    pink : "#FFC0CB",
    purple : "#800080",
    red : "#FF0000",
    white : "#0000FF",
    yellow : "#FFFF00",
    brown : "#A52A2A",
    green : "#008000"
  }
  
  colorHex:string = "";

  constructor(color:string){
    this.colorHex = this.colorList[color];
  }

}