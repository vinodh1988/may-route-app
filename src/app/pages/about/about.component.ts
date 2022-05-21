import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KeypeopleService } from 'src/app/services/keypeople.service';
import { PeopleFormComponent } from './people-form/people-form.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
people:any=[];
  constructor(private ps:KeypeopleService,private dialog:MatDialog) { }

  ngOnInit(): void {
      this.ps.getPeople().subscribe({
        next: (data:any)=>this.people=data,
        error: ()=> this.people= []
      })
  }

    
  loadDialog(){
    
    const dialogRef = this.dialog.open(PeopleFormComponent, {
      width: '900px',
      height: '650px'
    });

    dialogRef.afterClosed().subscribe(()=>this.ngOnInit());

}

}
