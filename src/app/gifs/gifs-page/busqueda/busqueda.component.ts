import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: []
})
export class BusquedaComponent implements OnInit {
  cadena= ''; 

  constructor(private gsService:GifsServiceService) { }

  ngOnInit(): void {

  }

  agregar(x:any){
    this.cadena= x.target.value

    this.gsService.buscarGifs(this.cadena); 

  }

}
