import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestEgibiliteService } from '../services/cpn/test-egibilite.service';
import { NgOption, NgSelectConfig} from '@ng-select/ng-select';
declare let $: any;
import { Options, ChangeContext, PointerType, LabelType } from '@angular-slider/ngx-slider';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  /***************************all variable **************************/
  myInputDepartment:string ="03"
  calendarOption :any
  i:any=9
  testEgibFormGroup:FormGroup;
  addEventForm: FormGroup;
  elegible:any[]
   graphic:any[]
   montage:any[]
   development:any[]
   marketing:any[]
   transition:any[]=[]
   transitions:any[]=[]

   activities:any[]
   address:any
   cid:any
  get f() { return this.addEventForm.controls; }
  onChange = ($event: any): void => {
     console.log('activitie',this.testEgibFormGroup.value.activite);
     console.log(`SELECTION CHANGED INTO ${$event.name || ''}`);
   }  
  /***********************************life cycle *******************/
  constructor(private _formBuilder:FormBuilder,private testService:TestEgibiliteService) { 
    /*************************form  data contact************************/
    this.testEgibFormGroup = this._formBuilder.group({
      codeP: ['',[ Validators.required,Validators.pattern("[0-9 ]{5}")]],
      nomSoc: ['', Validators.required],
      activite: ['', Validators.required],
      status: ['', Validators.required],
      help: ['', Validators.required],
      Nvente: ['0%', Validators.required],
      Nvisite: ['0%', Validators.required],
      Nuser: ['0%', Validators.required],
      personneSal: ['', Validators.required],
      turnover:[0, Validators.required],
      lastTurnover:[0, Validators.required],
      haveSite:['', Validators.required],
      haveCrm:['', Validators.required],
      haveErp:['', Validators.required],
      liensite: ['', Validators.required],
      datesite: ['', Validators.required],
      siteVal: ['', Validators.required],
      dateCrm: ['', Validators.required],
      nomCrm: ['', Validators.required],
      nomErp: ['', Validators.required],
      typeCRM: ['', Validators.required],
      typeERP: ['', Validators.required],
      typeSite: ['', Validators.required],
      crmDev: ['', Validators.required],
      agence: ['', Validators.required],
      budget: ['', Validators.required],
      service: ['', Validators.required],
      siret: ['', [ Validators.required,Validators.pattern("[0-9 ]{14}")]],
      siren: [''],
      naf: ['', Validators.required],
      adresse: ['', Validators.required],
      region: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      departement: ['', Validators.required],
      phoneEntrep: ['', Validators.required],
      post: ['', Validators.required],
      contactID: ['', Validators.required],
      meetingType: ['', Validators.required],
      search: [''],
    });

 /*************************form data event *******************************/
 this.addEventForm = this._formBuilder.group({
  title: ['', [Validators.required]],
  dateDebut: ['', [Validators.required]],
  cid:this.testEgibFormGroup.get("contactID").value
 })   
/*************************************calandreir ***************************/
this.calendarOption = {
  customButtons: {
    myCustomButton: {
      text: 'custom!',
      click: function () {
        alert('clicked the custom button!');
      }
    }
  },
  locale:"fr",
  initialView: 'dayGridMonth',
  //initialEvents: INITIAL_EVENTS, // alternatively, use the events setting to fetch from a feed
  weekends: true,
  editable: true,
  selectable: true,
  selectMirror: true,
  droppable: false,
  displayEventTime: true,
  disableDragging:false,
  timeZone: 'UTC',
  refetchResourcesOnNavigate: true,


  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,dayGridWeek,dayGridDay'
  },
  dayMaxEvents: true,
  events: [],
  dateClick: this.handleDateClick,
}


  }

ngOnInit(): void {
  this.getTransitionServ()
  this.getTransitionMar()

    this.getTransition()
    this.getActivite()      
}

/**********************get departement *******************/
GetChildData(data){  
  console.log("region",data)
  this.testEgibFormGroup.get('codeP').setValue(data?.zipCode) 
  this.testEgibFormGroup.get('region').setValue(data?.region) 
  this.testEgibFormGroup.get('departement').setValue(data?.departement) 
}  


