import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModulesPro, MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { ArabicComponent } from './arabic/arabic.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './quran/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VideoComponent } from './video/video.component';
import { SafePipe } from './pipe/safe.pipe';
import { AppRoutingModule } from './app-routing.module';
import { SeoGuard } from './seo-service/seo.guard';
import { SeoVideoIdGuard } from './seo-service/seo.video.id.guard';
import { SeoService } from './seo-service/seo.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { QuranService } from './services/quran.service';
import { VideoService } from './services/video.service';
import { ReadMoreComponent } from './utils/read.more.component';
import { ModalComponent } from './modal/modal.component';
import { AngularMaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ThemeService } from './services/theme.service';
import { TafsirComponent } from './tafsir/tafsir.component';
import { TafsirPaneComponent } from './tafsir-pane/tafsir-pane.component';
import { ArraySortPipe } from './pipe/arraysort.pipe';
import { HeaderService } from './quran/header/header.service';
import { QuranPaneComponent } from './quran/quran-pane/quran-pane.component';
import { QuranLeftComponent } from './quran/quran-left/quran-left.component';
import { QuranMainComponent } from './quran/quran-main/quran-main.component';

@NgModule({
  declarations: [
    AppComponent,
    ArabicComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    VideoComponent,
    SafePipe,
    ArraySortPipe,
    HomeComponent,
    ReadMoreComponent,
    ModalComponent,
    HeaderComponent,
    QuranLeftComponent,
    QuranPaneComponent,
    TafsirComponent,
    TafsirPaneComponent,
    QuranMainComponent
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
    FlexLayoutModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireDatabaseModule,
    // AngularFirestoreModule
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
    QuranService,
    VideoService,
    HeaderService,
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
