import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * Para usar los reactive forms, se debe importar
 * esta dependencia y añadirla dentro del array import
 * de @NgModule
 */
import { ReactiveFormsModule } from '@angular/forms';

import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormNestedComponent } from './form-nested/form-nested.component';
import { ProfileFormBuilderComponent } from './profile-form-builder/profile-form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    FormNestedComponent,
    ProfileFormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
