import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { TodoContentComponent } from './pages/todos-page/components/todo-content/todo-content.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

const mat = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule
];

@NgModule({
  declarations: [
    AppComponent,
    TodosPageComponent,
    TodoContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    ...mat
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    ...mat
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
