import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { idShare } from 'src/app/core/services/idShare.service';
import { DialogConfirmationPutAffiliateComponent } from './dialog-confirmation-put-affiliate/dialog-confirmation-put-affiliate.component';

@Component({
  selector: 'app-afiliado-actualizacion',
  templateUrl: './afiliado-actualizacion.component.html',
  styleUrls: ['./afiliado-actualizacion.component.css']
})
export class AfiliadoActualizacionComponent {
  nombreValue : string = '';
  edadValue : number = 0;
  mailValue : string = '';
  id:number=0;

  form : FormGroup;
  
  constructor(public dialog: MatDialog, private service: idShare, private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      nombre : ['', Validators.required],
      edad : ['', Validators.required],
      correo : ['', [Validators.required, Validators.email]]
    })
  }
  

ngOnInit(): void {
  this.service.currentId.subscribe(id=> this.id = id);
}

  dialogConfirmacion(
    nombre: HTMLInputElement, edad: HTMLInputElement, mail: HTMLInputElement){
    this.service.currentId.subscribe(id=> this.id = id);
    this.dialog.open(DialogConfirmationPutAffiliateComponent,
                    {data: {
                      id: this.id,
                      nombre: nombre.value,
                      edad: edad.valueAsNumber,
                      mail: mail.value
                    }});
  }
  
}
