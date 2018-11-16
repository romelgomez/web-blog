import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.scss']
})
export class MyResumeComponent implements OnInit {

  param = { value: 'world 2', name: 'Romel', lastName: 'Gomez' };

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  stack = [
    'JavaScript (ES5, ES2016 +)',
    'NodeJS + npm',
    'Angular 5.x, 1.5',
    'Bash',
    'XML / HTML5',
    'RxJS',
    'Material',
    'Algolia',
    'Cloudinary',
    'Node',
    'Express',
    'Firebase',
    'DigitalOcean',
    'Gulp',
    'Ionic',
    'TypeScript',
    'Bootstrap',
    'jQuery',
    'CakePHP 2.x',
    'Node',
    'Openshift',
    'GoLang',
    'PHP',
    'JAVA',
    'MySql',
    'Google App Engine for Java',
    'Node',
    'Spring MVC 3.X',
    '2checkout',
    'WordPress',
    'Laravel'
  ];

  constructor() {}

  ngOnInit() {
  }

}
