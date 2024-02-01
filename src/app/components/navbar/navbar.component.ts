import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../servics/user-auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLogged: boolean = false;

  constructor(private userAuth: UserAuthService){}
  ngOnInit(){
    this.userAuth.getLoggedStatus().subscribe((status)=>{
      this.isLogged = status;
    })
  }

  logout(){
    this.userAuth.logout();
  }

}
