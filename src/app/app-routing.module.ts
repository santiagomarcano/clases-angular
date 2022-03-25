import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Home -> AppModule

// Products -> ProductsModule

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
