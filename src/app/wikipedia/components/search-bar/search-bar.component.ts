import { WikipediaService } from './../../../services/wikipedia.service';
import { Component, OnInit } from '@angular/core';
import { debounceTime, delay, distinctUntilChanged, map, mergeMap, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'wiki-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  title = 'Wikipedia Search'
  keyUp = new Subject<KeyboardEvent>();
  loading: boolean;
  constructor(private wikipediaService: WikipediaService) { }

  ngOnInit(): void {
    this.searchOnTyping()
  }

  searchOnTyping() {
    this.keyUp.pipe(
      map((event: any) => event.target.value),
      debounceTime(1000),
      distinctUntilChanged(),
      tap(() => { this.loading = true }),
      mergeMap(search => {
        return this.wikipediaService.search(search).pipe(delay(500))
      }),
    ).subscribe(() => {
      this.loading = false;
    });
  }

}
