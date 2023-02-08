import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tutp01'
})
export class Tutp01Pipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    let y = args[0]; 
    // let [y]=args; // this is just another cement
    if (isNaN(y)){y=1}

    return value*y;
  }

}