/***************************************select date rendez vous *************************/
/*Show Modal with Forn on dayClick Event*/
handleDateClick() {
  console.log("dateselect")
}

sendRendvous(){
  console.log('event',this.addEventForm.value)


      this.testService.addEvents({title: this.addEventForm.value.title, dateDebut:this.addEventForm.value.dateDebut, cid:this.cid}).subscribe(res=>{
        console.log('event',res)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'ajout reussie',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error => {
        console.log(error);
  
        Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'quelque chose est incorrect !',
       })}
      )
}


/***********************************generate lien zoom ****************/
generateZoomLink(){
  this.test.zoom.generating = true;
  this.test.zoom.generated = true;
  this.testService.addZoom({cid:this.cid,type:this.testEgibFormGroup.value.meetingType})
  .subscribe(response=>{
    console.log('zoom',response)
    if(!response.error){
      this.test.zoom.generating = false;
      this.test.zoom.generated = true;
      Swal.fire({
        icon: 'success',
        title: 'genrate lien zoom reussie',
        showConfirmButton: false,
        timer: 1500
      })
      this.nextStep()
      
    } else {
      this.test.zoom.generating = false;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: response.message +' !',
      })
    }
      
  },
  error => {
    console.log(error);

    Swal.fire({
     icon: 'error',
     title: 'Oops...',
     text: 'error 500 !',
   })
  }
   )

}



   /***********************get all  activites ******************/
   getActivite(){
    this.testService.getActivites().subscribe(res=>{
     this.activities=  res
       console.log("activi",this.activities)
   })
 }
 
 
 /*********************** selection turnover ******************/
selectedRange(val){
  this.testEgibFormGroup.value.turnover=val
}
 /***********************select transition ******************/
 dataSource =  new MatTableDataSource();
 valuechange(val){
  this.dataSource.filter = val.trim().toLowerCase();
  this.transition=this.dataSource.filteredData
 }
 getTransition(){
  this.testService.getTransitions().subscribe(res=>{
    this.dataSource =  new MatTableDataSource(res?.data);
   console.log("transition",this.transition)
 
 })
}
 
 /*********************** Get Category Graphic ******************/

dataSources =  new MatTableDataSource();
valuechanges(val){
 this.dataSources.filter = val.trim().toLowerCase();
 this.transitions=this.dataSources.filteredData
}
getTransitionServ(){
 this.testService.getTransitionsServ().subscribe(res=>{
   this.dataSources =  new MatTableDataSource(res?.data);
  console.log("transition",this.transition)

})
}
  /*********************** Get Category Marketing ******************/

dataSourcem =  new MatTableDataSource();
valuechangem(val){
 this.dataSourcem.filter = val.trim().toLowerCase();
 this.transitions=this.dataSourcem.filteredData
}
getTransitionMar(){
 this.testService.getTransitionsMark().subscribe(res=>{
   this.dataSourcem =  new MatTableDataSource(res?.data);
  console.log("transition",this.transition)

})
}

/*************************************services ***************************************/
selectService(val){
  console.log('service',val)
  this.testEgibFormGroup.get('service').setValue(val)
}

/**********************************************turnover ******************************************/

turn:any=0
incTurn(val,min,max){
  console.log('turn',this.turn)
  if( this.turn>max+10 ){ this.turn=0}
  if(this.turn<max){
  this.turn=val+this.turn  
  this.testEgibFormGroup.get('turnover').setValue(this.turn + '%')
  }
}
decTurn(val,min,max){
  console.log('turn',this.turn)
  if(this.turn<min+10 ){ this.turn=0}
  if(this.turn>min){
  this.turn=this.turn-val
  this.testEgibFormGroup.get('turnover').setValue(this.turn + '%')
}
}
showA:Boolean=true
showB:boolean=true
changeEtatA(){
  this.showA=true
  this.showB=false
}
changeEtatB(){
  this.showA=false
  this.showB=true
}
Visites:boolean=false;
Ventes:boolean=false;
utilisateurs:boolean=false;
commerce:boolean=true;
Vitrine:boolean=true;
Market:boolean=true;
bgColor : string = 'grey';
bgColor2 : string = 'grey';
bgColor3 : string = 'grey';

