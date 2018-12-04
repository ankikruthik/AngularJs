import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'Chandra';
  allowNewServer: boolean = false;

  serverCreated: string = 'no server created !';
  serverName: string = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onServerCreated() {
    this.serverCreated = 'server was created and Name is : ' + this.serverName;
  }

}
