import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from 'src/app/services/cpn/auth.service'
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
registerGroup:FormGroup
  constructor(private auth:AuthService, private fb:FormBuilder,private tokenStorage:TokenStorageService) { 
     this.registerGroup = this.fb.group({
      role: ['',[Validators.required]],
      firstname: ['',[ Validators.required]],
      lastname: ['',[ Validators.required]],
      email: ['',[ Validators.required]],
      password: ['', [Validators.required]],
      password_confirmed: ['', [Validators.required]],

    });
  }
  onSubmit(){
    const formData = new FormData();
    formData.append('type', this.registerGroup.get('role').value );
    formData.append(   'firstname', this.registerGroup.get('firstname').value);
    formData.append( 'lastname', this.registerGroup.get('lastname').value);
    formData.append( 'email', this.registerGroup.get('email').value );
    formData.append('password', this.registerGroup.get('password').value);
    formData.append('password_confirmed', this.registerGroup.get('password_confirmed').value );
   
          
    
  this.auth.register( formData).subscribe(res=>{
   if(!res.error){
    this.tokenStorage.saveToken(res.data.token);
    this.tokenStorage.saveUser(res.data.user);
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
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
       text: 'error 500',
     })}
)

}
  ngOnInit(): void {
  }

}
