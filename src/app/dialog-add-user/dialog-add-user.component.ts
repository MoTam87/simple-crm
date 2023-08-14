import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user: User = new User();
  birthday!: Date;
  firestore: Firestore = inject(Firestore)
  userCollection = collection(this.firestore, 'users');
  users$: Observable<any> | undefined;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>){

  }

  getUser(){
    this.users$ = collectionData(this.userCollection);
  }

  saveUser(){
    this.loading = true;
    this.user.birthday = this.birthday.getTime();
    console.log('user', this.user);
    addDoc(this.userCollection, this.user.toJSON());
    this.loading = false;
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }



 



}
