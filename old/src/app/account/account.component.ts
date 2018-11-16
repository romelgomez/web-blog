import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {

  user: Observable<firebase.User>;
  // subscription: ISubscription;

  constructor(
    private afAuth: AngularFireAuth,
    // private router: Router,
  ) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    // console.log('this never happen');
    // this.subscription = this.user
    //   .subscribe( user => this.islogged(user));
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  // islogged (user) {
  //   if ( user == null) {
  //     this.router.navigateByUrl('/');
  //   }
  // }

}
