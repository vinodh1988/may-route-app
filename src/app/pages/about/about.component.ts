import { Component, OnInit } from '@angular/core';
import { KeypeopleService } from 'src/app/services/keypeople.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
people:any=[];
  constructor(private ps:KeypeopleService) { }

  ngOnInit(): void {
      this.ps.getPeople().subscribe({
        next: (data:any)=>this.people=data,
        error: ()=> this.people= []
      })
  }

}
