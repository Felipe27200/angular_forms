import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-nested',
  templateUrl: './form-nested.component.html',
  styleUrls: ['./form-nested.component.css']
})

export class FormNestedComponent implements OnInit
{
  /**
   * +-------------------+
   * | NESTED FORMGROUPS |
   * +-------------------+
   * 
   * FormGroups puede aceptar FormControl
   * individuales y también otros FormGroup
   * para hacer formularios más complejos.
   */
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

  constructor() { }

  ngOnInit(): void { }

  onSubmit()
  {
    console.warn(this.profileForm.value);
  }

  updateProfilePatchValue()
  {
    /**
     * +-------------------------------------+
     * | UPDATE SOME PARTS OF THE FORM GROUP |
     * +-------------------------------------+
     * 
     * Con el método patchValue(), se pueden actualizar 
     * algunas o todas las partes del formulario.
     * 
     * Respeta la estructura, pero no requiere que
     * todos los datos de la estructura sean enviados.
     * 
     * Si algún dato falla el error puede no ser reportado
     * adecuadamente y seguir con la ejecución.
     */
    this.profileForm.patchValue(
      {
        firstName: 'Nancy',

        /**
         * Se debe indicar una estructura similar
         * a la definida en el FormGroup.
         * 
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

  updateProfileSetValue()
  {
    /**
     * setValue() -> sigue estrictamente la 
     * estructura del FormGroup, por lo que es 
     * necesario definer todas las propiedades
     * definidas en ese FormGroup.
     * 
     * Este enfoque ofrece una mayor seguridad
     * a la hora de manejar errores.
     */
    this.profileForm.setValue(
      {
        firstName: "Felipe",
        lastName: "Zea",
  
        // Anidar un FormGroup
        address: {
          street: "Avenida calle 80",
          city: "BOGOTÁ",
          state: "BOGOTÁ D.C",
          zip: "52-60", 
        }
      }
    );
  }
}
