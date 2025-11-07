import { Component, input } from '@angular/core';
import { CardStudy } from './card-study-interface';
import { HighlightPipe } from '../../../shared/pipes/highlight-pipe';

@Component({
  selector: 'app-card-study-c',
  imports: [HighlightPipe],
  templateUrl: './card-study-c.html',
  styleUrl: './card-study-c.css',
})
export class CardStudyC {

  studyData = input.required<CardStudy>()

}
