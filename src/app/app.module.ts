// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule
 } from '@angular/material';
// import { CdkTableModule } from '@angular/cdk/table';
// import { FlexLayoutModule } from '@angular/flex-layout';

// App
import { AppComponent } from './app.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';

const appRoutes: Routes = [
  { path: 'my-resume',     component: MyResumeComponent },
  { path: '',              component: BlogComponent },
  { path: '**',            component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyResumeComponent,
    PageNotFoundComponent,
    BlogComponent
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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
