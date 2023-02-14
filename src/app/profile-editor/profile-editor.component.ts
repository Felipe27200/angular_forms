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
   * +------------+
   * | FROM GROUP |
   * +------------+
   *  
   * Se instancia FormGroup y se inicializa con un
   * objeto de clave - valor, para hacer referencia
   * a los campos del form, el valor es una instancia
   * FormControl.
   * 
   * Una instacia de FormGroup provee su modelo 
   * de valores como un objeto, en el que sus valores
   * son los formControl individuales.
   * 
   * FormGroup posee los mismos métodos y propiedades
   * que FormControl.
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
     * 
     * Se puede acceder a los valores del formGroup
     * con su propiedad value.
     */
    console.dir(this.profileForm.value);
  }
}
