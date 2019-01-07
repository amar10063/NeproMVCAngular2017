import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { SetupbinComponent } from './setup/setupbin/setup.component';
import { AisleComponent } from './setup/aisle/aisle.component';
@NgModule({
    imports: [BrowserModule, RouterModule.forRoot([
        { path: '', redirectTo: '', pathMatch: 'full' },
        { path: 'bin', component: SetupbinComponent },
        { path: 'aisle', component: AisleComponent },
       
        { path: '**', redirectTo: 'home' }
    ])],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    declarations: [AppComponent, HeaderComponent, FooterComponent, NavmenuComponent, AisleComponent, SetupbinComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
