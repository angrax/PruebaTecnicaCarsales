import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../services";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() Characters: Character[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
