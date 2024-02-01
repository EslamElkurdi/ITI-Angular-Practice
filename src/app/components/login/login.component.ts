import { Component } from '@angular/core';
import { UserAuthService } from '../../servics/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogged: boolean = false;
  constructor(private userAuth: UserAuthService,private router: Router){

  }

  login(){
    this.userAuth.login("Ali@gmail.com","12345678")
    if(this.isLogged){
      this.router.navigate(['/Product']);
    }

  }

  logout(){
    this.userAuth.logout();
  }

  ngOnInit(){
    this.userAuth.getLoggedStatus().subscribe((status)=>{
      this.isLogged = status;

    })
  }




}
