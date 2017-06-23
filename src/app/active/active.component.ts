import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '../core/translate/translate.service';
import { GravityPipe } from '.././shared/gravity.pipe';
import { NavService } from '../core/navigate/nav.service';
// import { Ng2TableModule } from 'ng2-table/ng2-table';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  
  //@ViewChild('expscreen') expscreen : ElementRef;
  private _complete: boolean;
  
  exitable: boolean = false;
  
  @Input() oscillations: number = 3;
  @Input() initial_distance: number = 1.5;

  private tick_speed = 1337;
  public rows: Array<any> = [];
  private startTime: Date;

  color = 'primary';
  mode = 'determinate';
  main_progress_value = 0;
  main_progress_buffer_value = 0;
  
  private elements_arr = {
    'active_title':'',
    'active_observe_machine':'',
    'active_finished_title':'',
    'active_stop_button':'',
    'active_next_button':'',
    'table_reading':'',
    'table_value':'',
    'table_time':'',
    'active_actions':'',
    'active_actions_warning':'',
    'active_actions_sugestion':'',
  };

  constructor(
    private translateService : TranslateService, 
    /* use the navService to mark exitable false to prevent users from abruptly stoping the machine; 
       use the cancel button for that */
    private navService: NavService) { 
      this._complete = false;
      this.navService.exitable = false;
  }
  
  progress(){
    let fakeProgressInterval = setInterval(()=>{
      if(this.main_progress_value >= 100){
        clearInterval(fakeProgressInterval);
      }else{
        this.main_progress_value+=10;
      }
    }, 100);
  }
  
  ngOnDestroy(){
    this.navService.exitable = true;
  }

  ngOnInit(){
    this.startTime = new Date();
    this.navService.nav_title = this.elements_arr['active_title'];
    this.translateService.langSubject.subscribe(lang => {
      this.translateService.refreshTranslations(this.elements_arr);
      if ( !this._complete ){
        this.navService.nav_title = this.elements_arr['active_title'];
      }else{
        this.navService.nav_title = this.elements_arr['active_finished_title'];
      }
    });

    this.progress();
    this.main_progress_value = 0;
    
    let fakeWorkInterval = setInterval(() => {
      
      //if(this.rows.length >= 9){
      //  this.expscreen.nativeElement.scrollTop = this.expscreen.nativeElement.scrollHeight;
      //}

      this.progress();
      this.main_progress_value = 1;

      let i: number = this.rows.length;
      let end: Date = new Date();
      let time: number = end.getTime() - this.startTime.getTime();
      this.startTime = end;//set for next tick
      this.rows[i] = {'reading': Math.random() * 0.0001 + 9.8, 'time': time};
      
      if(this.rows.length >= this.oscillations){
        clearInterval(fakeWorkInterval);
        
        this._complete = true;
        this.navService.nav_title = this.elements_arr['active_finished_title'];
        this.navService.exitable = true;
        this.main_progress_value = 100;
      }
      
    }, this.tick_speed);

  }

}
