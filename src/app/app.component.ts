import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CronOptions } from "cron-editor/cron-editor";
import { FormGroup, FormControl } from '@angular/forms';
import { CronEditorComponent } from "cron-editor";
import { Store } from '@ngrx/store';
import { CounterAction, initialState } from 'src/redux/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public cronExpression = '0 0 0 1/1 * ? *';
  title = 'dad';
  tracks = [
    {
      "title": "Todo",
      "id": "todo",
      "tasks": [
        {
          "id": "first-task",
          "title": "First Task",
          "description": "This is my first task"
        }
      ]
    },
    {
      "title": "In Progress",
      "id": "inprogress",
      "tasks": [
        {
          "id": "seconf-task",
          "title": "Second Task",
          "description": "This is my first task"
        }
      ]
    },
    {
      "title": "D-Done",
      "id": "ddone",
      "tasks": [
        {
          "id": "third-task",
          "title": "Third Task",
          "description": "This is my first task"
        }
      ]
    },
    {
      "title": "QA Pass",
      "id": "qapass",
      "tasks": [
        {
          "id": "fourth-task",
          "title": "Fourth Task",
          "description": "This is my first task"
        },
        {
          "id": "fifth-task",
          "title": "Fifth Task",
          "description": "This shouldn't be here task"
        },
      ]
    }
  ]

  public cronOptions: CronOptions = {
    formInputClass: 'form-control cron-editor-input',
    formSelectClass: 'form-control cron-editor-select',
    formRadioClass: 'cron-editor-radio',
    formCheckboxClass: 'cron-editor-checkbox',
    
    defaultTime: "00:00:00",

    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: true,
    // hideSpecificWeekDayTab : false,
    // hideSpecificMonthWeekTab : false,

    use24HourTime: true,
    hideSeconds: false,

    removeSeconds: false,
    removeYears: false,
    // cronFlavor: "quartz" //standard or quartz
 };

 @ViewChild("cronEditorDemo") cronEditorDemo: CronEditorComponent;
  wee:FormGroup;
  get trackIds(): string[] {
    return this.tracks.map(track => track.id);
  } //This returns all ids to [cdkDropListConnectedTo]

  constructor( private store :Store<any>){
    this.wee = new FormGroup({
      cronEx: new FormControl(this.cronExpression)
    })
    // this.wee.get('cronEx')
    this.store.dispatch( new CounterAction.Increment() )

    this.store.select('initialState').subscribe(d=>{
      console.log("hahss",d)
    })
  }

  onTaskDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onTrackDrop(event: CdkDragDrop<any[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  inOut(d){
    this.cronExpression = d;
    console.log(this.cronExpression, "oh");
    this.cronEditorDemo.options = this.cronOptions;
    this.cronEditorDemo.regenerateCron()
  }

  goni(e){
    console.log("hoooo",e)
  }
}
