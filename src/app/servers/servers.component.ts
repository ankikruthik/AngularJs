import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'created';
  allowNewServer: boolean = false;

  serverCreated: string = 'no server created !';
  serverName: string = 'Server';
  isServerCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onServerCreated() {
    this.isServerCreated = true;
    this.serverCreated = 'server was created and Name is : ' + this.serverName;
  }

}
