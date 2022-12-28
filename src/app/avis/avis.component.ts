import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {AvisService} from 'src/app/services/cpn/avis.service'


@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  //rating
//https://dev.to/leonardoschmittk/how-to-make-a-star-rating-with-js-36d3

AvisForm: FormGroup;

  constructor(private fb: FormBuilder,private avisSevice:AvisService) { 

    this.AvisForm = this.fb.group({
      email: [null,[ Validators.required]],
      username: ['',],
      phone: ['', ],
      site: ['', ],
      finance: ['', ],
      buget: ['', ],
      comment: ['', ],
      proj: ['', ],
      note: ['', ],
    })
  }

  onSubmit(){
    console.log('avis',this.AvisForm.value)
    const formData = new FormData();
    formData.append( 'email', this.AvisForm.get('email').value );
    formData.append('username', this.AvisForm.get('username').value);
    formData.append('phone', this.AvisForm.get('phone').value);
    formData.append('site', this.AvisForm.get('site').value);
    formData.append('finance', this.AvisForm.get('finance').value);
    formData.append('buget', this.AvisForm.get('buget').value);
    formData.append('comment', this.AvisForm.get('comment').value);
    formData.append('proj', this.AvisForm.get('proj').value);
    formData.append('note', this.AvisForm.get('note').value);

if(formData){
this.avisSevice.addAvis(formData).subscribe(res=>{
 if(!res.error){
   Swal.fire({
     icon: 'success',
     title: 'save reussie',
     showConfirmButton: false,
     timer: 2000
   })
   location.href='/'
   } else{ Swal.fire({
     icon: 'error',
     title: 'Oops...',
     text: res.message +' !',
   })}
},

error => {
console.log(error);

Swal.fire({
 icon: 'error',
 title: 'Oops...',
 text: 'error 500 !',
})})
}

  }

  rating(val:any){
    this.AvisForm.get('note').setValue(val)
  }

 
  ngOnInit(): void {
  }

}
