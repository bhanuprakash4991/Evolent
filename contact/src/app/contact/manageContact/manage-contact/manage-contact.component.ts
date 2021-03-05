import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { contactRoutes } from 'src/app/constants/contact.constant';
import { Contact } from 'src/app/modal/contact-model';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-manage-contact',
  templateUrl: './manage-contact.component.html',
  styleUrls: ['./manage-contact.component.scss'],
})
export class ManageContactComponent implements OnInit {
  /***********************Properties****************/
  readonly config = {
    title: null,
    contactId: null,
  };

  readonly contactStatus =['Active','Inactive'];

  contact: Contact = null;



  /***********************Properties****************/

  /***********************Constructor****************/

  constructor(
    public contactService: ContactService,
    private route: ActivatedRoute,
    private router:Router,
  ) {}
  /***********************Constructor****************/
  /**************Implementation Method****************/

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.config.contactId = params['contactId'];
      if(this.config.contactId)
      this.config.title = "Edit Contact";
      else
      this.config.title = "Add Contact";
    });
    this.getContactInformation(this.config.contactId);
  }

  /**************Implementation Method****************/

  /**************Component Method****************/

  onSubmit() {
    this.contactService.SaveContactInformation(this.contact);
  }

  cancel(){
    this.router.navigateByUrl(contactRoutes.ContactList);
  }

  /**************Component Method****************/

  /**************Private Method****************/

  private getContactInformation(contactId) {
    this.contact = this.contactService.getContactForm(contactId);
  }
}
