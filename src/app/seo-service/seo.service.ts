import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private title: Title, private meta: Meta) {
    this.meta.updateTag({ name: 'twitter:site', content: 'Quran Central' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Quran Central' });
  }

  setTitle(title: string[]): SeoService {
    this.title.setTitle(title.join(' | '));
    this.meta.updateTag({ name: 'twitter:title', content: title.join(' | ') });
    this.meta.updateTag({ property: 'og:title', content: title.join(' | ') });
    return this;
  }

  setDescription(description: string): SeoService {
    this.meta.addTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ property: 'og:description', content: description });
    return this;
  }

  setKeywords(keywords: string): SeoService {
    this.meta.addTag({ name: 'keywords', content: keywords });
    return this;
  }
}
