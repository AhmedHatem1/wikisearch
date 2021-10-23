import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PageListComponent } from './components/page-list/page-list.component';
import { SearchContainerComponent } from './pages/search-container/search-container.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [SearchBarComponent, PageListComponent, SearchContainerComponent],
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
  ],
  exports: [SearchContainerComponent]
})
export class WikipediaModule { }
