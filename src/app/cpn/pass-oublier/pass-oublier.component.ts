import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/cpn/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pass-oublier',
  templateUrl: './pass-oublier.component.html',
  styleUrls: ['./pass-oublier.component.css']
})
export class PassOublierComponent implements OnInit {
  mailForm: FormGroup;

  constructor(private fb: FormBuilder,private auth:AuthService) {
     this.mailForm = this.fb.group({
      email: [null,[ Validators.required]],
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    const formData = new FormData();
    formData.append( 'email', this.mailForm.get('email').value );
   this.auth.sendMail(formData).subscribe(data=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'mail reussie',
      showConfirmButton: false,
      timer: 6000
    })
    location.reload()
  },

    error => {
      Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: 'mail d"utilisateur saisi est introuvable !',
     })}
    
    )
  }

}
