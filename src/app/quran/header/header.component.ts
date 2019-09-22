import {Component, OnInit, OnDestroy} from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {HeaderItem} from './header-item';
import {Subscription, Observable} from 'rxjs';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  watcher: Subscription;
  navItems: HeaderItem[];
  namedButtons: HeaderItem[] = [];
  iconButtons: HeaderItem[] = [];
  overflowMenuItems: HeaderItem[] = [];

  constructor(public navService: HeaderService,
              public mediaService: ObservableMedia) {}

  ngOnInit() {
    // ***** CODE FOR MENU ICON CHANGE IN MOBILE VIEW *****
    // Assume this is a file read or HttpClient request that completes after the first event.
    this.navService.getNavItems().subscribe((items: HeaderItem[]) => {
      this.navItems = items;
      this.onMediaChange();
      this.watcher = this.mediaService.subscribe((change: MediaChange) => {
        this.onMediaChange();
      });
    });
    // ***** CODE FOR MENU ICON CHANGE IN MOBILE VIEW *****
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
