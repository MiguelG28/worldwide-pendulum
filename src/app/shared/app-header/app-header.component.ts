import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  private title : string = '';

  @Input()
  set setTitle(t : string){
    this.title = (t && t.trim() || '<no title set>');
  }

  constructor() { 
    
  }

  ngOnInit() {

  }

}
