import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeerService } from 'src/app/leer.service';
import { TareasFirebaseService } from 'src/app/services/tareas-firebase.service';
import { Tarea } from '../domain/tarea';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-view-tarea',
  templateUrl: './view-tarea.component.html',
  styleUrls: ['./view-tarea.component.css']
})
export class ViewTareaComponent {
  tarea: Tarea = new Tarea

  constructor(private router: Router, private fb: FormBuilder, private leerService: LeerService,
              private tareasFirebaseService: TareasFirebaseService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params)
      if(params['nombre']){
        this.loadReceta(params['nombre'])
      }
    });
  }

  loadReceta(uid:string){
    this.tareasFirebaseService.getReceta(uid).subscribe(data => {
      console.log(data);
      this.tarea = <any> data
    })
  }

}