changeColor(){
  this.bgColor = 'rgb(35, 154, 0)';
}
changeColor2(){
  this.bgColor2 = 'rgb(35, 154, 0)';
}
changeColor3(){
  this.bgColor3 = 'rgb(35, 154, 0)';
}
clickCond1(){
  this.Ventes=true; 
  this.utilisateurs=false; 
  this.Visites=false; 

  this.commerce=true; 
  this.Vitrine=true; 
  this.Market=true; 
}
clickCond2(){
  this.Visites=true; 
  this.Ventes=false; 
  this.utilisateurs=false; 

   this.commerce=true; 
  this.Vitrine=true; 
  this.Market=true; 
}
clickCond3(){
  this.utilisateurs=true; 
  this.Visites=false; 
  this.Ventes=false; 
   this.commerce=true; 
  this.Vitrine=true; 
  this.Market=true; 
}
/**********************************************nombre visite ******************************************/

visite:any=0
incVisite(val,min,max){
  console.log('turn',this.turn)
  if( this.turn>max+10 ){ this.turn=0}
  if(this.turn<max){
  this.turn=val+this.turn  
  this.testEgibFormGroup.get('Nvisite').setValue(this.turn + '%')
  }
}
decVisite(val,min,max){
  console.log('turn',this.turn)
  if(this.turn<min+10 ){ this.turn=0}
  if(this.turn>min){
  this.turn=this.turn-val
  this.testEgibFormGroup.get('Nvisite').setValue(this.turn + '%')
}
}
/********************************************** nombre vente ******************************************/

vente:any=0
incVente(val,min,max){
  console.log('turn',this.turn)
  if( this.turn>max+10 ){ this.turn=0}
  if(this.turn<max){
  this.turn=val+this.turn  
  this.testEgibFormGroup.get('Nvente').setValue(this.turn + '%')
  }
}
decVente(val,min,max){
  console.log('turn',this.turn)
  if(this.turn<min+10 ){ this.turn=0}
  if(this.turn>min){
  this.turn=this.turn-val
  this.testEgibFormGroup.get('Nvente').setValue(this.turn + '%')
}
}
/**********************************************nombre user ******************************************/

users:any=0
incUser(val,min,max){
  console.log('turn',this.turn)
  if( this.turn>max+10 ){ this.turn=0}
  if(this.turn<max){
  this.turn=val+this.turn  
  this.testEgibFormGroup.get('Nuser').setValue(this.turn + '%')
  }
}
decUser(val,min,max){
  console.log('turn',this.turn)
  if(this.turn<min+10 ){ this.turn=0}
  if(this.turn>min){
  this.turn=this.turn-val
  this.testEgibFormGroup.get('Nuser').setValue(this.turn + '%')
}
}

/**********************************************Last turnover ******************************************/
setLastTurnover(val){
  const step = this.test.active.step;
  let range = [
    val[0],
    val[1]
  ];
  console.log('val',val)
  console.log('range',range)
  this.testService.getServiceTurnover(range).subscribe(response=>{
    console.log('data',response)
    this.testEgibFormGroup.get('service').setValue(response.data.transition_id)
    this.testEgibFormGroup.get('lastTurnover').setValue(response.data.id)
    this.testEgibFormGroup.get('budget').setValue( Math.ceil(response.data.budget/100)*100)
  

    this.test.data[11].budget = Math.ceil(response.data.budget/100);
    
    this.test.data[11].min = Math.ceil(response.data.budget_min/100)*100;
    this.test.data[11].target = Math.ceil(response.data.budget/100)*100;
    this.test.data[11].max = Math.ceil(response.data.budget_max/100)*100;

  })
}

 /******************************************************** get naf with siret**********************************/
