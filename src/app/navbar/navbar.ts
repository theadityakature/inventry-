import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeamService } from '../team/team.service';
import { Team } from '../team/team-module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  isNavbar = false;
  teams: Team[] = [];
  selectedTeam!: Team;
  showTeamSelector = false;

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    // Load saved preference on component initialization
    const savedMode = localStorage.getItem('layoutMode');
    if (savedMode === 'navbar') {
      this.isNavbar = true;
    }

    // Load teams and selected team
    this.teams = this.teamService.getTeams();
    this.selectedTeam = this.teamService.getSelectedTeam();
  }

  toggleSidebar(event: any) {
    this.isNavbar = event.target.checked;
    console.log(this.isNavbar);
    
    // Save preference to localStorage
    localStorage.setItem('layoutMode', this.isNavbar ? 'navbar' : 'sidebar');
  }

  selectTeam(team: Team) {
    this.selectedTeam = team;
    this.teamService.setSelectedTeam(team);
    this.showTeamSelector = false;
  }

  toggleTeamSelector() {
    this.showTeamSelector = !this.showTeamSelector;
  }
}