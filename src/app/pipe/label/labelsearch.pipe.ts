import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelsearch'
})
export class LabelsearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args)return value;
    console.log(value,"value")
    return value.filter(array=>
      array.label.toLowerCase().indexOf(args.toLowerCase()) !==-1,
    )
  }

}
