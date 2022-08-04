import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

export interface TopMenu {
  title: string;
  link: string;
}

@Component({
  selector: 'app-scollable-tab',
  templateUrl: './scollable-tab.component.html',
  styleUrls: ['./scollable-tab.component.css']
})
export class ScollableTabComponent implements OnInit {

  selectedIndex = -1;

  @Input() menus: TopMenu[] = [];
  @Output() tabSelected = new EventEmitter();

  constructor() {
    console.log('组件构造调用')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('组件输入属性改变', changes)
  }

  ngOnInit(): void {
    console.log('组件初始化')
  }

  // ngAfterContentInit(): void {
  //   console.log('组件内容初始化')
  // }

  // ngAfterContentChecked(): void {
  //   console.log('组件内容脏值检测')
  // }

  // ngAfterViewInit(): void {
  //   console.log('组件视图初始化完成')
  // }

  // ngAfterViewChecked(): void {
  //   console.log('组件视图脏值检测')
  // }

  // ngOnDestroy(): void {
  //   console.log('组件销毁')
  // }

  handleSelection(i: number) {
    this.selectedIndex = i;
    this.tabSelected.emit(this.menus[this.selectedIndex])
  }

  trackByMenus(index: number, menu: TopMenu): string {
    return menu.title
  }

}
