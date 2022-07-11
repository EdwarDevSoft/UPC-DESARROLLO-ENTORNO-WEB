import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(
    private readonly ps: ProjectService,
    private readonly as: ApartmentService, 
    private ar: ActivatedRoute

  ) { }

  project: any = [];
  apartments: any = [];

  __ObtenerProyecto(idproyecto: number){
    this.ps.__getProjects().subscribe((rest: any) => {
      this.project = rest.data.filter((item: { id: number }) => item.id == idproyecto);
      console.log(this.project);
    })
  }

  __ObtenerDepartamentosPorProyecto(idproyecto: number){
    this.as.__getApartments().subscribe((rest: any)=>{
      this.apartments = rest.data.filter((item: { projectId: number}) => item.projectId == idproyecto);
      console.log(this.apartments);
    })
  }

  ngOnInit(): void {
    this.ar.params.subscribe((p: Params) => {
      if(p["id"]){
        this.__ObtenerProyecto(p["id"]);
        this.__ObtenerDepartamentosPorProyecto(p["id"]);
      }
    })
  }

}
