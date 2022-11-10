import { Component } from '@angular/core';
import {DataServiceService} from "./services/data-service.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private dataService: DataServiceService) {
    this.dataService.getNotes().subscribe(res => {
      console.log(res);
    });
  }
}
