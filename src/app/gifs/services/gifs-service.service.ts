import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gifs, GifsInterface } from '../interfaces/gifs-interface';


@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  url : string= "";
  gifsDatos: Gifs[]=[];

  private _historial: String[]=
  [
    "gatitos",
    "perritos",
    "patitos",
    "cositas" ]

    get historial():String[]{
      return [...this._historial];

    }
    buscarGifs(query:String){
      if(this._historial.includes(query)==false){
        if(this._historial.length==10){
          this._historial.splice(-1,1);
          this._historial.unshift(query);
        }
        else{
          this._historial.unshift(query);
        }
      }
      this.url= "https://api.giphy.com/v1/gifs/search?api_key=l3qomNRf42ItBXHaVjUFLAD6I4vYHj1S&q="+query+"&limit=20";
      this.getGifs();      
    }

    getGifs() {
      this.http.get<GifsInterface>(this.url)
      .subscribe((resp)=>{
        this.gifsDatos= resp.data;
      }
    );
    }

  constructor(private http: HttpClient) { }
}
