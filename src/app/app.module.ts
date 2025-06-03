import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './components/test/test.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { CommonModule } from '@angular/common';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
