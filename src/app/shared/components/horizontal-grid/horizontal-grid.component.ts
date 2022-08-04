import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  // username = '';

  // 自定义双向绑定
  private _username = '';

  constructor() { }

  ngOnInit() {
  }

  @Output() usernameChange = new EventEmitter();
  @Input()
  public get username(): string {
    return this._username;
  }

  public set username(v: string) {
    this._username = v;
    this.usernameChange.emit(v);
  }

}
