import { Component, inject, input, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { SvgIconC } from '../../../../shared/components/svg-icon-c/svg-icon-c';
import { StackCard } from './stack-card-interface';
import { ScreenSizeS } from '../../../../shared/services/screen-size-s';

@Component({
  selector: 'app-stack-card-c',
  imports: [TitleCasePipe, SvgIconC],
  templateUrl: './stack-card-c.html',
  styleUrl: './stack-card-c.css',
})
export class StackCardC {

  dataCard = input.required<StackCard>()

  iconFullName = signal<string>('')

  screenSizeS = inject(ScreenSizeS)

  handleIconNameChange(fullName: string): void {
    this.iconFullName.set(fullName)

  }



}
