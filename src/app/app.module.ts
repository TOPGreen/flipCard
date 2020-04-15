import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CardComponent} from './components/card/card.component';
import {CardListComponent} from './components/card-list/card-list.component';
import {CardAddComponent} from './components/card-add/card-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MainComponent} from './components/main/main.component';
import {ICardsApiServiceToken} from './interfaces/ICardsApi';
import {CardsApiMockService} from './services/cards-api-mock.service';
import {HttpClientModule} from '@angular/common/http';
import {CardsApiService} from './services/cards-api.service';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    CardAddComponent,
    MainComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [,
    // {provide: ICardsApiServiceToken, useClass: CardsApiMockService},
    {provide: ICardsApiServiceToken, useClass: CardsApiService},
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
