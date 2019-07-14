import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { MoviePreviewComponent } from './movie-preview/movie-preview.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [IonicModule, CommonModule],
    declarations: [MoviePreviewComponent, MovieDetailComponent],
    exports: [MoviePreviewComponent],
    entryComponents: [MovieDetailComponent]
})

export class ComponentModule {}
