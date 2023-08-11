import { Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  offset = 0;
  pokemonList: any = [];
  text: string = "";
  type: string = "";

  @ViewChild(IonInfiniteScroll) 
  scroll:any = IonInfiniteScroll;
  
  constructor(private service: PokemonService,
              private router: Router) { }

  ngOnInit() {
    this.listPokemon();
  }

  listPokemon(loadMore = false, event?: any){
    if(loadMore){
      this.offset += 15
    }
    this.service.getPokemon(this.offset).subscribe(
      res => {
        this.pokemonList = [...this.pokemonList, ...res];
        if (event) {
          event.target.complete();
        }
        console.log(this.pokemonList);
      }
    );
  }


  pokeDetails(id: any, post: any){
    this.router.navigateByUrl(`details/${id}`, { state: { post }});
  }

  filter(event: any){
    this.text = event.detail.value;
    console.log(this.text);
  }

  typeFilter(event: any){
    this.type = event.detail.value;
    console.log(this.type);
  }
}