import { WikipediaService } from './../../../services/wikipedia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { catchError, debounceTime, delay, distinctUntilChanged, map, mergeMap, tap } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
@Component({
  selector: 'wiki-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() onSearchComplete = new EventEmitter()

  title = 'Wikipedia Search'
  keyUp = new Subject<KeyboardEvent>();
  loading: boolean;
  error: boolean;

  constructor(private wikipediaService: WikipediaService) { }

  ngOnInit(): void {
    this.searchOnTyping()
  }

  searchOnTyping() {
    const source = this.keyUp.pipe(
      map((event: any) => event.target.value),
      debounceTime(1000),
      distinctUntilChanged(),
      tap((term) => {
        this.loading = true;
        this.error = false;
        if (term.trim() == '') {
          this.loading = false;
        }
      }),
      mergeMap(search => {
        return this.wikipediaService.search(search).pipe(delay(500), catchError((error) => {
          this.loading = false;
          this.error = true;
          if (error)
            this.onSearchComplete.emit(this.error);
          return of({});
        }))
      }
      ),
    ).subscribe((response: any) => {
      this.loading = false;
      this.error = false
      if (response.query)
        this.onSearchComplete.emit(response.query.search);
      else {
        this.onSearchComplete.emit([]);
      }
    });
  }

}
