import { Injectable } from '@angular/core';
import { Team } from './team-module';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teams: Team[] = [
   { id: 1, name: 'Blue Team',   primaryColor: '#3b82f6', secondaryColor: '#9ae4e4ff', iconColor: '#1e40af' },
    { id: 2, name: 'Green Team',  primaryColor: '#10b981', secondaryColor: '#d1fae5', iconColor: '#047857' },
    { id: 3, name: 'Red Team',    primaryColor: '#ef4444', secondaryColor: '#fef2f2', iconColor: '#b83636ff' },
    { id: 4, name: 'Purple Team', primaryColor: '#8b5cf6', secondaryColor: '#f3e8ff', iconColor: '#7c3aed' },
    { id: 5, name: 'Orange Team', primaryColor: '#f97316', secondaryColor: '#ffedd5', iconColor: '#c2410c' },
    { id: 6, name: 'Teal Team',   primaryColor: '#14b8a6', secondaryColor: '#ccfbf1', iconColor: '#0f766e' },
    { id: 7, name: 'Pink Team',   primaryColor: '#ec4899', secondaryColor: '#fce7f3', iconColor: '#9d174d' },
    { id: 8, name: 'Yellow Team', primaryColor: '#eab308', secondaryColor: '#fef9c3', iconColor: '#713f12' }
  ];

  private selectedTeam: Team = this.teams[0];
  

  constructor() {
    this.applyTeamStyles(this.selectedTeam);
  }


  getTeams(): Team[] {
    return this.teams;
  }

  getSelectedTeam(): Team {
    return this.selectedTeam;
  }

  setSelectedTeam(team: Team): void {
    this.selectedTeam = team;
    this.applyTeamStyles(team);
  }

  private applyTeamStyles(team: Team): void {
    // Apply CSS variables to root element
    document.documentElement.style.setProperty('--team-primary', team.primaryColor);
    document.documentElement.style.setProperty('--team-secondary', team.secondaryColor);
    document.documentElement.style.setProperty('--team-icon', team.iconColor);
  }
}