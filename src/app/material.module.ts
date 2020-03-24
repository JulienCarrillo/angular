import { NgModule } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import { LayoutModule } from '@angular/cdk/layout';
import { FrenchPaginatorIntlService } from './services/french-paginator-intl/french-paginator-intl.service';

const modules = [
    LayoutModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatPaginatorModule
];

@NgModule({
    imports: modules, 
    exports: modules, 
    providers: [{provide: MatPaginatorIntl, useClass: FrenchPaginatorIntlService}]
})
export class MaterialModule { }