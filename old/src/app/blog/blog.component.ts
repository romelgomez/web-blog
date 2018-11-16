import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  cols = 2;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletPortrait
    ]).subscribe(result => {
      if ( result.matches ) {
        this.goMobile();
      } else {
        this.goDesktop();
      }
    });
  }

  goMobile () {
    // console.log('Go Mobile');
    this.cols = 1;
  }

  goDesktop () {
    // console.log('Go Desktop')
    this.cols = 2;
  }


}
