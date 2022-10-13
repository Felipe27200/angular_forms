import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-form-builder',
  templateUrl: './profile-form-builder.component.html',
  styleUrls: ['./profile-form-builder.component.css']
})

export class ProfileFormBuilderComponent implements OnInit 
{
  /**
   * El método group permite generar formGroups
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
      firstName: [''],
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
