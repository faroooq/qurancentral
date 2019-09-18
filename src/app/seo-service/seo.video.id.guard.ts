import { SeoService } from './seo.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class SeoVideoIdGuard implements CanActivate {

    public constructor(private seo: SeoService) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        // const id = route.params['id'].replace(/.html$/, '');
        const bookId = route.params['bookid'];
        const lessonId = route.params['lessonid'];
        const description = route.params['desc'];
        this.seo
            .setTitle(['Madina Arabic Simplified | ' + 'Book-' + bookId, 'Lesson-' + lessonId])
            .setDescription(description)
            .setKeywords(route.data['keywords']);
        return true;
    }
}
