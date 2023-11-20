import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LeerComponent } from './pages/leer/leer.component';
import { CrearComponent } from './pages/crear/crear.component';
import { ViewTareaComponent } from './pages/view-tarea/view-tarea.component';

const routes: Routes = [
  {path:"paginas/leer", component: LeerComponent},
  {path:"paginas/crear/:nombre", component: ViewTareaComponent},
  {path:"paginas/crear", component: CrearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

