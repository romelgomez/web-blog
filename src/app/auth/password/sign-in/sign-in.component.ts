import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl} from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) {}

  signInForm: FormGroup;

  ngOnInit() {
    this.signInForm =   new FormGroup ({
      email: new FormControl('', [ Validators.required, Validators.email ]),
      password : new FormGroup({
        original: new FormControl('', [ Validators.minLength(6), Validators.required ]),
        copy:     new FormControl('', [ Validators.required ])
      }, [this.areEqual])
    });
  }

  email () {
    return this.signInForm.get('email');
  }

  emailErrorMessage () {
    return this.email().hasError('required') ? 'El correo electrónico es obligatorio.' :
      this.email().hasError('email') ? 'El correo electrónico no es válida.' : '';
  }

  password () {
    return this.signInForm.get('password');
  }

  passwordErrorMessage () {
    /*
    console.log("areEqual: %s, password().invalid: %s",
     this.password().hasError('areEqual'),
     this.password().invalid);
    */
    return  this.password().hasError('areEqual') ? 'Las contraseñas deben coincidir.' : '';
  }

  original () {
    return this.password().get('original');
  }

  originalErrorMessage () {
    return this.original().hasError('required') ? 'La contraseña es obligatoria.' :
      this.original().hasError('minlength') ? 'Almenos 6 caracteres.' : '';
  }

  copy () {
    return this.password().get('copy');
  }

  copyErrorMessage () {
    return this.copy().hasError('required') ? 'Confirmar la contraseña es obligatorio.' : '';
  }


  onSubmit() {
    alert('Email: ' + this.email().value + ', Password: ' + this.original().value);
  }

  // https://stackoverflow.com/a/45837475
  areEqual(abstractControl: AbstractControl): ValidationErrors | null {
    const values = [];

    // abstractControl.value e.g: {original: "", copy: ""}
    // console.log('abstractControl.value:', abstractControl.value);
    _.forIn(abstractControl.value, function(value, key) {
      // console.log('value', value);
      values.push(value);
    });

    if ( values.length > 0 ) {
      // source:  https://stackoverflow.com/a/21266395/2513972
      if ( !values.reduce(function(a, b) { return (a === b) ? a : NaN; })){
        return { areEqual: true };
      }
    }
  }

  // https://stackoverflow.com/a/45837475
  areEqual2(c: AbstractControl): ValidationErrors | null {
    const keys: string[] = Object.keys(c.value);
    for (const i in keys) {
      if (i !== '0' && c.value[ keys[ +i - 1 ] ] !== c.value[ keys[ i ] ]) {
        return { areEqual: true };
      }
    }
  }

  // onSubmit() {
  //   // console.log('aForm.value: ' + this.aForm.get('email').value );
  //   // console.log('aForm.value: ' + this.aForm.get('passwords.password').value );

  //   this.afAuth.auth.signInWithEmailAndPassword( this.aForm.get('email').value, this.aForm.get('password.original').value )
  //     .catch(error =>  {
  //       alert(error.message);
  //     })  ;

  // }


  // log () {
  //   console.log('Routes: ', JSON.stringify(this.aForm, undefined, 2));
  // }


}
