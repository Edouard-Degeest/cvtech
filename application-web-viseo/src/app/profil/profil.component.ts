import { Component, OnInit } from '@angular/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  color: ThemePalette = 'warn';
  mode: ProgressBarMode = 'determinate';
  value = 20;
  bufferValue = 50;

  ngOnInit(): void {
  }

}

export interface Profile {
  _id: string;
  name:string;
  imagePath:string;
}
