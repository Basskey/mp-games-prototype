import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface MPGames {
  title: string;
  description: string;
  author: string;
  units: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'mp-games-prototype';
  public userMap: MPGames = {
    title: '',
    description: '',
    author: '',
    units: [],
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<MPGames>('/assets/mock-data.json')
      .subscribe(response => {
        this.userMap = response;
        console.log(this.userMap.units[0].roles[1].users[0].hobby);
      });
  }
}
