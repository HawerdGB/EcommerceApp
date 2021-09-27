import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {regex, regexErrors} from '@app/shared/utils';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  form!: FormGroup;
  isInline!:boolean;
  regexErrors = regexErrors;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        input:[null, {
          updateOn:'blur',
          validators:[
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(regex.email)
          ]
        }],
        password:[null,{
          updateOn: 'blur', validators:[
            Validators.required
          ]
        }]
      });

  }

  onPatchValue():void{
    this.form.patchValue({input : 'Hawerd Gutierrez'});
  }

  onSubmit(): void{
     console.log('Boton submit presionado')
  }

  organizarElemento(){
    this.isInline = !this.isInline
  }

}
