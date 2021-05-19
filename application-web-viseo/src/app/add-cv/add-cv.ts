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
  selector: 'add-cv',
  templateUrl: 'add-cv.html',
  styleUrls:['add-cv.css'],
})
export class AddCv {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCvDialog, {
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
  selector: 'add-cv-dialog',
  templateUrl: 'add-cv-dialog.html',
  styleUrls:['add-cv.css'],
})
export class AddCvDialog {

  constructor(
    public dialogRef: MatDialogRef<AddCvDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
