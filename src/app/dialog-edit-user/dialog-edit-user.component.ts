import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
  loading = false;
  user!: User;
  birthday!: Date;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>){}


  saveUser(){
    
  }


  CloseOnClick(){
    this.dialogRef.close();
  }
}
