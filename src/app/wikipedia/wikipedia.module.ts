import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PageListComponent } from './components/page-list/page-list.component';
import { SearchContainerComponent } from './pages/search-container/search-container.component';



@NgModule({
  declarations: [SearchBarComponent, PageListComponent, SearchContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [SearchContainerComponent]
})
export class WikipediaModule { }
