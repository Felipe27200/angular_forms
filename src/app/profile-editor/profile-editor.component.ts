import { Component, OnInit } from '@angular/core';

/**
 * Importar para poder usar los controladores para form groups
 */
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  /**
   * Una instacia de FormGroup provee su modelo 
   * de valores como un objeto, en el que sus valores
   * son los formControl individuales.
   */
  profileForm = new FormGroup(
    {
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    }
  );

  constructor() { }

  ngOnInit(): void
  {

  }

  onSubmit()
  {
    /**
     * console.warn se usa para registrar un mensaje
     * en la consola del navegador.
     */
    console.warn(this.profileForm.value);
  }
}
