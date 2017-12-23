// ANGULAR
import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';

// FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// APP
import { environment } from '../../environments/environment';
import { PasswordModule } from './password';
// import { AuthComponent } from './auth.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthStateComponent } from './auth-state/auth-state.component';
import { GoogleAuthComponent } from './google-auth/google-auth.component';
import { FacebookAuthComponent } from './facebook-auth/facebook-auth.component';
import { TwitterAuthComponent } from './twitter-auth/twitter-auth.component';

// MATERIAL
import { MatIconModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout'; // Responsive features

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    // imports firebase/auth, only needed for auth features
    AngularFireAuthModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    PasswordModule
  ],
  exports: [ GoogleAuthComponent, FacebookAuthComponent, TwitterAuthComponent, LogoutComponent, AuthStateComponent ],
  declarations: [
    // AuthComponent,
    GoogleAuthComponent,
    LogoutComponent,
    AuthStateComponent,
    FacebookAuthComponent,
    TwitterAuthComponent
  ]
})
export class AuthModule {}