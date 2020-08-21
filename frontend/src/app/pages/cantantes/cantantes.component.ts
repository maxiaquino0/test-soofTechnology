import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { CantanteModel } from 'src/app/models/cantante.model';

@Component({
  selector: 'app-cantantes',
  templateUrl: './cantantes.component.html',
  styleUrls: ['./cantantes.component.css']
})
export class CantantesComponent implements OnInit {

  cantantes: CantanteModel[] = [];

  constructor(
    private service: ServiceService
  ) {
    this.getCantantes();
  }

  ngOnInit(): void {
  }

  getCantantes() {
    this.service.getCantantes().subscribe(
      (res: CantanteModel[]) => {
        console.log(res);
        this.cantantes = res;
      }
    )
  }

}
