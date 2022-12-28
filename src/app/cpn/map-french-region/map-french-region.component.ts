import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-map-french-region',
  templateUrl: './map-french-region.component.html',
  styleUrls: ['./map-french-region.component.css']
})
export class MapFrenchRegionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
       
  $("path, circle").hover(function(e) {
    $( '#info-box').css('display', 'block');
    $( '#info-box').html($(this).data('info'));
   // console.log('hover', $( '#info-box').html($(this).data('info')))
  });

  $("path, circle").mouseleave(function(e) {
    $( '#info-box').css('display', 'none');
  });

  $(document).mousemove(function(e) {
    $( '#info-box').css('top', e.pageY - $( '#info-box').height() - 30);
    $( '#info-box').css('left', e.pageX - ($( '#info-box').width()) / 2);
  }).mouseover();
  

  }

}
