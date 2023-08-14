import { Component, inject } from '@angular/core';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';
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
  userId!: string;
  firestore: Firestore = inject(Firestore);
  userCollection = collection(this.firestore, 'users');

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>){}


  saveUser(){
    this.loading = true;
    const projectDoc = doc(this.userCollection, this.userId)
    updateDoc(projectDoc, this.user.toJSON());
  }


  CloseOnClick(){
    this.dialogRef.close()
  }
}
