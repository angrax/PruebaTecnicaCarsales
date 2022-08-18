import {Component, Input, OnInit} from '@angular/core';
import * as _ from "lodash";
import {Character, CharacterService, EpisodeResponse, EpisodeService} from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PruebaTecnicaCarsales';
  @Input() Seasons: { season: string, episode: EpisodeResponse[] }[] = []
  @Input() Episodes: EpisodeResponse[] = []
  constructor(private episodeService: EpisodeService) { }


  ngOnInit(): void {
    this.episodeService.apiEpisodeGetAllGet().subscribe(episodeResponse => {
      this.Seasons = _.chain(episodeResponse)
        .groupBy("season")
        .map((value: EpisodeResponse[], key: string) => ({ season: key, episode: value }))
        .value()
    })
  }

  onSeasonChange(season: string) {
   const seasonSelected = this.Seasons.find(x => x.season === season)
    this.Episodes = seasonSelected ? seasonSelected.episode : []
  }


}
