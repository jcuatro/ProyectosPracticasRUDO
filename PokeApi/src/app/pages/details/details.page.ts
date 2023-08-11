import { PokemonService, Colors } from './../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  pokeInfo: any = [];
  pokeSpecie: any = [];
  imgDetails:any;
  weight: number = 0;
  height: number = 0;
  stat: any = [];
  offset = 0;
  post: any;
  color: any;
  statColor: any = ["#2AE42F","#E02525","#4F58F1","#F6A4A4","#904AE4","#E4E24A"];

  constructor(private route: ActivatedRoute, 
              private pokemonService: PokemonService, 
              private router: Router
              ){
              this.route.queryParams.subscribe( param => {
                  const navParams = this.router.getCurrentNavigation()?.extras.state;
                })
              }

  ngOnInit() {
    this.pokeDetails();
    this.pokeSpecies();
  }

  pokeDetails(){
    let index: any = this.route.snapshot.paramMap.get('id');
    console.log(index);
    this.pokemonService.getPokemonDetail(index).subscribe(
      details => {
      console.log(details);
      this.pokeInfo = details;
      for (let index = 0; index < this.pokeInfo.stats.length; index++) {
        const element = this.pokeInfo.stats[index];
        element.width = element.base_stat*90/200;
        element.color = this.statColor[index];
      };
      this.weight = this.pokeInfo.weight/10;
      this.height = this.pokeInfo.height/10;
      this.pokeInfo.types.forEach((element:any) => {
        console.log(element);
        element.type.color = new Types(element.type.name);
      });
      console.log("Esto: ",this.pokeInfo);
    })
  }

  pokeSpecies(){
    let index: any = this.route.snapshot.paramMap.get('id');
    this.pokemonService.getSpecies(index).subscribe(
      (species: any) => {
        console.log(species);
        this.pokeSpecie = species;
      }
    )
  }

  pokeImg(){
    this.pokemonService.getPokemonColor(this.offset)
  }

  pokeList(){
    this.router.navigateByUrl(`index`);
  }

}


export class Types {

  types:any = {
    dark :"#828282",
    water : "#35A0F1",
    steel : "#808080",
    psychic : "#FFC0CB",
    poison : "#800080",
    fire : "#FF0000",
    ice : "#8EF0E6",
    electric : "#FFFF00",
    ground : "#F0CB4A",
    grass : "#008000",
    normal : "#e5c598",
    fightinng : "#bf4f12",
    rock : "#9C7613",
    bug : "#b7ea0d",
    ghost : "#666664",
    dragon : "#5542c4",
    fairy : "#df40cd",
    flying : "#c8cecf"
  }
  
  colorHex:string = "";

  constructor(color:string){
    this.colorHex = this.types[color];
  }

}