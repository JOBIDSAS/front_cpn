import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCalendar, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { AgendaService } from 'src/app/services/cpn/agenda.service';
import Swal from 'sweetalert2';
import * as _moment from 'moment';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { formatDate } from '@angular/common';
// tslint:disable-next-line:no-duplicate-imports

const moment =  _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-calandar',
  templateUrl: './calandar.component.html',
  styleUrls: ['./calandar.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class CalandarComponent implements OnInit {
  eventForm : FormGroup;

  currentDate:any
  selected: Date | null;
  date = new FormControl(moment());
  
  currentView: 'multi-year' | 'year' | 'month' = 'multi-year';

  constructor(private fb: FormBuilder,private agendaService: AgendaService,private cdr: ChangeDetectorRef) {
    this.eventForm = this.fb.group({
      title: ['', [Validators.required]],
      date: ['' ,[Validators.required]],
      phone: ['', [Validators.required]],
      });
   }

  ngOnInit(): void {
    this.currentDate =  moment().lang("fr").format('dddd')   
    console.log('event',this.selected)
  }


  RegisterEvent(){
    const formatDateEvent = 'M/d/yy';
    const formatTimeEvent = 'h:mm a';
    const locale = 'en-US';
    const date = formatDate(this.eventForm.value.date, formatDateEvent, locale);
    const time = formatDate(this.eventForm.value.date, formatTimeEvent, locale);
   this.agendaService.addEvent({
      'title':this.eventForm.value.title,'phone':this.eventForm.value.phone,
      'date':date,'time':time,
    }).subscribe(res=>{
      console.log('res',res)
        Swal.fire({
          icon: 'success',
          title: 'ajouter reussie',
          showConfirmButton: false,
          timer: 1000
        })
        this.eventForm.reset();
        
      
    }, error => {
      Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: 'error 500 !',
     })})
  }

}
