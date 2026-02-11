import { Component, computed, inject, input, OnInit, output } from '@angular/core';
import { IconName } from '../../interface/icons';
import { ICON_NAME_MAP } from './icon-name-map';
import { ScreenSizeS } from '../../services/screen-size-s';



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

  screenSizeS = inject(ScreenSizeS)


  iconFullName = computed(() => {
    const name = this.iconName();
    return ICON_NAME_MAP[name] || name;
  });



  getDynamicClasses() {

    if (this.screenSizeS.isMobile()) {
      return {
        'w-14': this.isViewName(),
        'h-14': this.isViewName(),
      };
    }else{
      return {
        'w-20': this.isViewName(),
        'h-20': this.isViewName(),
      };
    }


  }
}
