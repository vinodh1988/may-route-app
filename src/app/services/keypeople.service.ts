import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeypeopleService {

  constructor(private http:HttpClient) { }

  getPeople():Observable<any> {
    return this.http.get("http://localhost:8000/keypeople/people")
  }

  addKeyPeople(data:FormData):Observable<any>{
    return this.http.post("http://localhost:8000/keypeople/people",data);
  }
}
