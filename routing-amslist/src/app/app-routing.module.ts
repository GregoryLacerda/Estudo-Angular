import { PageNotFoundComponent } from './../../../angular-router-sample/src/app/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { MangaComponent } from './manga/manga.component';
import { SerieComponent } from './serie/serie.component';

const routes: Routes = [
  { path: 'anime', component: AnimeComponent },
  { path: 'manga', component: MangaComponent },
  { path: 'serie', component: SerieComponent },
  { path: 'home', component: HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
