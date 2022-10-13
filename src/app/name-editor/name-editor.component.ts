import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  name = new FormControl('');

  constructor() { }

  ngOnInit(): void 
  {

  }

  updateName() 
  {
    /**
     * Actualiza el valor del form control
     * y valida la estructura de ese valor para éste.
     */
    this.name.setValue('Nancy');
  }
}
