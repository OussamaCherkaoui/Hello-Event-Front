import {Component, OnInit} from '@angular/core';
import {TeamInfo} from "../models/TeamInfo";
import {TeamInfoService} from "../Services/team-info.service";
import {MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-apropos',
  standalone: true,
  imports: [
    MatCardHeader,
    MatCardContent,
    MatCardModule,
    NgForOf
  ],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent implements OnInit{
  teamMembers: TeamInfo[] = [];

  constructor(
    private teamService: TeamInfoService,
  ) {}

  ngOnInit(): void {
    this.GetMembersOfTeam();
  }
  GetMembersOfTeam(){
    this.teamService.getAllTeam().subscribe(data => {
      this.teamMembers = data;
    });
  }
}
