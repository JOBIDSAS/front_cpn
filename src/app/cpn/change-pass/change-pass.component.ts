import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/cpn/auth.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  passForm: FormGroup;
  token:string;
  constructor(private fb: FormBuilder,private auth:AuthService,private _Activatedroute: ActivatedRoute) {
     this.passForm = this.fb.group({
      email: [null,[ Validators.required]],
      password: [null,[ Validators.required]],
      password_confirmation: [null,[ Validators.required]],
    })
   }

  ngOnInit(): void {
    this.token = this._Activatedroute.snapshot.paramMap.get("token");
  }

  onSubmit(){
    const formData = new FormData();
    formData.append( 'email', this.passForm.get('email').value );
    formData.append( 'password', this.passForm.get('password').value );
    formData.append( 'password_confirmation', this.passForm.get('password_confirmation').value );
    formData.append( 'token', this.token );
   this.auth.resetPass(formData).subscribe(data=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'mail reussie',
      showConfirmButton: false,
      timer: 6000
    })
   location.href='/cpn/Connexion'
  },

    error => {
      Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: 'tous les champs est obligatoire !',
     })}
    
    )
  }


}
