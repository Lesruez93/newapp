import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {first, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    uid = this.af.authState.pipe(
        map(authState => {
            if (!authState) {
                return null;
            } else {
                return authState.uid;
            }
        })
    );
  constructor(public af:AngularFireAuth) {


  }


isLoggedIn(){
    return this.af.authState.pipe(first())

}
  }
// isAdmin: Observable<boolean> = this.uid.pipe(
//     switchMap(uid => {
//         if (!uid) {
//             return observableOf(false);
//         } else {
//             return this.db.object<boolean>('/admin/' +uid).valueChanges();
//         }
//     })
// );
