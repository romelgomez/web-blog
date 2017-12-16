import { Component } from '@angular/core';
import { Http } from '@angular/http';
// import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [ MatIconRegistry ]
})
export class AppComponent {

  constructor(http: HttpClient, iconReg: MatIconRegistry, sanitizer: DomSanitizer) {
    iconReg
    .addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/github.svg'))
    .addSvgIcon('google', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/google.svg'))
    .addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/facebook.svg'))
    .addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/twitter.svg'));
  }

}
