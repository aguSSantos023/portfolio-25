import { Component, input, signal } from '@angular/core';
import { IconName } from '../../interface/icons';






@Component({
  selector: 'app-svg-icon-c',
  imports: [],
  templateUrl: './svg-icon-c.html',
  styleUrl: './svg-icon-c.css',
})
export class SvgIconC {
  iconName = input.required<IconName>()
  size = input<number>(24)



}
