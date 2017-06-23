import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
//import { AppState } from '../models/appState';
import { TranslateService } from '../core/translate/translate.service'
import { NavService } from '../core/navigate/nav.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, AfterViewInit {

  private elements_arr = {
    'welcome_title':'',
    'welcome_interact_machine_button':'',
    'welcome_go_data_view_button':'',
    'welcome_interact_animation_button':''
  };
  
  @ViewChild("myCanvas") myCanvas;
  cvs: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(private translateService : TranslateService, private navService : NavService) { 
    navService.back_visible = false;
    navService.nav_title = 'welcome_title';
  }

  ngOnDestroy(){
    this.navService.back_visible = true;
  }

  ngOnInit() {
    this.translateService.langSubject.subscribe(lang => {
      this.translateService.refreshTranslations(this.elements_arr);
    });
  }

  ngAfterViewInit() {
    this.cvs = this.myCanvas.nativeElement;
    this.ctx = this.cvs.getContext("2d");
    this.draw();
  }
  
  draw() : void {
    requestAnimationFrame(()=> {
      this.draw();
    });
		var cwidth = this.cvs.width;
		var cheight = this.cvs.height;
		var randomX = Math.random() * cwidth;
		var randomY = Math.random()*cheight;
		var randomB = Math.round(Math.random() * 255);
		this.ctx.beginPath();
		this.ctx.strokeStyle = "rgb(0,0,"+randomB+")";
		this.ctx.lineWidth = 0.1;
		this.ctx.moveTo(cwidth/2,cheight/2);
		this.ctx.lineTo(randomX,randomY);
		this.ctx.stroke();
	}

}
