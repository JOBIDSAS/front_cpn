import { Component, OnInit } from '@angular/core';
declare let $ :any;
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../services/cpn/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token:any=""
  user:any=null
  connect=false
  role:string="logout"
  follow:any;
  constructor(private tokenStorage: TokenStorageService,private route: ActivatedRoute,private auth:AuthService) { }

  ngOnInit(): void {
     this.auth.getFellower().subscribe(res=>{
       this.follow=res

     })
    if(this.tokenStorage.getUser()!=false){
      this.token=this.tokenStorage.getUser();
      this.user=JSON.parse(this.token)
      this.role=this.user.role
      this.connect=true

     }

     this.serachbar()
     this.compteur()
    
  }

 serachbar(){
  $(document).mousemove(function(e) {
    $( '#info-box').css('top', e.pageY - $( '#info-box').height() - 30);
    $( '#info-box').css('left', e.pageX - ($( '#info-box').width()) / 2);
  }).mouseover();
  
    $('.search').mouseenter(function() {
        $(this).addClass('search--show');
        $(this).removeClass('search--hide');
    });

    $('.search').mouseleave(function() {
        $(this).addClass('search--hide');
        $(this).removeClass('search--show');
    });
 }
  compteur(){
    $(document).ready(function() {
      $('.item_num').counterUp({
          time: 2000
      });
  });
  }
  logout() {
    this.tokenStorage.signOut();
    this.connect=false
    this.role="logout"
    location.href = '/home';
}

}
