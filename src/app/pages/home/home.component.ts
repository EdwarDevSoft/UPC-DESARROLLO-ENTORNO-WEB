import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly ps: ProjectService
  ) { }


  projects: any = [];

  __obtenerProyectos(){
    //Se invoca al metodo "__getProjects()" del servicio "project.service.ts", el metodo "__getProjects()" devuelve datos ya que es un metodo observable
    //Suscribe: sirve para mostrar los datos y el parámetro any significa que puede ser cualquier tipo de estructura.
    this.ps.__getProjects().subscribe((rest: any) =>{
      this.projects = rest.data;
      //console.log(this.projects);
    })
  }

  __obtenerProyectosBE(){
    this.ps.__getProjects_be().subscribe((rest: any) =>{
      console.log(rest);
    })    
  }

  ngOnInit(): void {
    this.__obtenerProyectos();
    this.__obtenerProyectosBE();
  }

}
