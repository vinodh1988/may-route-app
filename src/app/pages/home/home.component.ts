import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
quote:any="No Quote for the Day";
author: any="No Author";
  constructor(private quotes:QuoteService) { }
  

  ngOnInit(): void {
     this.quotes.callApi().subscribe(
         {
           next: (data:any)=>{
             this.quote = data.content;
             this.author = data.author;
           },
           error: ()=>{}
         }
     )
  }

}
