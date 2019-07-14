import {Component, OnInit} from '@angular/core';
import {Option} from '../entity/interfaces';
import {OptionService} from '../services/option.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  options: Option[];

  constructor(private optionService: OptionService) {}

  ngOnInit() {
    this.options = this.optionService.getOptions();
  }

}
