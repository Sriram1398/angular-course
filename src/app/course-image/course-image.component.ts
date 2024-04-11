import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'course-image',
  templateUrl: './course-image.component.html',
  styleUrl: './course-image.component.css'
})
export class CourseImageComponent implements OnChanges{

  @Input('src')
  courseImage:string;

  constructor(){
  }

  ngOnChanges(changes: SimpleChanges): void {
    for(let prop in changes){
      let propChange = changes[prop];
      //console.log(`Course Image value changed from ${propChange.previousValue} to ${propChange.currentValue}`)
    }
  }
}
