import { Component, OnInit } from '@angular/core';
declare let $: any;


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
/*
    $(".float_actions .actions_content .action_items").mouseenter(function(){
      $(".float_actions .actions_content .action_items").hover(function(){
        $(".float_actions .actions_content .action_items").hover('<a href="mailto:email:test.com" style="margin-left:250px; z-index:5900">email@test.com</a>');
      })
    });*/
    //$( ".float_actions .actions_content .action_items:hover:after" ).html('<a href="mailto:email:test.com">email@test.com</a>');
   // $(".float_actions .actions_content .action_items:hover:after").css("content", "yellow");
  }

}
