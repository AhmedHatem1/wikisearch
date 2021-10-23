import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wiki-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  @Input() loadingWidth = 40;
  @Input() loadingHeight = 40;
  constructor() { }

  ngOnInit(): void {
  }

}
