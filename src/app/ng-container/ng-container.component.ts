import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.scss']
})
export class NgContainerComponent implements OnInit {

  users = [
    { login: "jonas", role: "admin", lastlogin: new Date('2/1/2018') },
    { login: "tica", role: "user", lastlogin: new Date('2/25/2018') },
    { login: "ana", role: "admin", lastlogin: new Date('2/22/2018') },
    { login: "larissa", role: "admin", lastlogin: new Date('2/13/2018') },
    { login: "joninhas", role: "user", lastlogin: new Date('2/27/2018') }
  ]
  constructor() { }

  ngOnInit() {
  }

}
