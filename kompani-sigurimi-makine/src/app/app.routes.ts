import { Routes } from '@angular/router';
import { BilanciComponent } from './bilanci/bilanci.component';
import { RaportBlerjeComponent } from './raport-blerje/raport-blerje.component';
import { RaportShitjeComponent } from './raport-shitje/raport-shitje.component';
import { RaportetComponent } from './raportet/raportet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'bilanci', component: BilanciComponent},
    {path : 'raport-blerje', component: RaportBlerjeComponent},
    {path: 'raport-shitje', component: RaportShitjeComponent},
    {path: 'raportet', component:RaportetComponent},
    { path: '', redirectTo: '/raportet', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }

];
