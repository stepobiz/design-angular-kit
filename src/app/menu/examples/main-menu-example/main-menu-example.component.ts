import { Component } from '@angular/core';
import { ItMenuConfig } from 'projects/design-angular-kit/src/lib/components/navigation/menu/menu.interface';

@Component({
  selector: 'it-main-menu-example',
  templateUrl: './main-menu-example.component.html'
})
export class MainMenuExampleComponent {
  
  mainNavigationExample: ItMenuConfig = {
    type: 'navbar',
    label: 'it.navigation.main-navigation',
    items: [
      {
        type: 'link',
        label: 'Info',
        link: '/#/info/welcome'
      },
      {
        type: 'link',
        label: 'Link 2',
        disabled: true,
        link: '#'
      },
      {
        type: 'link',
        label: 'Link 3',
        link: '#'
      },
      {
        type: 'dropdown',
        label: 'Menu Dropdown',
        title: 'Sezione',
        items: [
          {
            type: 'link',
            label: 'Link lista 1',
            link: '#'
          },
          {
            type: 'link',
            label: 'Link lista 2',
            disabled: true,
            link: '#'
          },
          {
            type: 'link',
            label: 'Link lista 3',
            link: '#'
          },
          {
            type: 'divider'
          },
          {
            type: 'link',
            label: 'Link lista 4',
            link: '#'
          }
        ]
      },
      {
        type: 'megamenu',
        label: 'Megamenu',
        items: [
          {
            type: 'megamenu-child',
            title: 'Sezione 1',
            items: [
              {
                type: 'link',
                label: 'Link lista 1',
                link: '#'
              },
              {
                type: 'link',
                label: 'Link lista 2',
                disabled: true,
                link: '#'
              },
              {
                type: 'link',
                label: 'Link lista 3',
                link: '#'
              },
              {
                type: 'divider'
              },
              {
                type: 'link',
                label: 'Link lista 4',
                link: '#'
              }
            ]
          },
          {
            type: 'megamenu-child',
            title: 'Sezione 2',
            items: [
              {
                type: 'link',
                label: 'Link lista 1',
                link: '#'
              },
              {
                type: 'link',
                label: 'Link lista 2',
                disabled: true,
                link: '#'
              },
              {
                type: 'link',
                label: 'Link lista 3',
                link: '#'
              },
              {
                type: 'divider'
              },
              {
                type: 'link',
                label: 'Link lista 4',
                link: '#'
              }
            ]
          },
          {
            type: 'megamenu-child',
            title: 'Sezione 3',
            items: [
              {
                type: 'link',
                label: 'Link lista 1',
                link: '#'
              },
              {
                type: 'link',
                label: 'Link lista 2',
                disabled: true,
                link: '#'
              },
              {
                type: 'link',
                label: 'Link lista 3',
                link: '#'
              },
              {
                type: 'divider'
              },
              {
                type: 'link',
                label: 'Link lista 4',
                link: '#'
              }
            ]
          }
        ]
      },
    ]
  };
}
