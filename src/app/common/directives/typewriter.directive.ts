import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTypewriter]'
})
export class TypewriterDirective implements OnInit {

  @Input('appTypewriter') typewriterTexts: string[] = [];
  @Input() typewriterPeriod: number = 0;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const typewriter = new Typewriter(this.elementRef.nativeElement, this.typewriterTexts, this.typewriterPeriod);
    typewriter.init();
  }
}

class Typewriter {
  private readonly element: HTMLElement;
  private readonly texts: string[];
  private readonly period: number;
  private loopNum = 0;
  private txt = '';
  private isDeleting = false;

  constructor(element: HTMLElement, texts: string[], period: number) {
    this.element = element;
    this.texts = texts;
    this.period = period || 2000;
  }

  init(): void {
    this.tick();
  }

  tick(): void {
    const i = this.loopNum % this.texts.length;
    const fullTxt = this.texts[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // this.element.innerHTML = '<div class="wrap">' + this.txt + '</div>';
    const wrapElement = this.element.querySelector('.wrap') as HTMLElement | null;
    if (wrapElement) {
      wrapElement.textContent = this.txt;
    }

    let delta = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.txt === fullTxt) {
      this.isDeleting = true;
      delta = this.period;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(() => this.tick(), delta);
  }
}
