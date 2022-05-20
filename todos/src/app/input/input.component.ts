import { Component, OnInit,Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

@Input() control:any;
@Input() type:string='';
@Input() placeholder:string='';
@Input() name:string=''
@Input () classname:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
