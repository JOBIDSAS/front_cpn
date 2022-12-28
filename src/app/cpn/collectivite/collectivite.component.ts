import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/cpn/auth.service';
declare let $: any;

@Component({
  selector: 'app-collectivite',
  templateUrl: './collectivite.component.html',
  styleUrls: ['./collectivite.component.css']
})
export class CollectiviteComponent implements OnInit {
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
