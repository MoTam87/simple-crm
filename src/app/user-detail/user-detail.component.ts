import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  userId: any = '';
  firestore: Firestore = inject(Firestore);
  users$: Observable<any> | undefined;
  userCollection = collection(this.firestore, 'users');
  data: User = new User ();


  constructor(private route: ActivatedRoute, public dialog: MatDialog){
  
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      console.log('The id is', this.userId);
      this.getUser();
    });

  }

  async getUser(){
    const userDoc = doc(this.userCollection, this.userId);
    const userData = await getDoc(userDoc);
    this.data = new User(userData.data());
  }

  editMenu(){
    const dialogRef = this.dialog.open(DialogEditAddressComponent);
    dialogRef.componentInstance.user = this.data;
    
  };

  editUserDetail(){
    const dialogRef = this.dialog.open(DialogEditUserComponent);
    dialogRef.componentInstance.user = this.data;
  }


}
