import { Injectable } from '@angular/core';
import { Tarea } from 'src/app/pages/domain/tarea';

@Injectable({
  providedIn: 'root'
})
export class LeerService {
  private tareas: Tarea[] = [];
  
  selectedImage: File | null = null;

  agregarTarea(tarea: Tarea) {
    const tareas = this.obtenerTareas();
      // Agregar una verificación para asegurarse de que event y event.target no sean nulos
          tareas.push(tarea);
          localStorage.setItem('tareas', JSON.stringify(tareas));
  }

  obtenerTareas() {
    const tareas = localStorage.getItem('tareas');
    return tareas ? JSON.parse(tareas) : [];
  }

  borrarTareas() {
    localStorage.removeItem('tareas');
  }

}