getNafCompany(siret):any{
  let siren = siret.substring(0,9);
  this.testEgibFormGroup.get('siren').setValue(siren);
  this.test.data[this.test.active.step].loading = true;
  siret=this.testEgibFormGroup.value.siret
 
    this.testService.getCompanySiren(this.testEgibFormGroup.value.siret).subscribe(response=>{
      console.log('siren',response)
      this.test.data[this.test.active.step].loading = false;
      this.testEgibFormGroup.get('naf').setValue(response.ape);
      this.testEgibFormGroup.get('naf').setValue(response.ape);
      return true
    },
    error => {
      console.log(error);
  
      Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: 'code siret est introuvable !',
     })
     return false
    }
    );
    return true
  
}

 /******************************************************** save client to database**********************************/
setContactForm(formDatas){
  this.testService.addContact({
      "address":{
        "advisorName":this.testEgibFormGroup.value.nomSoc,
        "line":this.testEgibFormGroup.value.adresse,
        "zipcode":this.testEgibFormGroup.value.codeP,
        "region":this.testEgibFormGroup.value.region,
        "departement":this.testEgibFormGroup.value.departement,
        "city":this.testEgibFormGroup.value.city,
        "country":this.testEgibFormGroup.value.country
      },
      "companies":{
        "name":this.testEgibFormGroup.value.nomSoc,
        "status":this.testEgibFormGroup.value.status,
        "activity":this.testEgibFormGroup.value.activite.id ,
        "help":this.testEgibFormGroup.value.help,
        "salaries":this.testEgibFormGroup.value.personneSal,
        "siret":this.testEgibFormGroup.value.siret,
        "siren":this.testEgibFormGroup.value.siren,
        "naf":this.testEgibFormGroup.value.naf,
        "phone":this.testEgibFormGroup.value.phoneEntrep,
        "turnover":this.testEgibFormGroup.value.turnover,
        "lastTurnover":this.testEgibFormGroup.value.lastTurnover
      },
      "contacts":{
        "firstName":this.testEgibFormGroup.value.nom,
        "lastName":this.testEgibFormGroup.value.prenom,
        "email":this.testEgibFormGroup.value.email,
        "phone":this.testEgibFormGroup.value.phone,
        "position":this.testEgibFormGroup.value.post,
        "type":3,
        "comment":''
      },
      "development":{
        "haveWebsite":this.testEgibFormGroup.value.haveSite,
        "websiteType":this.testEgibFormGroup.value.typeSite,
        "websiteValue":this.testEgibFormGroup.value.siteVal,
        "websiteLink":this.testEgibFormGroup.value.liensite,
        "websiteDate":this.testEgibFormGroup.value.datesite,
        "haveCrm":this.testEgibFormGroup.value.haveCrm,
        "crmType":this.testEgibFormGroup.value.typeCRM,
        "crmDev":this.testEgibFormGroup.value.crmDev,
        "crmName":this.testEgibFormGroup.value.nomCrm,
        "erpName":this.testEgibFormGroup.value.nomErp,
        "crmDate":this.testEgibFormGroup.value.dateCrm,
        "agencyName":this.testEgibFormGroup.value.agence
      },
      "investment":{
        "service":this.testEgibFormGroup.value.service,
        "budget":this.testEgibFormGroup.value.budget,
        "digitalTransitions":['test']
      },
      "contactID":'',
      "meetingType":''
    
  })
  .subscribe(response=>{
    console.log('contactid',response)
    if(response){
    this.cid=response.cid
      }
  })
}
 /********************************************************status**********************************/
 getstatus(data){
  console.log('activi',data)
  this.testEgibFormGroup.get('status').setValue(data)
  
}

  /******************************************nextmodule  *************************************************/
nextStep(){
  this.test.active.step+=1
}

nextSubStep(){
  this.test.active.subStep+=1
}
 /******************************************prevmodule  *************************************************/
 prevStep(){
  this.test.active.step-=1;
}


