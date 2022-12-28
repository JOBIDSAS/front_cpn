import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/cpn/auth.service';
declare let $: any;

@Component({
  selector: 'app-hometpepme',
  templateUrl: './hometpepme.component.html',
  styleUrls: ['./hometpepme.component.css']
})
export class HometpepmeComponent implements OnInit {
follow:any

  constructor(private auth:AuthService) { }

  ngOnInit(): void {

    this.auth.getFellower().subscribe(res=>{
      this.follow=res

    })
    $('.search').mouseenter(function() {
      $(this).addClass('search--show');
      $(this).removeClass('search--hide');
  });

  $('.search').mouseleave(function() {
      $(this).addClass('search--hide');
      $(this).removeClass('search--show');
  });


  }

}
