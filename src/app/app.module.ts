import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from "./app-routing/app-routing.module";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";

// ng-zorro
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ms_MY } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ms from '@angular/common/locales/ms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzModalModule} from "ng-zorro-antd/modal";

// ngxs
import {NgxsModule} from "@ngxs/store";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {AccountOpeningState} from "./state/account-opening-state";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzTimePickerModule} from "ng-zorro-antd/time-picker";
import { StepsComponent } from './steps/steps.component';
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzSwitchModule} from "ng-zorro-antd/switch";

registerLocaleData(ms);


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    StepsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // ng-zorro
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NgxsModule.forRoot([AccountOpeningState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsFormPluginModule.forRoot(),
    NzFormModule,
    NzTimePickerModule,
    NzSelectModule,
    NzDropDownModule,
    NzRadioModule,
    NzDatePickerModule,
    NzSpaceModule,
    NzSwitchModule
  ],
  providers: [{ provide: NZ_I18N, useValue: ms_MY }],
  bootstrap: [AppComponent]
})


export class AppModule { }
