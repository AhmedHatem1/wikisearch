import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wiki-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {
  pages = [];

  constructor() { }

  ngOnInit(): void {
  }

  getPageList(pages) {
    this.pages = pages;
  }
}
