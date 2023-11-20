import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Tarea } from '../pages/domain/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasFirebaseService {

  private path = 'tareas'

  tareasRef: AngularFirestoreCollection<any>

  constructor(private db: AngularFirestore) { 
    this.tareasRef = db.collection(this.path)

    this.tareasRef.valueChanges().subscribe(data => {
      console.log(data)
    })
  }

  getAll(){
    return this.tareasRef.valueChanges()
  }

  save(tarea: Tarea){
    const uid = tarea.etiqueta
    console.log('Receta', tarea)
    return this.tareasRef.doc(uid).set(Object.assign({}, tarea))
  }

  getReceta(uid:string){
    console.log("uid", uid)
    return this.db.doc(this.path+'/'+uid).valueChanges()
  }
}