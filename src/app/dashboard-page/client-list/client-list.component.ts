import { Component, Input } from '@angular/core';
import CLIENTS_JSON from './../../../assets/clients.json';

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent {
  public clients = CLIENTS_JSON;
  @Input() reverseNames = false;
  @Input() orderNames = false;
}
