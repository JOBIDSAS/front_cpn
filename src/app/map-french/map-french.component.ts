import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-map-french',
  templateUrl: './map-french.component.html',
  styleUrls: ['./map-french.component.css']
})
export class MapFrenchComponent implements OnInit {
  @Input()  myinputDep:string;
  @Output() myOutput:EventEmitter<any>= new EventEmitter();

  map:{
    region:string,
    departement:string,
  zipCode:string,
  }
  filtreMap: any
  paths:any
  x:any
  y:any
  dept:any
    constructor() { }
  message =" Info about the action";
 
  /*************************cahnge input *************/
  ngOnChanges(changes: SimpleChanges) {
    this.dept=changes.myinputDep.currentValue
    this.selectDept(changes.myinputDep.currentValue)
}

  ngOnInit(): void {
        
  $("path, circle").hover(function(e) {
    $( '#info-box').css('display', 'block');
    $( '#info-box').html($(this).data('department')+"  "+$(this).data('name'));
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

  selectDept(val){
    let mapCityName = document.getElementById("placeName")
    let map = document.getElementById("svgContent");
    let region = map.querySelectorAll(".region");
    region.forEach((regionItem)=>{
      let departement = regionItem.querySelectorAll('.departement');
      departement.forEach((departementItem)=>{
        if(departementItem.attributes[2]?.nodeValue == val|| departementItem.attributes[2]?.nodeValue == val){
         // mapCityName.innerHTML ="<b>"+regionItem.dataset.name+"</b> : "+departementItem.dataset.name+" <sup>("+departementItem.attributes[3]?.nodeValue+")</sup>";
         this.map={
          region:regionItem?.attributes[1]?.nodeValue,
          departement:departementItem?.attributes[1]?.nodeValue,
           zipCode:departementItem?.attributes[2]?.nodeValue,
        }
        this.myOutput.emit(this.map); 

        }
      });
    });


     
  }



}
