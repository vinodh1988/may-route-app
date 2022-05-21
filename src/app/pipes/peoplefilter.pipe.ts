import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peoplefilter'
})
export class PeoplefilterPipe implements PipeTransform {

  transform(target: any, desig:any): any {
    
       if(desig==="All")
          return target;
       return target.filter((x:any)=> x.designation===desig)
  }

}
