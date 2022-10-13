import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-nested',
  templateUrl: './form-nested.component.html',
  styleUrls: ['./form-nested.component.css']
})

export class FormNestedComponent implements OnInit
{
  profileForm = new FormGroup(
    {
      firstName: new FormControl(''),
      lastName: new FormControl(''),

      // Anidar un FormGroup
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''), 
      })
    }
  );

  constructor()
  {

  }

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