/**************************test elgible */
elgiblTest(){
  this.eleg=null
  this.nextStep();
}
/**********************is cpn **************/
isCpn(){
  console.log("data result", this.testEgibFormGroup.value)
  let budget = this.testEgibFormGroup.value.budget;
  let service = this.testEgibFormGroup.value.service;
  let region = this.testEgibFormGroup.value.region;
  let naf = this.testEgibFormGroup.value.naf;
  console.log("isopen", this.test.result.isOpen)
  console.log("isCpn", this.test.result.isCpn)
  console.log("isLoading", this.test.result.isLoading)

  /**************************calcule cpn *******************/
  console.log("is open false")
      this.test.result.isOpen = true;
      this.test.result.isLoading = true;
      console.log("service", this.testEgibFormGroup.value.service)
      console.log("budget", this.testEgibFormGroup.value.budget)
      this.testService.cpnGrant(service,budget)
      .subscribe(response=>{
        console.log("cpnGrant",response)

        this.test.result.cpn.id = response.id;
        this.test.result.cpn.amount = response.grants;
        this.test.result.cpn.originalPrice = response.original_price;
        this.test.result.cpn.sellPrice = response.sell_price;
        this.test.result.isLoading = false;
      })
      console.log("step", this.test.active.step)
      this.nextStep();
}
  /****************************************************** resultat de test **************************************/
  eleg:boolean=null
  showResult(){
  console.log("data result", this.testEgibFormGroup.value)
  let budget = this.testEgibFormGroup.value.budget;
  let service = this.testEgibFormGroup.value.service;
  let region = this.testEgibFormGroup.value.region;
  let naf = this.testEgibFormGroup.value.naf;
  console.log("isopen", this.test.result.isOpen)
  console.log("isCpn", this.test.result.isCpn)
  console.log("isLoading", this.test.result.isLoading)
  /**************************calcule cpn *******************/
  console.log("is open false")
      this.test.result.isOpen = true;
      this.test.result.isLoading = true;
      this.testService.cpnGrant(service,budget)
      .subscribe(response=>{
        console.log("cpnGrant",response)

        this.test.result.cpn.id = response.id;
        this.test.result.cpn.amount = response.grants;
        this.test.result.cpn.originalPrice = response.original_price;
        this.test.result.cpn.sellPrice = response.sell_price;
        this.test.result.isLoading = false;
      })
      console.log("step", this.test.active.step)

  switch (this.test.result.isOpen) {
    case true:
      console.log("is open true")
     
        console.log("is cpn true")
        this.test.result.isCpn = false;
        this.test.result.isLoading = true;
        this.testService.regionalGrant(region,budget,naf)
        .subscribe(response=>{
          console.log("regionalGrant",response)
             this.eleg=response.eligible
          if(response.eligible){
            this.test.result.regional.id = response.id;
            this.test.result.regional.eligible = response.eligible;
            this.test.result.regional.voucher = response.voucher;
            this.test.result.regional.amount = response.amount;
            this.test.result.regional.region = response.region;
            console.log("is eligible",this.test.active.step)
          } else {
            this.test.result.regional.eligible = response.eligible;
            this.test.result.regional.voucher = null;
            this.test.result.regional.amount = null;
            console.log("is not eligi",this.test.active.step)
          }
          this.test.result.isLoading = false;
        })
      /*  .catch(error=>{
          this.test.result.isLoading = false;
          console.log(error)
        });*/
     
        console.log("is cpn false")
        this.setContactForm(this.test.formData);
        this.test.result.isCpn = true;
        this.test.result.isOpen = false;
        this.nextStep();
      
      break;
    
  }
  console.log("test",this.test.result)

}
  /******************************************************chekform **************************************/
