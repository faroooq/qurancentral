import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModulesPro, MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { ArabicComponent } from './arabic/arabic.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VideoComponent } from './video/video.component';
import { SafePipe } from './safe.pipe';
import { AppRoutingModule } from './app-routing.module';
import { SeoGuard } from './seo-service/seo.guard';
import { SeoVideoIdGuard } from './seo-service/seo.video.id.guard';
import { SeoService } from './seo-service/seo.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SurahAdapter } from 'src/adapters/surah.adapter';
import { QuranService } from './services/quran.service';
import { VideoService } from './services/video.service';
import { SurahIntroAdapter } from 'src/adapters/surahintro.adapter';
import { ReadMoreComponent } from './utils/read.more.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularMaterialModule } from './material.module';
import { QuranComponent } from './quran/quran.component';
import { NavService } from './navbar/nav.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuranPaneComponent } from './quran-pane/quran-pane.component';
import { ThemeService } from './services/theme.service';
import { TafsirComponent } from './tafsir/tafsir.component';
import { TafsirPaneComponent } from './tafsir-pane/tafsir-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    ArabicComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    VideoComponent,
    SafePipe,
    HomeComponent,
    ReadMoreComponent,
    ModalComponent,
    NavbarComponent,
    QuranComponent,
    QuranPaneComponent,
    TafsirComponent,
    TafsirPaneComponent
  ],
  imports: [
    AppRoutingModule,
    MDBBootstrapModulesPro.forRoot(),
    BrowserModule.withServerTransition({ appId: 'qurancentral' }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
    FlexLayoutModule
    // TreeRendererDirective
  ],
  entryComponents: [ModalComponent],
  providers: [
    MDBSpinningPreloader,
    SeoGuard,
    SeoVideoIdGuard,
    SeoService,
    HttpClient,
    HttpClientModule,
    SurahAdapter,
    QuranService,
    VideoService,
    SurahIntroAdapter,
    NavService,
    ThemeService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
