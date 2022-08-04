import { Component } from '@angular/core';
import { ImageSlider, TopMenu } from './shared/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-lesson';

  topMenus: TopMenu[] = [
    { title: '精选', link: '' },
    { title: '男装', link: '' },
    { title: '女装', link: '' },
    { title: '母婴', link: '' },
    { title: '百货', link: '' },
    { title: '运动', link: '' },
    { title: '家纺', link: '' },
    { title: '手表', link: '' },
    { title: '电器', link: '' },
    { title: '水果', link: '' },
    { title: '美妆', link: '' },
    { title: '内衣', link: '' },
    { title: '外卖', link: '' },
    { title: '火锅', link: '' }
  ]

  imageSliders: ImageSlider[] = [
    {
      imgUrl: 'assets/a01.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'assets/a02.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'assets/a03.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'assets/a04.jpg',
      link: '',
      caption: ''
    },
  ]

  username = '';

  handleTabSelected(tabMenu: TopMenu) {
    console.log(tabMenu)
  }
}
