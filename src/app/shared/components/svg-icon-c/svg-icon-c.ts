import { Component, computed, input, OnInit, output } from '@angular/core';
import { IconName } from '../../interface/icons';
import { ICON_NAME_MAP } from './icon-name-map';



@Component({
  selector: 'app-svg-icon-c',
  imports: [],
  templateUrl: './svg-icon-c.html',
  styleUrl: './svg-icon-c.css',
})
export class SvgIconC {
  iconName = input.required<IconName>();
  isViewName = input<boolean>(false);
  size = input<number>(24);


  iconFullName = computed(() => {
    const name = this.iconName();
    return ICON_NAME_MAP[name] || name;
  });




}
