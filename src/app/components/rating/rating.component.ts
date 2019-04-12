import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../../service/questionservice/question.service'

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  constructor(public question: QuestionService) { }
  rate = 4;
  count = 0;
  @Input() array;
  @Input() rates;
  ngOnInit() {
    this.rate=this.rates
  }

  rating(id,rate) {
    if (this.count != 2) {
      this.count++;
      return
    }
    
      this.question.rate(id, { "rate": rate }).subscribe(data => {
        this.rate=rate

      })
    
  
  }

}
