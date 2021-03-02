import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import * as IonFile from "@ionic-native/file"
import { IonicModule } from '@ionic/angular';

import { ImgLoaderComponent } from './components/img-loader';
import { ImageLoader } from './providers/image-loader';
import { ImageLoaderConfig } from './providers/image-loader-config';

@NgModule({
  declarations: [
    ImgLoaderComponent,
  ],
  imports: [
    IonicModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    ImgLoaderComponent,
  ],
})
export class IonicImageLoader {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicImageLoader,
      providers: [
        ImageLoaderConfig,
        ImageLoader,
        IonFile.FileOriginal,
      ],
    };
  }
}
