import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { FormFieldValidationErrosPipe } from './pipes/form-field-validation-erros.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { RepetirDirective } from './directives/repetir.directive';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from "@angular/material/divider";


@NgModule({
    declarations: [
    FormFieldValidationErrosPipe,
    ResaltadoDirective,
    RepetirDirective
  ],
    imports: [CommonModule],
    exports: [
        MatTableModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatIconModule,
        FormFieldValidationErrosPipe,
        ResaltadoDirective,
        RepetirDirective,
        MatDividerModule
    ],
})

export class SharedModule {}
