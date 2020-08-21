import { Component, OnInit } from '@angular/core';
import { CantanteModel } from 'src/app/models/cantante.model';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-cantante',
  templateUrl: './agregar-cantante.component.html',
  styleUrls: ['./agregar-cantante.component.css']
})
export class AgregarCantanteComponent implements OnInit {

  cantante: CantanteModel = {
    Id: 0,
    Name: '',
    KindOfMusic: '',
    Songs: []
  };
  cancion = '';

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  agregarCancion() {
    this.cantante.Songs.push(this.cancion);
    this.cancion = '';
  }

  guardarCantante() {
    this.service.postCantante(this.cantante).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/cantantes');
      }
    )
  }
}
