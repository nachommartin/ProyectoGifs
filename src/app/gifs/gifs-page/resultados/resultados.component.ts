import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../../services/gifs-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: []
})
export class ResultadosComponent implements OnInit {

  constructor(private gsService:GifsServiceService) { }

  ngOnInit(): void {
  }

  get gifsMostrados(){
  return this.gsService.gifsDatos
  }

}
