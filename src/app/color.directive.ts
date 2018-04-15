import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  constructor(private elem:ElementRef){}
  @HostListener('click')onClicks(){
    this.changeColor('black')
  }
  private changeColor(action:any){
    this.elem.nativeElement.style.backgroundColor=action;
}
}

// private changeColor(action:any){
  //   this.elem.nativeElement.style.backgroundColor=action;
  //  }