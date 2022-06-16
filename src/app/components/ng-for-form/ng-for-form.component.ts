import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name: string = '';
  address: string = '';
  phone: string = '';
  age: number = 0;
  city: string = '';
  cities = [
    { name: 'Rio',
      state: 'RJ'
    },
    { name: 'Ceará',
      state: 'CE'
    },
    { name: 'São Paulo',
      state: 'SP'
    },
  ]
  client: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.client.push(
      {
        name: this.name,
        address: this.address,
        phone: this.phone,
        city: this.city,
        age: this.age
      }
    )
    console.log('Client', this.client);
  }

  clickSave() {
    if(this.name !== '' && this.address !== '' && this.phone !== '' && this.city !== '' && this.age !== 0){
      this.save()
    } else {
    alert('Obrigatórios')
      }
  }

  cancel() {
    this.name = '';
    this.phone = '';
    this.address = '';
    this.city = '';
    this.age = 0;

  }

}
