import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClassChanger]'
})
export class ClassChangerDirective {

  constructor(private _ren: Renderer2, private _el: ElementRef) { }

  @HostListener('click') onClick() {
    this._ren.addClass(this._el.nativeElement, 'animate');
    setTimeout(() => {
      this._ren.removeClass(this._el.nativeElement, 'animate');
    }, 10000)
  }

}