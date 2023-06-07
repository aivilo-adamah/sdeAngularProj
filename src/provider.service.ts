import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProviderService {
logged=false
  constructor( private http:HttpClient) {

   }
   
getUser(){
  return this.http.get("http://ip-api.com/json");
}
}
