import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NameEditorComponent } from './name-editor/name-editor.component';

const routes: Routes = [
  {path: "basic-form", component: NameEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
