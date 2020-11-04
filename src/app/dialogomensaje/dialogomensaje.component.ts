import {Component,OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  correo: string;
  name: string;
  rut: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-mensaje',
  templateUrl: 'dialogomensaje.component.css',
})
export class DialogomensajeComponent {

  correo: string;
  name: string;
  rut: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit (){}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogo, {
      width: '250px',
      data: {}
    });

    

    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.correo = result;
    });
  }
  
 

}

@Component({
  selector: 'dialog-overview-example-dialogo',
  templateUrl: 'dialog-overview-example-dialogo.html',
})
export class DialogOverviewExampleDialogo {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogo>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


}