import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  paginas = [
    {titulo: 'Leer', path: 'paginas/leer'},
    {titulo: 'Crear', path: 'paginas/crear'}
  ]
}
