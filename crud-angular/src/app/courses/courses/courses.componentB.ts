import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],

})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { _id: 1, name: 'Angular 8',  category: 'Front-End' },
    { _id: 2, name: 'Angular 10', category: 'Front-End' },
    { _id: 3, name: 'Angular 12', category: 'Front-End' },
    { _id: 4, name: 'Angular 14', category: 'Front-End' },
    { _id: 5, name: 'Angular 16', category: 'Front-End' },
    { _id: 6, name: 'React 10', category: 'Front-End' },
    { _id: 7, name: 'React 12', category: 'Front-End' },
    { _id: 8, name: 'React 14', category: 'Front-End' },
    { _id: 9, name: 'React 16', category: 'Front-End' },
    { _id: 10, name: 'React 18', category: 'Front-End' },
  ];
  // displayedColumns = ['name', 'category'];
  displayedColumns = ['id', 'name', 'category'];
  // dataSource = this.courses;

  constructor() {
    // this.courses = []
  }

  ngOnInit(): void{

  }

}
