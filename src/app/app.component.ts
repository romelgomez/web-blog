import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatSidenav } from '@angular/material';

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

  @ViewChild('sidenav') sidenav: MatSidenav;

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
    .addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('https://res.cloudinary.com/peruve/image/upload/q_auto:low/v1516927508/github_kodzfn.svg'))
    .addSvgIcon('google', sanitizer.bypassSecurityTrustResourceUrl('https://res.cloudinary.com/peruve/image/upload/q_auto:low/v1516927507/google_a42v3v.svg'))
    .addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('https://res.cloudinary.com/peruve/image/upload/q_auto:low/v1516927508/facebook_gsq5lo.svg'))
    .addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('https://res.cloudinary.com/peruve/image/upload/q_auto:low/v1516927507/twitter_delccf.svg'))
    .addSvgIcon('uk', sanitizer.bypassSecurityTrustResourceUrl('https://res.cloudinary.com/peruve/image/upload/q_auto:low/v1516927490/united-kingdom_shqonm.svg'))
    .addSvgIcon('venezuela', sanitizer.bypassSecurityTrustResourceUrl('https://res.cloudinary.com/peruve/image/upload/q_auto:low/v1516927490/venezuela_gndfbj.svg'));

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


  closeSidenav() {
    this.sidenav.close();
  }

}
