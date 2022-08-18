import {Component, Input, OnInit} from '@angular/core';
import {EpisodeResponse} from "../services";

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {
  @Input() Name: string = ""
  @Input() Episodes: EpisodeResponse[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
