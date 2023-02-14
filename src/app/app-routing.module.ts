import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormNestedComponent } from './form-nested/form-nested.component';

const routes: Routes = [
  {path: "basic-form", component: NameEditorComponent},
  {path: "form-group", component: ProfileEditorComponent},
  {path: "form-nested", component: FormNestedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
