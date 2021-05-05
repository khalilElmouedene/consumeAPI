import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsumeAPIService } from './core/service/consumeAPI.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  list$: Observable<any>;

  constructor(
    private _service: ConsumeAPIService
  ) {

  }

  ngOnInit(): void {
    this.list$ = this._service.getAll();

    // Daba had list t9der dir liha loop b ngFor="let item of list$ | aync " o khdem bdak item
  }


}
