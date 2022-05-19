import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http:HttpClient) { }


  callApi():Observable<any>{
      return this.http.get("https://api.quotable.io/random");
  }

  callApiByTag(tag:String):Observable<any>{
    return this.http.get("https://api.quotable.io/random?tag="+tag);
}
}
