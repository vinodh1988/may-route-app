import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-quotes-tab',
  templateUrl: './quotes-tab.component.html',
  styleUrls: ['./quotes-tab.component.css']
})
export class QuotesTabComponent implements OnInit {
@Input() results:any;
  constructor() { }

  ngOnInit(): void {
  }

}
