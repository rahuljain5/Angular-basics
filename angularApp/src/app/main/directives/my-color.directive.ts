import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appMyColor]"
})
export class MyColorDirective {
  constructor(private element: ElementRef) {
    console.log(element);
    this.element.nativeElement.style.backgroundColor = "blue";
  }

  private changeColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

  @HostListener("mouseover")
  onMouseEnter() {
    console.log("Moving In");
    this.changeColor("grey");
  }

  @HostListener("mouseout")
  onMouseLeave() {
    console.log("Moving Out");
    this.changeColor("blue");
  }
}
