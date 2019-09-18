import {Component, OnInit, OnDestroy} from '@angular/core';
import {NavService} from './nav.service';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {NavItem} from './nav-item';
import {Subscription, Observable} from 'rxjs';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isThemeDark: Observable<boolean>;
  watcher: Subscription;
  navItems: NavItem[];
  namedButtons: NavItem[] = [];
  iconButtons: NavItem[] = [];
  overflowMenuItems: NavItem[] = [];

  constructor(public navService: NavService,
              public mediaService: ObservableMedia, private themeService: ThemeService) {}

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
    // Assume this is a file read or HttpClient request that completes after the first event.
    this.navService.getNavItems().subscribe((items: NavItem[]) => {
      this.navItems = items;
      this.onMediaChange();

      this.watcher = this.mediaService.subscribe((change: MediaChange) => {
        this.onMediaChange();
      });
    });
  }

  toggleDarkTheme(checked: boolean) {
    // console.log('Checked : ' + checked)
    this.themeService.setDarkTheme(checked);
  }

  ngOnDestroy() {
    if (this.watcher) {
      this.watcher.unsubscribe();
    }
  }

  onMediaChange() {
    let items = this.navItems.slice();
    this.namedButtons = [];
    this.iconButtons = [];
    this.overflowMenuItems = [];

    if (this.mediaService.isActive('xs')) {
      this.iconButtons = this.iconButtons.concat(items.splice(0, 5));
    } else if (this.mediaService.isActive('sm')) {
      this.namedButtons = this.namedButtons.concat(items.splice(0, 6));
    } else if (this.mediaService.isActive('md')) {
      this.namedButtons = this.namedButtons.concat(items.splice(0, 8));
    } else if (this.mediaService.isActive('lg')) {
      this.namedButtons = this.namedButtons.concat(items.splice(0, 12));
    } else if (this.mediaService.isActive('xl')) {
      this.namedButtons = this.namedButtons.concat(items.splice(0, 16));
    }

    if (items.length > 0) {
      this.overflowMenuItems = items;
    }
  }
}
