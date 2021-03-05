import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Contact } from './modal/contact-model';
import { ContactService } from './service/contact.service';
import { environment } from './../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  /***********************Properties*********** */
  readonly config = {
    header: 'Evolent HealthCare Contact',
    
  };

  
  /***********************Properties*********** */

  /***********************Constructor*********** */
  constructor() {
    console.log(environment.production); // Logs false for default environment
  }
  /***********************Constructor*********** */

  /***********************Implementation Methods*********** */
  

  /***********************Implementation Methods*********** */

  /***********************Component Methods*********** */
 
  /***********************Component Methods*********** */
}