checkForm(step){
  console.log('step',step)
  let subStep = this.test.active.subStep;
  let subStepCat = this.test.active.subStepCat;
  switch (step) {
    case 0:
      this.nextStep();
      break;
    case 1:
      if(this.testEgibFormGroup.value.codeP==''){
        alert("champ est obligatoir");
        }else{
              this.nextStep();
        }
      break;
    case 2:
      if(this.testEgibFormGroup.value.activite==''){
             alert("champ est obligatoir");
      }else{
        this.nextStep();
      }
      break;
    case 3:
      if(this.testEgibFormGroup.value.status==''){
        alert("champ est obligatoir");
      }else{
        this.nextStep();
      }
      break;
    case 4:
      if(this.testEgibFormGroup.value.nomSoc==''){
        alert("champ est obligatoir");
      }else{
        this.nextStep();
      }
      break;
    case 5:
      if(this.testEgibFormGroup.value.turnover==''){
        alert("champ est obligatoir");
      }else{
        this.nextStep();
      }
      break;
    case 6:
      if(this.testEgibFormGroup.value.help==''){
        alert("champ est obligatoir");
      }else{
        this.nextStep();
      }
      break;
    case 7:
      console.log("laste",Math.abs(this.max-this.min))
      //  if(this.min==0  || (Math.abs(this.max-this.min)!=5000000&&Math.abs(this.max-this.min)!=500000&&Math.abs(this.max-this.min)!=100000&&Math.abs(this.max-this.min)!=50000&&Math.abs(this.max-this.min)!=45000) ){  
      //   alert("les deux valeur doit être très approcher") 
      //  }else{
        this.setLastTurnover([this.min])
        this.nextStep();
      //  }
      break;
    case 8:
     console.log('salair',this.testEgibFormGroup.value.personneSal)
        if(this.testEgibFormGroup.value.personneSal == "de 0 à 5 Personnes" || this.testEgibFormGroup.value.personneSal == "de 5 à 10 Personnes"){
          this.test.active.subStepCat = 1;
          this.test.active.subStep = 1;
          this.nextStep();
        } else {
          this.test.active.subStepCat = 2;
          this.test.active.subStep = 1;
          this.nextStep();
        }
     
      break;
    case 9:
      switch (subStepCat) {
        case 1:
          switch (subStep) {
            case 1:
          if(this.testEgibFormGroup.value.haveSite == "oui"){
                this.nextSubStep();
              } else {
                this.nextStep();
              };
              break;
            case 2:
             
              this.nextSubStep();
              break;
            case 3:
              this.nextSubStep();
              break;
            case 4:
              this.nextSubStep();
              break;
            case 5:
              this.nextStep();
              break;
          }
          break;
        case 2:
          switch (subStep) {
            case 1:    
              if(this.testEgibFormGroup.value.haveCrm == "oui"){
                this.nextSubStep();
              } else {
                this.test.active.subStepCat = 1;
              }; 
              break;
            case 2:
              this.nextSubStep();
              break;
            case 3:
               this.nextSubStep();
              break;
            case 4:
              this.nextSubStep();
              break;
            case 5:
                this.test.active.subStepCat = 1;
                this.test.active.subStep = 1;
             
              break;
          }
          break;
      }
      break;
    case 10:
     
        this.nextStep();
      
      break;
    case 11:
      if(this.testEgibFormGroup.value.budget==''){
        alert("champ est obligatoir");
      }else{
        this.nextStep();
      }
      break;
    case 12:
      this.getNafCompany(this.testEgibFormGroup.value.siret)
      if(this.testEgibFormGroup.value.siret==''){
        alert("champ est obligatoir");
      }
      else{
          this.nextStep();
        }
      
      break;
    case 13:
      if(this.testEgibFormGroup.value.adresse=='' && this.testEgibFormGroup.value.zipcode=='' && this.testEgibFormGroup.value.region=='' 
      &&this.testEgibFormGroup.value.city=='' &&this.testEgibFormGroup.value.country=='' ){
        alert("champ est obligatoir");
      }else{
        this.nextStep();
      }
      break;
    case 14:
      if(this.testEgibFormGroup.value.nom==''&&this.testEgibFormGroup.value.prenom==''&&this.testEgibFormGroup.value.email==''
      &&this.testEgibFormGroup.value.phone==''&&this.testEgibFormGroup.value.phoneEntrep==''){
        alert("champ est obligatoir");
      }else{
        
        this.isCpn();
      }
    break;
    case 15:
    this.nextStep();
    break;
    case 16:
    this.nextStep();
    break;
    case 17:
      this.generateZoomLink()
      break;
  }
}

