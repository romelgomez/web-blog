import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, ValidationErrors, AbstractControl} from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  public todoForm: FormGroup;

  private returnUrl: string;

  user: Observable<firebase.User>;

  subscription: ISubscription;

  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.todoForm =   new FormGroup ({
      todo: new FormControl('', [ Validators.required ]),
    });

    this.subscription = this.user
      .subscribe( user => this.islogged(user));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  todo () {
    return this.todoForm.get('todo');
  }

  todoErrorMessage () {
    return this.todo().hasError('required') ? 'Escribe alguna tarea que tenga pendiente.' : '';
  }

  onSubmit() {

    console.log(this.todo().value);

    // this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword( this.email().value, this.original().value)
    //   .then((result) => this.successLogin(result))
    //   .catch((error) => this.failedLogin(error));

  }

  islogged (user) {
    if ( user == null) {
      this.router.navigateByUrl('/');
    }
  }

}
