import { COURSES } from './../db-data';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit{
 
  courses: Course[] = COURSES;
  coreDeepDive: Course = COURSES[0];
  rxJs: Course = COURSES[1];
  ngRx: Course = COURSES[2];
  indexValue:number=0;
  buttonObj={first:'one',middle:'mid',last:'final'};

  doChangeObj : Record<string,String> = {
    age:'10',
    address:'tvm'
  }

  @ViewChild('container') containerDiv!: ElementRef ;
  @ViewChild('course1') courseRef!: CourseCardComponent;
  @ViewChildren('cardCourses', { read: ElementRef }) coursesCardRef!: QueryList<ElementRef>;

  constructor(){
    //console.log(this.coursesCardRef)
  }
  ngAfterViewInit(): void {
    //console.log(this.coursesCardRef)
  }

  selectedCourse(event: any) {
    // console.log(this.coursesCardRef)
    // console.log(this.courseRef.course)
    //this.courseRef.testMethodAccessFromParent();
    // this.coursesCardRef.first.nativeElement.style.backgroundColor = 'red';
    
  }

  trackCourse(index: number, course: Course) {
    JSON.stringify({name:'rame'})
    return course.id;
  }

  changeCourse(){
    this.courses = [...COURSES];
  }

  changeIndex(){
    ++this.indexValue;
    this.courses.forEach(course =>{
        ++course.id
    })
  }
}