/*****************************************test step **************************************/
test:any={
  active:{
    step:0,
    subStep:1,
    subStepCat:0,
    stepType:"form",
    popup:false,
    confirmed:false,
  },
  result:{
    isOpen:false,
    isLoading:false,
    isCpn:true,
    regional:{
      id:null,
      region:null,
      eligible:false,
      voucher:null,
      amount:null,
    },
    cpn:{
      id:null,
      amount:null,
      originalPrice:null,
      sellPrice:null,
    },
  },
  
  zoom:{
    generating:false,
    generated:false,
  },
  orientations:[],
  data:[
    {
      step:0,
      title:"Bienvenue"
    },
    {
      step: 1,
      title:"Renseigner le code postal",
    },
    {
      step:2,
      title:"Nom de l'entreprise"
    },
    {
      step:3,
      title:"Statut juridique"
    },
    {
      step:4,
      title:"Secteur d'activité",
      options:[],
    },
    {
      step:5,
      title:"Avez vous perdu du chiffre d'affaires pendant la crise sanitaire",
      labels:[
        "Baisse",
        "",
        "",
        "",
        "",
        "-50%",
        "",
        "",
        "",
        "",
        "Stable",
        "",
        "",
        "",
        "",
        "50%",
        "",
        "",
        "",
        "",
        "Hausse"
      ],
    },
    {
      step:6,
      title:"Avez vous déja obtenu des aides de l'état",
      options:[
        "Chéque numérique et aide numérique de votre région",
        "Crédit d'impôt",
        "Fond de solidarité",
        "Chaumage partiel",
        "Aucune aide",
      ],
    },
    {
      step:7,
      title:"Dernier chiffre d'affaires réalisé",
      labels:[
        "5k €",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "700k €",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "3.5m €",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "7.5m €",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "30m €",
      ],
      selectedRange:[0,1],
      range:[
        {value:5000,legend:"5k €"},
        {value:50000},
        {value:100000},
        {value:200000},
        {value:300000},
        {value:400000},
        {value:500000},
        {value:600000},
        {value:700000,legend:"700k €"},
        {value:800000},
        {value:900000},
        {value:1000000},
        {value:1500000},
        {value:2000000},
        {value:2500000},
        {value:3000000},
        {value:3500000,legend:"3.5m €"},
        {value:4000000},
        {value:4500000},
        {value:5000000},
        {value:5500000},
        {value:6000000},
        {value:6500000},
        {value:7000000},
        {value:7500000,legend:"7.5m €"},
        {value:8000000},
        {value:8500000},
        {value:9000000},
        {value:9500000},
        {value:10000000},
        {value:15000000},
        {value:20000000},
        {value:25000000},
        {value:30000000, legend:"30m €"},
      ]
    },
    {
      step:8,
      title:"Nombre de salariés",
      options:[
        "de 0 à 5 Personnes",
        "de 5 à 10 Personnes",
        "de 10 à 20 Personnes",
        "de 20 à 30 Personnes",
        "de 30 à 40 Personnes",
        "de 40 à 50 Personnes",
        "plus de 50 Personnes",
      ],
    },
    {
      step:9,
      title:"Type de site",
      website:[
        {
          subStep:0,
          title:""
        },
        {
          subStep:1,
          title:"Avez vous un site internet pour votre entreprise"
        },
        {
          subStep:2,
          title:"Type de site"
        },
        {
          subStep:3,
          title:"Lien de site"
        },
        {
          subStep:4,
          title:"Date de développement",
          options:[
                "Avant 2000",
                "Année 2000-2003",
                "Année 2003-2006",
                "Année 2006-2009",
                "Année 2009-2012",
                "Année 2012-2015",
                "Année 2015-2018",
                "Année 2018-2021",
                "Année 2021-2023",
          ]
        },
        {
          subStep:5,
          title:"L'agence qui a développé votre site"
        }
      ],
      crm:[
        {
          subStep:0,
          title:""
        },
        {
          subStep:1,
          title:"Avez vous un crm pour votre entreprise"
        },
        {
          subStep:2,
          title:"Quel type de CRM vous utilisez",
          options:[
            "Zoho",
            "SAP",
            "Sage",
            "Oracle",
            "NetSuite",
            "Cegid",
            "Microsoft Dynamics",
            "Divalto",
            "WaveSoft",
            "Odoo",
            "Archipelia",
            "Axonaut",

          ]
        },
        {
          subStep:3,
          title:"Le crm a été développé"
        },
        {
          subStep:4,
          title:"Quel type de ERP vous utilisez",
          options:[
            "Zoho",
            "SAP",
            "Sage",
            "Oracle",
            "NetSuite",
            "Cegid",
            "Microsoft Dynamics",
            "Divalto",
            "WaveSoft",
            "Odoo",
            "Archipelia",
            "Axonaut",

          ]
        },
        {
          subStep:5,
          title:"Date de développement",
          options:[
            "Avant 2000",
            "Année 2000-2003",
            "Année 2003-2006",
            "Année 2006-2009",
            "Année 2009-2012",
            "Année 2012-2015",
            "Année 2015-2018",
            "Année 2018-2021",
            "Année 2021-2023",
      ]
        }
      ]
    },
    {
      step:10,
      title:"Quel projet est à subventionner pour votre transition numérique",
      tabServices:null,
      loading:false,
      services:["Services éligible", "Services suplémentaire"],
      tabCategories:null,
      categories:["Tous", "Graphique", "Développement","Montage","Marketing"],
      options:[],
    },
    {
      step:11,
      title:"Budget d'investissement",
      budget:5,
      min:400,
      target:500,
      max:100000,
    },
    {
      step:12,
      title:"Numéros d'identification",
      loading:false,
    },
    {
      step:13,
      title:"Adresse",
    },
    {
      step:14,
      title:"Fiche de renseignement",
      options:[
        "Gérant",
        "Directeur",
        "Associé",
        "Autre"
      ],
    },
    {
      step:15,
      title:"Vos disponibilités",
    },
    {
      step:16,
      title:"Type de client",
      items: ['☹️', '🙁', '😐', '🙂', '😊', '😍'],
      labels:[
        "agressif",
        "indécis",
        "anxieux",
        "économe",
        "compréhensif",
        "roi",
      ]
    },
    {
      step:17,
      title:"Merci pour votre temps",
    },
  ],
}


