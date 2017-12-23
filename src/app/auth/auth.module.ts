// ANGULAR
import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { CdkTableModule } from '@angular/cdk/table';

// FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// APP
import { environment } from '../../environments/environment';
// import { AuthComponent } from './auth.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthStateComponent } from './auth-state/auth-state.component';
import { GoogleAuthComponent } from './google-auth/google-auth.component';
import { FacebookAuthComponent } from './facebook-auth/facebook-auth.component';
import { TwitterAuthComponent } from './twitter-auth/twitter-auth.component';
// import { PasswordAuthComponent } from './password-auth/password-auth.component';
// import { PasswordAuthSignInComponent } from './password-auth-sign-in/password-auth-sign-in.component';


// MATERIAL
import { MatIconModule, MatButtonModule } from '@angular/material';
/* import { MatCardModule, MatTabsModule, MatListModule, MatInputModule } from '@angular/material'; */
import { FlexLayoutModule } from '@angular/flex-layout'; // Responsive features

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    // imports firebase/auth, only needed for auth features
    AngularFireAuthModule,
    MatButtonModule,
    // MatCardModule,
    // MatTabsModule,
    // MatListModule,
    MatIconModule,
    // MatInputModule,
    // MatAllModules,
    // MatAllModules,
    FlexLayoutModule,
    // ReactiveFormsModule,
    // FormsModule
  ],
  exports: [ GoogleAuthComponent, FacebookAuthComponent, TwitterAuthComponent, LogoutComponent, AuthStateComponent ],
  declarations: [
    // AuthComponent,
    GoogleAuthComponent,
    LogoutComponent,
    AuthStateComponent,
    FacebookAuthComponent,
    TwitterAuthComponent,
    // PasswordAuthComponent,
    // PasswordAuthSignInComponent
  ]
})
export class AuthModule {}
