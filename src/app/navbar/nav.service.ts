import {Injectable} from '@angular/core';
import {of, Observable} from 'rxjs';
import {NavItem} from './nav-item';

@Injectable()
export class NavService {
  private navItems = [
    {label: 'Home', path: '/home', iconName: 'home'},
    {label: 'Quran', path: '/quran', iconName: 'menu_book'},
    {label: 'Tafsir', path: '/tafsir', iconName: 'school'},
    {label: 'Arabic', path: '/madina-arabic-simplified/1/1', iconName: 'video_label'}
    // {label: 'Blog', path: '/blog', iconName: 'person_pin'}
    // {label: 'Golf', path: 'fake', iconName: 'golf_course'},
    // {label: 'Spa', path: 'fake', iconName: 'spa'},
    // {label: 'Pool', path: 'fake', iconName: 'pool'},
    // {label: 'Service', path: 'fake', iconName: 'room_service'},
    // {label: 'Casino', path: 'fake', iconName: 'casino'},
    // {label: 'Business', path: 'fake', iconName: 'business_center'},
    // {label: 'Coffee', path: 'fake', iconName: 'free_breakfast'}
  ];

  constructor() { }

  getNavItems(): Observable<NavItem[]> {
    return of(this.navItems);
  }
}
