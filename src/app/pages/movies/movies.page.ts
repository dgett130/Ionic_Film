import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {InfiniteScrollCustomEvent, LoadingController} from "@ionic/angular";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  movies = [];
  currentPage = 1;
  imageBaseUrl = environment.images;

  constructor(private movieSevice: MovieService,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies(event?) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
    this.movieSevice.getTopRatedMovies(this.currentPage).subscribe(movies => {
      console.log(movies);
      loading.dismiss();
      this.movies.push(...movies.results);

      event?.target.complete();
      if (event) {
        event.target.disabled = movies.total_pages === this.currentPage;
      }
    });
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }

}
