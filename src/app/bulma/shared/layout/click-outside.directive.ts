import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[buClickOutside]'
})
export class ClickOutsideDirective {
  @Output() onClockOutside = new EventEmitter;

  constructor(private elem: ElementRef) {
  }

  @HostListener('document:click', ['$event', '$event.target']) clickOutSide(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }

    const clickedInside = this.elem.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.onClockOutside.emit(event);
    }
  }

}
