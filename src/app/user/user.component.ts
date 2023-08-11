import { Component, inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user: User = new User();
  firestore: Firestore = inject(Firestore);
  users$: Observable<any> | undefined;
  userCollection = collection(this.firestore, 'users');
  displayedColumns: string[] = ['name', 'email', 'city'];
  data: any[] = []; // Update this with your actual data array


  constructor(public dialog: MatDialog){
    this.users$ = collectionData(this.userCollection);
    this.users$.subscribe(user => {
      this.data = user;
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent)
  }

}
