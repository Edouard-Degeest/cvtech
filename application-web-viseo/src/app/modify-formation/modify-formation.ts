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
  selector: 'modify-formation',
  templateUrl: 'modify-formation.html',
  styleUrls:['modify-formation.css'],
})
export class ModifyFormation {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModifyFormationDialog, {
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
  selector: 'modify-formation-dialog',
  templateUrl: 'modify-formation-dialog.html',
  styleUrls:['modify-formation.css'],
})
export class ModifyFormationDialog {

  constructor(
    public dialogRef: MatDialogRef<ModifyFormationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
