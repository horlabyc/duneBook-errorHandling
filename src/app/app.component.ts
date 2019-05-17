import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'errorHandling-app';

  constructor(private appService: AppServiceService) {

  }

  makeApiCall() {
    this.appService.extractJokes();
  }

  ngOnInit() {}
}
