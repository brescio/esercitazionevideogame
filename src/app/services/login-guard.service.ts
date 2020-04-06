import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interface/user-interface';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if(sessionStorage.getItem('user') != null && sessionStorage.getItem('user') !== '' && sessionStorage.getItem('password') != null && sessionStorage.getItem('password') !== ''){
     this.route.navigateByUrl('/login');
      return true;

    }else{
      alert('login fallito')
      
    }



  }
  private peopleList:User[]=[
    {id:1, nomeUtente:"bona", password:"123", eta:78, indirizzo:"foresto"},
    {id:2, nomeUtente:"giorgio", password:"123", eta:30, indirizzo:"sarnico"},
    {id:3, nomeUtente:"matteo", password:"123", eta:45, indirizzo:"lovere"},
    {id:4, nomeUtente:"lorenzo", password:"123", eta:34, indirizzo:"temù"},
    {id:5, nomeUtente:"marco", password:"123", eta:21, indirizzo:"capriolo"},
  ]
  login(ut:String, psw:String):boolean{
    for(let i=0;i<this.peopleList.length;i++)
      if(this.peopleList[i].nomeUtente===ut && this.peopleList[i].password===psw)
        return true;
      return false;
  }
}