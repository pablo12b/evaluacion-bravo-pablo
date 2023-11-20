import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeerService } from 'src/app/leer.service';
import { TareasFirebaseService } from 'src/app/services/tareas-firebase.service';
import { Tarea } from '../domain/tarea';



@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private leerService: LeerService, private tareasFirebaseService: TareasFirebaseService) {
    this.formulario = this.fb.group({
      nota: ['', Validators.required],
      fecha: ['', Validators.required],
      etiqueta: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      const tarea = this.formulario.value as Tarea;
      this.leerService.agregarTarea(tarea);
      this.tareasFirebaseService.save(tarea);
      this.formulario.reset();
      }
    }
}
