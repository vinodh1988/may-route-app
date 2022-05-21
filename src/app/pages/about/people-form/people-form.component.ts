import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { KeypeopleService } from 'src/app/services/keypeople.service';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css']
})
export class PeopleFormComponent implements OnInit {
myForm:any
  constructor(private fb:FormBuilder,private kp:KeypeopleService, public dialogRef: MatDialogRef<PeopleFormComponent>) { 
    this.myForm=  this.fb.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      designation:['',[Validators.required,Validators.minLength(3)]],
      place:['',[Validators.required,Validators.minLength(2)]],
      photo: [null,[Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  uploadFile1(event:any) {

    console.log("GETTING CALLEd")
    console.log(event.target)
    //const target:HTMLInputElement =event.target
    const file = (event.target as HTMLInputElement).files[0];
    this.myForm.patchValue({
      photo: file
    });
    this.myForm.get('photo').updateValueAndValidity()
  }

 
  addPerson(){
    var formData: any = new FormData();
    formData.append("name",this.myForm.get('name').value);
    formData.append("designation",this.myForm.get('designation').value);
    formData.append("place",this.myForm.get('place').value);
    formData.append("photo",this.myForm.get('photo').value);

    this.kp.addKeyPeople(formData).subscribe({
       next: (data:any)=> this.dialogRef.close(),
       error: (error)=> {
         console.log(error);
         alert("not able to upload try again")
        }
    })
  }
    
}
