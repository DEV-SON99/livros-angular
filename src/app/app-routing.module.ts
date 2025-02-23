import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// Compare this snippet from src/app/app.module.ts:
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';
// import { ControleEditoraService } from './controle-editora.service';
// import { AppRoutingModule } from './app-routing.module';
//
// @NgModule({
//   imports: [BrowserModule, AppRoutingModule],
//   declarations: [AppComponent],
//   providers: [ControleEditoraService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
// Compare this snippet from src/app/app-routing.module.ts:
// import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { routes } from './app.routes';
//
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
// Compare this snippet from src/app/app.component.ts:
// import { Component } from '@angular/core';
//