import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  constructor() { }

  counts: number = 0;

  ngOnInit() {
    const obs$ = interval(1000).pipe(take(101));
    obs$.subscribe((count)=>{
      this.counts = count;
    })
  }
}
