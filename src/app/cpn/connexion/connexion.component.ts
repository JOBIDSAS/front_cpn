import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { EMPTY, empty } from 'rxjs';
import {AuthService} from 'src/app/services/cpn/auth.service'
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2';
import  {filter} from 'rxjs/operators';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  LoginForm: FormGroup;
  Url:string
  currentUrl:string
  urlAgenda:string=""
  constructor(private fb: FormBuilder,private auth:AuthService
    , private tokenStorage:TokenStorageService,private router:Router) { 
    this.LoginForm = this.fb.group({
      email: [null,[ Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }


  /************************login *************************/
  onSubmit(){
    const formData = new FormData();
    formData.append( 'email', this.LoginForm.get('email').value );
    formData.append('password', this.LoginForm.get('password').value);
    this.auth.login(formData).subscribe(res=>{    
      if(res.message){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: res.message +' !',
        })
      }
      if(!res.error){
        this.tokenStorage.saveToken(res.data.token);
        this.tokenStorage.saveUser(res.data.user);
    Swal.fire({
      icon: 'success',
      title: 'connecter reussie',
      showConfirmButton: false,
      timer: 6000
    })
    if("/cpn/agenda"===localStorage.getItem('URL')){localStorage.removeItem('URL');location.href='/cpn/calendar'}
      else{location.href='/cpn/profile'}
  
  }
  else{ Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: res.message +' !',
  })}
  },

    error => {
      Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: 'error 500 !',
     })}
    
    )

  }
}
