import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { HttpClient } from '@angular/common/http';

import { TranslateService} from '@ngx-translate/core';

import { AngularFireAuth } from 'angularfire2/auth';
// For interface only - Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [ MatIconRegistry ]
})
export class AppComponent {

  public user: Observable<firebase.User>;

  public currentLang: string;

  constructor(
    private http: HttpClient,
    private iconReg: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private translate: TranslateService,
    private afAuth: AngularFireAuth) {

    this.user = afAuth.authState;

    iconReg
    .addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/github.svg'))
    .addSvgIcon('google', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/google.svg'))
    .addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/facebook.svg'))
    .addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/twitter.svg'))
    .addSvgIcon('uk', sanitizer.bypassSecurityTrustResourceUrl('./assets/flags/united-kingdom.svg'))
    .addSvgIcon('venezuela', sanitizer.bypassSecurityTrustResourceUrl('./assets/flags/venezuela.svg'));

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

    this.currentLang = 'en';
  }

  setDefaultLang (lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }

}
