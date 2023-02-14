import { Component, OnInit } from '@angular/core';

/**
 * Esta dependencia provee métodos para
 * optimizar el proceso de creación y manejo
 * de controls para los formularios.
 */
import { FormBuilder } from '@angular/forms';

/**
 * Validar Forms
 */
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form-builder',
  templateUrl: './profile-form-builder.component.html',
  styleUrls: ['./profile-form-builder.component.css']
})

export class ProfileFormBuilderComponent implements OnInit 
{
  /**
   * +-------------------------------------+
   * | BUILDING FORMGROUP WITH FORMBUILDER |
   * +-------------------------------------+
   *
   * El método group() permite generar FormGroup
   * y estos también pueden ser anidados.
   * 
   * El valor de cada nombre de control es un array
   * que contiene su valor inicial, basado en el primer
   * elemento del array.
   * 
   * Si los controles necesitan validación "sync" o "async"
   * puede añadir estos valores como segundo y tercer elemento
   * del array, respectivamente.
   */
   profileForm = this.fb.group(
    {
      /**
       * El segundo elemento establece que el
       * campo vinculado al control firstName
       * debe ser requerido.
       * 
       * Esto hará que el valor del Form Control
       * sea inválido hasta que se llene.
       */
      firstName: ['', Validators.required],
      lastName: [''],
      
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
    }
  );


  // Inyectar el servicio para poder usarlo
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void 
  {
  
  }

  onSubmit()
  {
    console.warn(this.profileForm.value);
  }

  updateProfile()
  {
    /**
     * Con el método patchValue(), se actualizan
     * algunas partes del formulario.
     * 
     * Respeta la estructura, pero no requiere que
     * todos los datos de la estructura sean enviados.
     */
    this.profileForm.patchValue(
      {
        firstName: 'Nancy',

        /**
         * Es necesario definer la propiedad street 
         * dentro del objeto address, ya que así es la
         * estructura del formulario
         */
        address: {
          street: '123 Drew Street',
        }
      }
    );
  }
}
