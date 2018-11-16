// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


// for todo list
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatDividerModule } from '@angular/material';



// Translate
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// FIREBASE
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthModule } from './auth';
// import { PasswordModule } from './auth/password';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatCardModule,
  MatExpansionModule,
  MatGridListModule,
  MatTabsModule
 } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';

// App
import { AppComponent } from './app.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';

// Services
import { AuthService } from './auth/guards/auth.service';
import { AuthGuardService as AuthGuard } from './auth/guards/auth-guard.service';
import { AccountComponent } from './account/account.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const appRoutes: Routes = [
  { path: 'my-resume',                    component: MyResumeComponent },
  { path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login',                        component: LoginComponent },
  { path: 'contact',                      component: ContactComponent },
  { path: 'terms-of-service',             component: TermsOfServiceComponent },
  { path: 'privacy-policy',               component: PrivacyPolicyComponent },
  { path: '',                             component: BlogComponent },
  { path: '**',                           component: PageNotFoundComponent }
];

@NgModule({
  providers : [
    AuthGuard,
    AuthService
  ],
  declarations: [
    AppComponent,
    MyResumeComponent,
    PageNotFoundComponent,
    BlogComponent,
    ContactComponent,
    LoginComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent,
    AccountComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    CdkTableModule,
    FlexLayoutModule,
    MatGridListModule,
    MatTabsModule,
    AuthModule,
    LayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
    }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
