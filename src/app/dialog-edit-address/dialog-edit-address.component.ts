import { Component, inject } from '@angular/core';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
  user!: User;
  loading = false;
  userId!: string;
  firestore: Firestore = inject(Firestore);
  userCollection = collection(this.firestore, 'users');

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>){}

  saveUser(){
    this.loading = true;
    const projectDoc = doc(this.userCollection, this.userId)
    updateDoc(projectDoc, this.user.toJSON())
  }

  CloseOnClick(): void {
    this.dialogRef.close();
  }
}
