import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myimage1:string ="assets/img/logo.png";

  constructor() { }

  ngOnInit(): void {
  }

}
