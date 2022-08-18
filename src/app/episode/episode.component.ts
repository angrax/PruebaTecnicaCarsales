import {Component, Input, OnInit} from '@angular/core';
import {Character, CharacterService, EpisodeResponse} from "../services";
@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  @Input() Episodes: EpisodeResponse[] = []
  @Input() SelectedEpisode: EpisodeResponse = {name: "Select Season", id: 0, characters: []}
  @Input() Characters: Character[] = []

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
  }

  onEpisodeChange(episode: string) {
    console.log("onEpisodeChange")
    const episodeSelected = this.Episodes.find(x => x.id === parseInt(episode))
    this.SelectedEpisode = episodeSelected ? episodeSelected : {}
    this.characterService.apiCharacterGetByIdsGet({ids: episodeSelected?.characters ?? []}).subscribe(characters => {
      this.Characters = characters
    })
  }

}
