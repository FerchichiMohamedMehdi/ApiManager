import { JsonPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { async } from '@angular/core/testing';
import * as Highcharts from 'highcharts';
declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);
import Histogram from 'highcharts/modules/histogram-bellcurve';
import { delay, Observable } from 'rxjs';
import { TagDTO } from 'src/app/model/DTO/TagDTO';
import { Tag } from 'src/app/model/Entities/Tag';
import { TagsService } from 'src/app/services/tags-service.service';
import { ListCategoriesComponent } from '../list-categories/list-categories.component';
Histogram(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);
import * as newdata from './data';

const Wordcloud = require('highcharts/modules/wordcloud');
Wordcloud(Highcharts);
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  public activity: any;
  public xData: any;
  public label: any;
  options: any;
  weight: number;
  name: string;
  occurence: number;
  text: any;
  listTags: any;



  testTags() {
    this.tagService.getTags().subscribe((tags: any) => {
      this.listTags = tags;
      for (let t of this.listTags) {
        for (var i = 0; i < t.occurence; i++)
          this.text += " " + t.nomTag;
      }
      localStorage.setItem('tags', this.text);


    });

  }
  ngOnInit() {

    this.testTags();
    Highcharts.chart('container', this.options);
  }

  constructor(private tagService: TagsService) {

    var obj = { name: '', weight: 0 }
    this.text = localStorage.getItem("tags");
    var lines = this.text.split(/[,\. ]+/g),

      data = Highcharts.reduce(lines, function (arr: { name: string; weight: number; }[], word: any) {

        var obj = Highcharts.find(arr, function (obj: { name: any; }) {
          return obj.name === word;
        });
        if (obj) {

          obj.weight += 1;
        } else {
          obj = {
            name: word,
            weight: 1
          };
          arr.push(obj);
        }
        return arr;
      }, []);

    this.options = {
      accessibility: {
        screenReaderSection: {
          beforeChartFormat: '<h5>{chartTitle}</h5>'
        }
      },
      series: [{
        type: 'wordcloud',
        data: data,
        name: 'Occurrences'
      }],
      title: {
        text: ''
      }
    };
  }


}
