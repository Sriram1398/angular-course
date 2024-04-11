
import { CourseImageComponent } from '../course-image/course-image.component';
import { Course } from './../model/course';
import { AfterContentInit, Component, ContentChild, ContentChildren, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnChanges, OnInit, DoCheck, AfterContentInit {

  @Input({ required: true })
  course!: Course;

  @Input()
  indexNum?: number;

  oldValue!: Course;

  @Input()
  noImage:TemplateRef<any>;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  @ViewChild('card') cardref!: ElementRef;

  @ContentChild('image') courseImage: ElementRef;
  @ContentChildren(CourseImageComponent,{read:ElementRef}) courseImageComp: ElementRef;

  ngOnChanges(changes: SimpleChanges) {
    // for (const propName in changes) {
    //   const chng = changes[propName];
    //   const cur = JSON.stringify(chng.currentValue);
    //   const prev = JSON.stringify(chng.previousValue);
    //   //console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    // }
  }

  ngOnInit(): void {
    this.oldValue = this.course;
  }

  ngDoCheck(): void {
    if (this.oldValue.id != this.course.id) {
      //console.log(`value of the course changed from ${this.oldValue.id} to ${this.course.id}`)
    }
    else {
      //console.log('no value changed');
    }
  }

  ngAfterContentInit(): void {
    console.log(this.courseImageComp) //projected content template element can be accessed uisng this life cycle hooks
  }
  selectedCourse() {
    //console.log("Selected course is ", this.course.description);
    //this.cardref.nativeElement.style.backgroundColor = 'blue';
    this.courseEmitter.emit(this.course);
  }

  getRequiredClasses() {
    return {
      'index-style': this.indexNum,
      'bold': this.course.category == 'INTERMEDIATE'
    }
  }

  getStyles() {
    return {
      'background-color': this.course.category == 'INTERMEDIATE' ? 'yellow' : 'white'
    }
  }

  testMethodAccessFromParent() {
    alert('Method called from Parent using ref of child component')
    console.log('Method called from Parent using ref of child component')
  }
}
