import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IMLBase } from '../interfaces/interface';



@Injectable({
  providedIn: 'root'
})
export class MLserviceService {

  AuthToken:any;
  sellerItemsPDF: any[];
  sellerNick:string;
  
  constructor(private http: HttpClient ) { }

buscarPorSeller(){

  const url = `https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326`;
  const headers = new HttpHeaders({
    'Authorization':'Bearer ${this.AuthToken}'});
    return this.http.get(url,{headers});

}

buscarPorSellerId(query:string){

  const url = `https://api.mercadolibre.com/sites/MLA/search?seller_id=${query}`;
  const headers = new HttpHeaders({
    'Authorization':'Bearer ${this.AuthToken}'});
    console.log(url);
    return this.http.get(url,{headers});

}

refreshToken(){

  const url = `https://api.mercadolibre.com/oauth/token`;
  const body = {
     grant_type: 'refresh_token',
     client_id:'8246960858213510',
     client_secret:'qvbaS2WelbdFCnLffNwkCbh7lZEeAZys',
     refresh_token:'TG-601c235dd376390007b92d28-28610621'
 };
  const headers = new HttpHeaders({
    'accept':' application/json',
    'content-type': 'application/x-www-form-urlencoded',
    });
   
    return this.http.post(url,body,{headers}).subscribe({
        next: data => {
            this.AuthToken = data['access_token'];
            console.log(this.AuthToken);
        },
        error: error => {
            console.error('There was an error!', error);
        }
    });


}





}
