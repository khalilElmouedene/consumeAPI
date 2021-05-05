import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import {  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ConsumeAPIService {

  // Bash ikhdem lik project dir npm i
  protected baseUrl: string;
  // Hada service henna kandiro les méthodes dyawlna likan3yto lihom f component
  // HttpClient makandirohsh f component kandiroh f service



  // Fash katkon 3ndk lien dyal api kandiroh f environment bash kan9ado lkhdma dyalna kabdiroh f environment prod
  // et environment 3adi lwl howa likib9a m3ak f prod dyal apps tani f dev dyal apps dyalk

  constructor(private _httpClient: HttpClient) {
    // henna katshed dak variable lidiclaritih kat7et fih lien dyalk
    this.baseUrl = `${environment.apiBaseUrl}`;
  }


  // hadi méthode bash dir get men api

  getAll(): Observable<any> {
    return this._httpClient.get(this.baseUrl).pipe(

      //had map hya function men rxjs katkhlik dir transforme l data dyalk daba bhal haka madrt liha walo ila drt appel lhad
      // méthode atrj3 lya liste dyal dakshi libaghiii odak Observale bash tkon data dyal async
      map(res => res)
    )
  }

  // NB: bash ikhdem lik project darori khas dir injection l httpClientModule f app.module

}
