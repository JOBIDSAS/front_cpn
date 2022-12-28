import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {AuthService} from 'src/app/services/cpn/auth.service'
import Swal from 'sweetalert2';
import  { baseUrl }  from 'src/app/baseUrl'; 'src/app/baseUrl'
declare let $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
   
})
export class ProfileComponent implements OnInit {
  /********************** all variable *************/
  modifierProfile: FormGroup;
  id :string ="13";
  profile:any;
  token:any=""
  user:any=null
  adresse:any
  socialMedia:any
  files: File[] = [];
  url:any= 'https://www.cpn-aide-aux-entreprise.jobid.fr/img/'
  /**********************life Cycle ***********************/
    //Add user form actions
    get f() { return this.modifierProfile.controls; }

  constructor(private auth:AuthService,private fb: FormBuilder,private tokenStorage: TokenStorageService,private route: ActivatedRoute) {
    this.modifierProfile = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      twitter:[''],
      instagram:[''],
      facebook:[''],
      teleph:[''],
      adresse:[''],
      });
   }

  ngOnInit(): void {
  this.auth.getUser().subscribe(res=>{
      this.profile=res
      this.user=res.data
      this.socialMedia=res.usersoc
      this.adresse=res.adress

      this.modifierProfile.get('firstname').setValue(this.profile?.data?.first_name)
      this.modifierProfile.get('lastname').setValue(this.profile?.data?.last_name)
      this.modifierProfile.get('email').setValue(this.profile?.data?.email)
      this.modifierProfile.get('twitter').setValue(this.profile?.social?.twitter)
      this.modifierProfile.get('instagram').setValue(this.profile?.social?.instagram)
      this.modifierProfile.get('facebook').setValue(this.profile?.social?.facebook)
      this.modifierProfile.get('teleph').setValue(this.profile?.social?.teleph)
      this.modifierProfile.get('adresse').setValue(this.profile?.adress?.address)

   })
  }

 /********************************update profile *****************************/
 RegisterUser() {

         const formData = new FormData();
         formData.append('image',this.files[0])
         formData.append( 'email', this.modifierProfile.get('email').value );
         formData.append('firstname', this.modifierProfile.get('firstname').value);
         formData.append('lastname', this.modifierProfile.get('lastname').value);
         formData.append('twitter', this.modifierProfile.get('twitter').value);
         formData.append('instagram', this.modifierProfile.get('instagram').value);
         formData.append('facebook', this.modifierProfile.get('facebook').value);
         formData.append('teleph', this.modifierProfile.get('teleph').value);
         formData.append('adresse', this.modifierProfile.get('adresse').value);

  if(formData){
   this.auth.updatUser(formData).subscribe(res=>{
      if(!res.error){
        Swal.fire({
          icon: 'success',
          title: 'modifier reussie',
          showConfirmButton: false,
          timer: 2000
        })
         location.reload()
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

onSelect(event) {
  this.files.push(...event.addedFiles);
}

onRemove(event) {
  this.files.splice(this.files.indexOf(event), 1);
}
  openModal(){
    $('#cpnEditProfil').appendTo("body").modal('show')
   }

}
