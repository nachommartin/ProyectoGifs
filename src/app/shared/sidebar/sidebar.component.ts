import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from 'src/app/gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent implements OnInit {

  constructor(private gsService:GifsServiceService) { 
  }

  get gifs():String[]{
    return this.gsService.historial;
  }

  ngOnInit(): void {
  }

}
