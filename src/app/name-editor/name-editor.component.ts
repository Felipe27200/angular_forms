import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  /**
   * Se usa el constructor de FormControl para
   * inicializar sus valores.
   * 
   * Creando este control se obtiene de inmediato
   * la capacidad de escuchar para actualizar y 
   * validar el estado del input del form.
   */
  name = new FormControl('');

  constructor() { }

  ngOnInit(): void 
  {

  }

  updateName() 
  {
    /**
     * Actualiza el valor de la instancia form control
     * y valida la estructura de ese valor para éste.
     */
    this.name.setValue('Nancy');
  }
}
