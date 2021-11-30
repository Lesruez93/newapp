import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  private redirectUrl: string;
  private uid: any = null;


  constructor(private auth: AngularFireAuth,
              private router: Router,
              private afs:AngularFirestore

  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.auth.authState.subscribe(res=>{

      if (res && res.uid){
       // const usersRef = this.afs.collection('users').doc(res.uid)
        // usersRef.get().subscribe((docSnapshot) => {
        //   if (docSnapshot.exists) {
        //     console.log("it exists")
            this.uid = true
            this.router.navigate(['/'])
            return  true

          //
          // } else {
          //
          //   this.router.navigate(['/personal-details'])
          //
          // }
       // });
      }


      else {
        this.router.navigate(['/auth/login'])

      }
    });
    return true
  }
}
