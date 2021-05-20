import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  image: string;
  name: string;
  surname: string;
  fonction: string;
  disponibility: string;
  languages: string;
  grade: string;
  lieux: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {image: '/assets/img/2019-12-11.jpg',name: 'Degeest', surname: 'Edouard', fonction: 'UX Designer', disponibility: '🟠', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Junior', lieux: 'Lyon'},
  {image: '/assets/img/person.png',name: 'Alterman', surname: 'Valérie', fonction: 'Developpeur Full Stack', disponibility: '🟢', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Sénior', lieux: 'Paris'},
  {image: '/assets/img/person.png',name: 'Asselineau', surname: 'Raymond', fonction: 'UI Designer', disponibility: '🔴', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Sénior', lieux: 'Lyon'},
  {image: '/assets/img/person.png',name: 'Jacquemoud', surname: 'Viktor', fonction: 'Developpeur Web', disponibility: '🟢', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Sénior', lieux: 'Lyon'},
  {image: '/assets/img/person.png',name: 'Rouzet', surname: 'Nicolas', fonction: 'Développeur blockchain', disponibility: '🟢', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Sénior', lieux: 'Paris'},
  {image: '/assets/img/person.png',name: 'Thibodeaux', surname: 'Odelia', fonction: ' Développeur Java', disponibility: '🟢', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Sénior', lieux: 'Auvergne Rhône-Aple, France'},
  {image: '/assets/img/person.png',name: 'Bourseiller', surname: 'Antoine', fonction: 'UX Designer', disponibility: '🔴', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Sénior', lieux: 'Bordeau'},
  {image: '/assets/img/person.png',name: 'Boutet', surname: 'Mariam', fonction: 'Developpeur Full Stack', disponibility: '🟠', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Sénior', lieux: 'Paris'},
  {image: '/assets/img/person.png',name: 'Gardet', surname: 'Paul', fonction: 'Developpeur Web', disponibility: '🟢', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Junior', lieux: 'Lyon'},
  {image: '/assets/img/person.png',name: 'Desjardins', surname: 'Aurore', fonction: 'Developpeur Full Stack', disponibility: '🔴', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Sénior', lieux: 'Auvergne Rhône-Aple, France'},
  {image: '/assets/img/person.png',name: 'Rodin', surname: 'Sama', fonction: 'Developpeur Full Stack', disponibility: '🟢', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Sénior', lieux: 'Lyon'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'my-table',
  styleUrls: ['./table.component.scss'],
  templateUrl: './table.component.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['image','name', 'surname', 'fonction', 'disponibility', 'languages', 'grade', 'lieux'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  }