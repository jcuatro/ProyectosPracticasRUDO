import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  baseUrl:string = environment.url.cryptoUrl;

  constructor(private http: HttpClient) { 
  }

  getCrypto(){
    return this.http.get(`${this.baseUrl}assets`);
  }
}
