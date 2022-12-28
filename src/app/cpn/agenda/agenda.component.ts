import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/cpn/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService,private auth:AuthService) {
   
   }

  ngOnInit(): void {
  }

  redirect(){
    
    localStorage.setItem("URL","/cpn/agenda"); 
    location.href='/cpn/Connexion'
  }

}
