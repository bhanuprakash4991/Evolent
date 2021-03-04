import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { contactRoutes } from 'src/app/constants/contact.constant';
import { Contact } from 'src/app/modal/contact-model';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  readonly table = {
    dataSource: new MatTableDataSource([]),
    columns: ['firstName', 'lastName', 'email', 'phoneNumber', 'status','menu'],
  };

  readonly config ={
    title: 'Contact Information',
  }

  contactInformation: Contact[];

  constructor(
    public contactService: ContactService,
    public router:Router,
    
  ) {}

  ngOnInit(): void {
    this.contactInformation = this.contactService.getContactInformation();
    this.table.dataSource = new MatTableDataSource(this.contactInformation);
  }

  onContactClick(){
  
    this.router.navigateByUrl(contactRoutes.ADD);
  }

  onEdit(contactId){
    this.router.navigateByUrl(contactRoutes.Edit +'/'+ contactId);
  }
}
