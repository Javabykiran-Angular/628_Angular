import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component';
import { StudentComponent } from './student/student.component';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { Eventbinding1Component } from './eventbinding1/eventbinding1.component';
import { Eventbinding2Component } from './eventbinding2/eventbinding2.component';
import { FormsModule } from '@angular/forms';
import { Eventbinding3Component } from './eventbinding3/eventbinding3.component';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { InbuiltpipeComponent } from './inbuiltpipe/inbuiltpipe.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { SummaryPipe } from './summary.pipe';
import { PostComponent } from './post/post.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    StringinterpolationComponent,
    PropertybindingComponent,
    StylebindingComponent,
    ClassbindingComponent,
    Eventbinding1Component,
    Eventbinding2Component,
    Eventbinding3Component,
    IfdirectiveComponent,
    FordirectiveComponent,
    SwitchdirectiveComponent,
    Parent1Component,
    Child1Component,
    Child2Component,
    InbuiltpipeComponent,
    CustompipeComponent,
    SummaryPipe,
    PostComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    FollowerComponent,
    MyfollowerComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
