import { RouterModule, Routes } from '@angular/router';
import { ArabicComponent } from './arabic/arabic.component';
import { VideoComponent } from './video/video.component';
import { NgModule } from '@angular/core';
import { SeoGuard } from './seo-service/seo.guard';
import { SeoVideoIdGuard } from './seo-service/seo.video.id.guard';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuranComponent } from './quran/quran.component';
import { TafsirComponent } from './tafsir/tafsir.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['Quran Central'],
      desc: 'The beauty, the Eloquence, the Miracle and the Divine Wisdom of the Qur’an will '
        + 'penetrate the innermost depth of your heart and you will experience the joy and happiness '
        + 'which cannot be expressed but can only be felt in the Believer’s Heart.',
      keywords: 'quran, tafsir, arabic, madina, simplified, hadith, muslim, islam, central, furqan, tafheem, mariful quran, ibn kathir, moududi'
    }
  },
  {
    path: 'quran',
    component: QuranComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['Quran Translation'],
      desc: 'The beauty, the Eloquence, the Miracle and the Divine Wisdom of the Qur’an will '
        + 'penetrate the innermost depth of your heart and you will experience the joy and happiness '
        + 'which cannot be expressed but can only be felt in the Believer’s Heart.',
      keywords: 'quran, tafsir, arabic, madina, simplified, hadith, muslim, islam, central, furqan, tafheem, mariful quran, ibn kathir, moududi'
    }
  },
  {
    path: 'tafsir',
    component: TafsirComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['Quran Tafsir'],
      desc: 'The beauty, the Eloquence, the Miracle and the Divine Wisdom of the Qur’an will '
        + 'penetrate the innermost depth of your heart and you will experience the joy and happiness '
        + 'which cannot be expressed but can only be felt in the Believer’s Heart.',
      keywords: 'quran, tafsir, arabic, madina, simplified, hadith, muslim, islam, central, furqan, tafheem, mariful quran, ibn kathir, moududi'
    }
  },
  {
    path: 'madina-arabic-simplified',
    redirectTo: 'madina-arabic-simplified/:bookid/:lessonid',
    pathMatch: 'full'
  },
  {
    path: 'madina-arabic-simplified/:bookid/:lessonid', component: VideoComponent,
    canActivate: [SeoVideoIdGuard],
    data: {
      title: ['Madina Arabic Simplified'],
      desc: 'The beauty, the Eloquence, the Miracle and the Divine Wisdom of the Qur’an will '
        + 'penetrate the innermost depth of your heart and you will experience the joy and happiness '
        + 'which cannot be expressed but can only be felt in the Believer’s Heart.',
      keywords: 'quran, tafsir, arabic, madina, simplified, hadith, muslim, islam, central, furqan, tafheem, mariful quran, ibn kathir, moududi'
    }
  },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
