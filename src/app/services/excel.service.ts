import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor(private http:HttpClient) { }

  uploadExcel(data:FormData):Observable<any> {
    return this.http.post("http://localhost:8000/services/excel",data);
  }
}
