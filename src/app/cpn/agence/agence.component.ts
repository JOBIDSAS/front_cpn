import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/cpn/auth.service';
declare let $: any;
declare let $map: any;
@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {
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
