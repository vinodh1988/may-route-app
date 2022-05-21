import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
excelForm:any;
jsondata:any="Nothing yet";
  constructor(private fb:FormBuilder,private es:ExcelService) { 
     this.excelForm = this.fb.group({
         excel:['',[Validators.required]],
         columns:['{}',[Validators.required]]
     })
  }

  uploadFile(event:any) {

  
  
    const file = (event.target as HTMLInputElement).files[0];
    this.excelForm.patchValue({
      excel: file
    });
    this.excelForm.get('excel').updateValueAndValidity()
  }

  uploadExcel(){
    var formData: any = new FormData();
    formData.append("excel",this.excelForm.get('excel').value);
    formData.append("columns",this.excelForm.get('columns').value);
    this.es.uploadExcel(formData).subscribe({
        next: (data:any)=> this.jsondata=data,
        error: ()=> alert("unable to upload")
    })
    
  }

  ngOnInit(): void {
  }

}
