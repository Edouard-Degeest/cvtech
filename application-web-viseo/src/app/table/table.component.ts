import {Component} from '@angular/core';


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
  {image: '/assets/img/2019-12-11.jpg',name: 'Degeest', surname: 'Edouard', fonction: 'UX Designer', disponibility: '🟢', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Junior', lieux: 'Lyon'},
  {image: '/assets/img/2019-12-11.jpg',name: 'Degeest', surname: 'Edouard', fonction: 'UX Designer', disponibility: '🟢', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Junior', lieux: 'Lyon'},
  {image: '/assets/img/2019-12-11.jpg',name: 'Degeest', surname: 'Edouard', fonction: 'UX Designer', disponibility: '🔴', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Junior', lieux: 'Lyon'},
  {image: '/assets/img/2019-12-11.jpg',name: 'Degeest', surname: 'Edouard', fonction: 'UX Designer', disponibility: '🟢', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Junior', lieux: 'Lyon'},
  {image: '/assets/img/2019-12-11.jpg',name: 'Degeest', surname: 'Edouard', fonction: 'UX Designer', disponibility: '🔴', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Junior', lieux: 'Lyon'},
  {image: '/assets/img/2019-12-11.jpg',name: 'Degeest', surname: 'Edouard', fonction: 'UX Designer', disponibility: '🟠', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Junior', lieux: 'Lyon'},
  {image: '/assets/img/2019-12-11.jpg',name: 'Degeest', surname: 'Edouard', fonction: 'UX Designer', disponibility: '🟠', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Junior', lieux: 'Lyon'},
  {image: '/assets/img/2019-12-11.jpg',name: 'Degeest', surname: 'Edouard', fonction: 'UX Designer', disponibility: '🟠', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Junior', lieux: 'Lyon'},
  {image: '/assets/img/2019-12-11.jpg',name: 'Degeest', surname: 'Edouard', fonction: 'UX Designer', disponibility: '🟢', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Junior', lieux: 'Lyon'},
  {image: '/assets/img/2019-12-11.jpg',name: 'Degeest', surname: 'Edouard', fonction: 'UX Designer', disponibility: '🔴', languages: 'HTML ,CSS, Javascript, PHP, Angular', grade: 'Junior', lieux: 'Lyon'},
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
  dataSource = ELEMENT_DATA;


}