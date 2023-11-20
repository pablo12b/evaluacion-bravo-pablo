import { Component, OnInit } from '@angular/core';
import { LeerService } from 'src/app/leer.service';
import { Tarea } from '../domain/tarea';
import { DomSanitizer } from '@angular/platform-browser';
import { TareasFirebaseService } from 'src/app/services/tareas-firebase.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-leer',
  templateUrl: './leer.component.html',
  styleUrls: ['./leer.component.css']
})
export class LeerComponent implements OnInit {
  tareas: Tarea[] = [];
  imagenRecetaBase64!: string | null;
  terminoBusqueda: string = '';

  listaTareas: any

  constructor(private router: Router, private leerService: LeerService, private sanitizer: DomSanitizer, private tareasFirebaseService: TareasFirebaseService) {
    this.tareas = leerService.obtenerTareas()

    this.listaTareas = this.tareasFirebaseService.getAll()
  }

  ngOnInit() {
    this.tareas = this.leerService.obtenerTareas();
    this.imagenRecetaBase64 = localStorage.getItem('imagenReceta') || null;
  }

  borrarTodasLasTareas() {
    this.leerService.borrarTareas();
  }

  goEditar(receta: any){
    console.log("editando", receta)

    let params: NavigationExtras = {
      queryParams: {
        receta: receta
      }
    }
    this.router.navigate(['paginas/formulario'], params)
  }

}
