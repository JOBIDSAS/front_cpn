import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-notre-succes',
  templateUrl: './notre-succes.component.html',
  styleUrls: ['./notre-succes.component.css']
})
export class NotreSuccesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('.item_num').counterUp({
          time: 2000
      });
  });
  }

}
