import { Directive, ElementRef, input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective implements OnChanges {

  bgColor = input<string>('yellow');


  constructor(private elementRef: ElementRef) { 

    this.elementRef.nativeElement.style.fontWeight = 500;
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes ['bgColor']){
      this.elementRef.nativeElement.style.backgroundColor = changes['bgColor'].currentValue;
    }
  }
        

}
