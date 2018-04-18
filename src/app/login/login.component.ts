import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Dependencies to use the social logins in the component
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  user: Observable<firebase.User>;
  subscription: ISubscription;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.user = afAuth.authState;
  }


  ngOnInit() {
    this.subscription = this.user
    .subscribe( user => this.islogged(user));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  islogged (user) {
    if ( user !== null) {
      this.router.navigateByUrl('/account');
    }
  }

}
