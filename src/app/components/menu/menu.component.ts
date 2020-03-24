import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  // Création d'un Observable de type booléen qui nous indique si le client a une résolution mobile
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset) // On observe le point d'arrêt résolution mobile
    .pipe(
      map(result => result.matches), // On récupère la valeur de 'matches' qui nous indique si la résolution correspond à celle qu'on observe
      shareReplay() // Permet de rejouer la dernière valeure émise (optimisation qui permet d'éviter les effets de bords d'un observable)
    );

  menuItems = [
    {path: '/home', name: 'Accueil'},
    {path: '/doctors', name: 'Médecins'},
    {path: '/medicines', name: 'Médicaments'},
    {path: '/patients', name: 'Patients'},
    {path: '/prescriptions', name: 'prise de RDV'},
    {path: '/profile', name: 'Profil'},
  ];
  
  // Injection du service BreakpointObserver qui nous permet de détecter la résolution du navigateur 
  constructor(private breakpointObserver: BreakpointObserver) {}

  hideMenuIfHandset(drawer: MatDrawer): void {
    const isHandset = this.breakpointObserver.isMatched([Breakpoints.Handset]);
    if(isHandset) {
      drawer.toggle();
    }
  }

}