min:number=0
max:number=0
maxValue: number = 80;
minValue: number = this.min;

options: Options = {
  showTicks: true,
  draggableRangeOnly: false,
  stepsArray:this.test.data[7].range,
  translate: (value: number, label: LabelType): string => {
    console.log('stepprec',value)
    return  (value/1000 > 900)?((value/1000)/1000).toFixed(1) +"m €":(value/1000).toFixed(0) +"k €";
  }
};
logText: string = '';

onUserChangeStart(changeContext: ChangeContext): void {

  console.log('start',changeContext)
  this.min=changeContext.highValue
  this.max=changeContext.value
}

onUserChange(changeContext: ChangeContext): void {
  console.log('use',changeContext)
  this.min=changeContext.highValue
  this.max=changeContext.value
}

onUserChangeEnd(changeContext: ChangeContext): void {
  this.min=changeContext.highValue
  this.max=changeContext.value
}

getChangeContextString(changeContext: ChangeContext): string {
  return /*`{pointerType: ${changeContext.pointerType === PointerType.Min ? 'Min' : 'Max'}, ` +
         `value: ${changeContext.value}, ` +
         `highValue: ${changeContext.highValue}}`;*/
}

range:any[]=[]
/*

maxValue: number = this.test.data[7].range.length-1;
options: Options = {
  
  showTicks: true,
  stepsArray:this.test.data[7].range,
  
  translate: (value: number, label: LabelType): string => {
    console.log('stepprec',value)
    return  (value/1000 > 900)?((value/1000)/1000).toFixed(1) +"m €":(value/1000).toFixed(0) +"k €";
   

  }
};
*/
}
