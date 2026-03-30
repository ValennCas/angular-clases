import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../../models';

@Component({
  selector: 'app-user-dialog-delete',
  templateUrl: './user-dialog-delete.component.html',
  styleUrl: './user-dialog-delete.component.scss'
})
export class UserDialogDeleteComponent {
  constructor(
    private dialogRef: MatDialogRef<UserDialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IUser
  ) {}

  onDelete(): void {
    this.dialogRef.close(true); // solo confirmación
  }
}
