import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.scss']
})
export class MyResumeComponent implements OnInit {

  param = { value: 'world 2', name: 'Romel', lastName: 'Gomez' };

  constructor() {}

  ngOnInit() {
  }

}
