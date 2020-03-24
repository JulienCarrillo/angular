import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ListService } from 'src/app/services/list/list.service';

import { ApiService } from 'src/app/services/api/api.service';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { MedicineInterface } from 'src/model/medicine.interface';
@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss']
})
export class MedicinesComponent implements OnInit {
  form: FormGroup;



  
 // Notre liste d'éléments statiques
  medicines: MedicineInterface[] = [
    
  ];

  displayedMedicines = []; //La liste quiest liée à la vue (celle qui est affichée)
  paginatorInfo: PageEvent = {pageSize: 5, pageIndex: 0, length: this.medicines.length}; //Les informations que l'on lie au paginateur

  constructor(private readonly listSrv: ListService, private readonly api: ApiService, private readonly fb: FormBuilder,private formBuilder: FormBuilder ) {
  this.form = this.formBuilder.group({name:'', description:'',image:'',price:Number});
     this.api.get(`medicine`).subscribe(data => {this.medicines = data as MedicineInterface[], console.log(data), this.displayedMedicines = this.medicines});
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      description: [''],
      image: [''],
      price: [],
    }); 
  }

  //Méthode déclenchée lorsqu'une recherche est faite dans notre composant de recherche
  search(query: string): void { 
    //Si la recherche est vide on affecte tous les éléments à la liste que l'on affiche
    this.displayedMedicines = this.medicines;

    //Sinon on filtre les éléments dont le nom ou le prénom ne commence pas par la chaîne recherchée 
    if (query !== ''){
      this.displayedMedicines = this.medicines.filter((medicine) => {

        const len = query.length; // On récupère la taille de la chaîne recherchée
        const name = medicine.name.substr(0, len).toLocaleLowerCase(); // On crée une sous chaîne du prénom de la même taille que celle recherchée
        const description = medicine.description.substr(0, len).toLowerCase(); // Idem ave cle nom
        
        //On vérifie ensuite l'égalité des chaînes (on transforme ces chaînes en minuscule pour ne pas être sensible à la casse)
        const nameMatched = name === query.toLowerCase(); 
  

        //On conserve les éléments si la sous-chaîne créée avec le prénom ou celle créée avec le nom correspond
        return nameMatched ;
      });
    } 

    this.paginatorInfo.pageIndex = 0; //On remet la paginateur à la première page
    this.paginatorInfo.length = this.displayedMedicines.length; //On affecte la taille des éléments trouvés à la taille du paginateur
    this.displayedMedicines = this.listSrv.paginateElements<MedicineInterface>(this.displayedMedicines, this.paginatorInfo); // On pagine nos éléments qui correspondent à la recherche
  }

  //Méthode déclenchée lorsque l'utilisateur change de page ou change la taille du paginateur
  pageChange(event: PageEvent): void {
    this.paginatorInfo = event; //On met à jour la variable qui contient les informations du paginateur
    this.displayedMedicines = this.listSrv.paginateElements<MedicineInterface>(this.medicines, this.paginatorInfo); // On pagine nos éléments affichés
  }

  testa(){
    
    const medicine = this.form.value;
    this.api.put(`medicine`,medicine).toPromise().then(
      success => console.log("success : ", success), 
      error => console.log("error : ", error));
  }

}
