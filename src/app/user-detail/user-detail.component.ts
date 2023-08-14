import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.class';

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
  data: User = new User();


  constructor(private route: ActivatedRoute){
  
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      console.log('The id is', this.userId);
      this.getUser();
    });

  }

  getUser(){
    this.users$ = collectionData(this.userCollection);
    this.users$.subscribe(user => {
      this.data = new User(user);
      console.log('This', this.data)
    });
  }


}
