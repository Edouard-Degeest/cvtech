import { Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'filtre-overview',
  templateUrl: 'filtre-overview.html',
  styleUrls:['filtre-overview.css'],
})
export class FiltreOverview {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FiltreOverviewFiltrer, {
      width: '800px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'filtre-overview-filter',
  templateUrl: 'filtre-overview-filter.html',
  styleUrls:['filtre-overview.css'],
})
export class FiltreOverviewFiltrer {

  constructor(
    public dialogRef: MatDialogRef<FiltreOverviewFiltrer>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
