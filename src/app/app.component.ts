import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzMenuItemComponent } from 'ng-zorro-antd/menu';


@Component({
  selector: 'app-root',
  imports: [NgTemplateOutlet,RouterOutlet, NzIconModule, NzLayoutModule,
    NzMenuModule, NzSpaceModule,NzMenuItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isCollapsed = false;

  menus = [
    {
      level: 1,
      label: '系统管理',
      icon: 'icons:system',
      open: true,
      selected: false,
      children: [
        {
          level: 2,
          label: '用户管理',
          icon: 'icons:manage_accounts',
          open: false,
          selected: false,
          children: [
            {
              level: 3,
              icon: 'icons:manage_accounts',
              label: 'Option 1',
              selected: false,
            },
            {
              level: 3,
              label: 'Option 2',
              icon: 'icons:manage_accounts',
              selected: false,
            }
          ]
        },
        {
          level: 2,
          label: 'Group 2',
          icon: 'icons:manage_accounts',
          selected: true,
        },
        {
          level: 2,
          label: 'Group 3',
          icon: 'icons:systemapp',
          selected: false,
        }
      ]
    },
    {
      level: 1,
      label: 'Team Group',
      icon: 'team',
      open: false,
      selected: false,
      children: [
        {
          level: 2,
          label: 'User 1',
          icon: 'user',
          selected: false,
        },
        {
          level: 2,
          label: 'User 2',
          icon: 'user',
          selected: false,
        }
      ]
    }
  ];
}
