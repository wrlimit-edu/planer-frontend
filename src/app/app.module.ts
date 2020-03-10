import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CategoryComponent } from './view/category/category.component';
import { CategoryService } from './service/category.service';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './view/common/header/header.component';
import { FooterComponent } from './view/common/footer/footer.component';
import { LogoComponent } from './view/common/logo/logo.component';
import { TaskComponent } from './view/task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { TaskDialogComponent } from './dialog/task-dialog/task-dialog.component';
import {
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    TaskComponent,
    TaskDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  providers: [CategoryService],
  entryComponents: [
    TaskDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
