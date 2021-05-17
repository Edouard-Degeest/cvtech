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
  selector: 'modify-experience',
  templateUrl: 'modify-experience.html',
  styleUrls:['modify-experience.css'],
})
export class ModifyExperience {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModifyExperienceDialog, {
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
  selector: 'modify-experience-dialog',
  templateUrl: 'modify-experience-dialog.html',
  styleUrls:['modify-experience.css'],
})
export class ModifyExperienceDialog {

  constructor(
    public dialogRef: MatDialogRef<ModifyExperienceDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
