import { Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'complete-profile',
  templateUrl: 'complete-profile.html',
  styleUrls:['complete-profile.css'],
})
export class CompleteProfile {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CompleteProfileDialog, {
      
      width: '350px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'complete-profile-dialog',
  templateUrl: 'complete-profile-dialog.html',
  styleUrls:['complete-profile.css'],
})
export class CompleteProfileDialog {

  constructor(
    public dialogRef: MatDialogRef<CompleteProfileDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}