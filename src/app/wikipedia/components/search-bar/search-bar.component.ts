import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wiki-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  title = 'Wikipedia Search'
  constructor() { }

  ngOnInit(): void {
  }

}
