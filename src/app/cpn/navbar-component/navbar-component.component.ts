import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  token:any=""
  user:any=null
  connect=false
  role:string="logout"

      /******************************life cycle *************************/
  constructor(private tokenStorage: TokenStorageService,private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    if(this.tokenStorage.getUser()!=false){
      this.token=this.tokenStorage.getUser();
      this.user=JSON.parse(this.token)
      this.role=this.user.role
      this.connect=true
     }

    
  }

  redirectTo(to){
    location.href=to
  }
  logout() {
    this.tokenStorage.signOut();
    this.connect=false
    this.role="logout"
    location.href = '/home';
}

}
