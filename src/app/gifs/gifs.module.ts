import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './gifs-page/busqueda/busqueda.component';
import { ResultadosComponent } from './gifs-page/resultados/resultados.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class GifsModule { }
