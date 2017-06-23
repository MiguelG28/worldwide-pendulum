import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service';
import { TranslatePipe } from './translate/translate.pipe';


@NgModule({
  imports: [
    CommonModule // we use ngFor
  ],
  exports: [],
  declarations: [TranslatePipe],
  providers: [LoggerService]
})
export class CoreModule { }