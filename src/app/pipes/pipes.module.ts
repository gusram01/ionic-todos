import { NgModule } from '@angular/core';
import { CompletedPipe } from './completed.pipe';

@NgModule({
  declarations: [CompletedPipe],
  exports: [CompletedPipe],
})
export class PipesModule {}
