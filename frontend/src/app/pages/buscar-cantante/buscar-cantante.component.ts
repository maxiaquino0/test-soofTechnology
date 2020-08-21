import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { CantanteModel } from '../../models/cantante.model';

@Component({
  selector: 'app-buscar-cantante',
  templateUrl: './buscar-cantante.component.html',
  styleUrls: ['./buscar-cantante.component.css']
})
export class BuscarCantanteComponent implements OnInit {

  genero = '';
  cantantes: CantanteModel[] = [];

  constructor(
    private service: ServiceService
  ) { }

  ngOnInit(): void {
  }

  buscarCantantes() {
this.service.getCantanteByKindOfMusic(this.genero).subscribe(
  (resp: CantanteModel[]) => {
    this.cantantes = resp;
  }
)
  }

}
