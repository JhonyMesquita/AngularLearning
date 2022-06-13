import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {


  buttonName: string = 'Bananada';
  btnEnable: boolean = true;
  spinnerValue: number = 0;
  checkDisable: boolean = false;
  selectItens: string = '';
  textInput: string = 'Luffy';

  constructor() { }
  spinnerMode: any = 'determinate';

  ngOnInit(): void {
  }

  disable(){
    this.btnEnable = false
    this.spinnerMode = 'indeterminate'
    this.spinnerValue = 0
    setTimeout(()=> {
      this.spinnerMode = 'determinate'
      this.btnEnable = true
    }, 3000)
  }

  MatProgressSpinnerModule() {
      if(this.spinnerValue < 110){
        this.spinnerValue += 10
      }
      if(this.spinnerValue === 110){
        this.spinnerValue = 0
      }
  }

  selectedDisable(event: any){
    console.log(event.checked);
    this.checkDisable = event.checked;
  }

  cbSelect(event: any){
    console.log(event);
    this.selectItens = event.value;
  }

  inputEvent(event: any){
    console.log(event.target.value);
    this.textInput = event.target.value;
  }

}
