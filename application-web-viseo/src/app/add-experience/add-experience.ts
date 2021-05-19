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
  selector: 'add-experience',
  templateUrl: 'add-experience.html',
  styleUrls:['add-experience.css'],
})
export class AddExperience {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddExperienceDialog, {
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
  selector: 'add-experience-dialog',
  templateUrl: 'add-experience-dialog.html',
  styleUrls:['add-experience.css'],
})
export class AddExperienceDialog {

  constructor(
    public dialogRef: MatDialogRef<AddExperienceDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
