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
  clients: Array<any> = [];
  cities = [
    { 
      name: 'Rio',
      state: 'RJ'
    },
    { 
      name: 'Ceará',
      state: 'CE'
    },
    { 
      name: 'São Paulo',
      state: 'SP'
    },
    {
      name: 'Minas Gerais',
      state: 'MG'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.clients.push(
      {
        name: this.name,
        address: this.address,
        phone: this.phone,
        city: this.city,
        age: this.age
      }
    )
    console.log('Client', this.clients);
  }

  clickSave() {
    if(this.name !== '' && this.address !== '' && this.phone !== '' && this.city !== '' && this.age !== 0){
      this.save()
      this.cancel()
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

  delete(i: number) {
    this.clients.splice(i, 1)

    console.log('delete', i);
  }

}
