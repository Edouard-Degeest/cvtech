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
  selector: 'modify-cv',
  templateUrl: 'modify-cv.html',
  styleUrls:['modify-cv.css'],
})
export class ModifyCv {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModifyCvDialog, {
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
  selector: 'modify-cv-dialog',
  templateUrl: 'modify-cv-dialog.html',
  styleUrls:['modify-cv.css'],
})
export class ModifyCvDialog {

  constructor(
    public dialogRef: MatDialogRef<ModifyCv>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
