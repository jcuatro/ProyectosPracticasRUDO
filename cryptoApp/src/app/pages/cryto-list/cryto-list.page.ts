import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-cryto-list',
  templateUrl: './cryto-list.page.html',
  styleUrls: ['./cryto-list.page.scss'],
})
export class CrytoListPage implements OnInit {

  crytoCoins: any = [];

  constructor(private service: CryptoService,
              ) { }

  ngOnInit() {
    this.cryptoList();
  }


  cryptoList(){
    this.service.getCrypto().subscribe(
      res => {
        
      }
    );
    console.log(this.crytoCoins);
    
  }
}
