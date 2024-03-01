import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caption-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './caption-item.component.html',
  styleUrl: './caption-item.component.css'
})
export class CaptionItemComponent {
  @Input() title: string = "";
  @Input() active: boolean = false;
}
