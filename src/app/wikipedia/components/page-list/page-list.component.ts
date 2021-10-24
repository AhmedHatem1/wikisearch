import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'wiki-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  @Input() pages;
  error: boolean;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (typeof changes.pages.currentValue == 'boolean') {
      this.error = true;
    }
  }

  ngOnInit(): void {
  }

}
