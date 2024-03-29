import { Injectable} from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthentificationService } from "../services/authentification.service";

@Injectable({
  providedIn:"root"
})
export class AuthGuard implements CanActivate{

  constructor(
    private auth:AuthentificationService,
    private route: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

    if(this.auth.getToken()){
      return true;
    }else{
      this.route.navigate(['/login']);
      return false
    }
  }

}
