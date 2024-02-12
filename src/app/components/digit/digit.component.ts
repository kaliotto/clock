import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Digit } from '../../digit';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-digit',
  standalone: true,
  imports: [NgClass],
  templateUrl: './digit.component.html',
  styleUrl: './digit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigitComponent {
  @Input() digit?: number;
  value?: Digit = new Digit();

  constructor() {}
}
