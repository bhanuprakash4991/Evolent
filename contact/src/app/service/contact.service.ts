import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { contactRoutes } from '../constants/contact.constant';
import { Contact } from '../modal/contact-model';

@Injectable({
  providedIn: 'root',
})
export class ContactService implements OnInit {
  /***********************Properties****************/
  contact: Contact[] = [
    {
      contactId: 1,
      firstName: 'bhanu',
      lastName: 'prakash',
      email: 'cb.prakash@gmail.com',
      phoneNumber: 9675565789,
      status: 'Active',
    },
    {
      contactId: 2,
      firstName: 'chandra',
      lastName: 'Bhanu',
      email: 'prakash@gmail.com',
      phoneNumber: 9675065789,
      status: 'InActive',
    },
    {
      contactId: 3,
      firstName: 'Arya',
      lastName: 'stark',
      email: 'as@gmail.com',
      phoneNumber: 9678565789,
      status: 'InActive',
    },
    {
      contactId: 4,
      firstName: 'jhon',
      lastName: 'snow',
      email: 'jhon@yahoo.com',
      phoneNumber: 9674065789,
      status: 'Active',
    },
    {
      contactId: 5,
      firstName: 'damon',
      lastName: 'salvatore',
      email: 'ds12@evolent.com',
      phoneNumber: 7675065789,
      status: 'InActive',
    },
  ];

  contactForm: Contact;
  /***********************Properties****************/

  /***********************Constructor****************/
  constructor(public router: Router) {}

  /***********************Constructor****************/

  /**************Implementation Method****************/

  ngOnInit() {}
  /**************Implementation Method****************/

  /***********************Service Methods*********** */
  getContactInformation() {
    return this.contact;
  }

  SaveContactInformation(contactDetail: Contact) {
    if (!contactDetail.contactId) {
      let contactcount = Math.max.apply(
        Math,
        this.contact.map(function (obj) {
          return obj.contactId;
        })
      );
      contactDetail.contactId = contactcount + 1;
      this.contact.push(contactDetail);
    }else{
      for(let contactObj of this.contact){
        if(contactDetail.contactId === contactObj.contactId){
        contactObj.contactId = contactDetail.contactId,
        contactObj.firstName = contactDetail.firstName,
        contactObj.lastName = contactDetail.lastName,
        contactObj.email = contactDetail.email,
        contactObj.phoneNumber = contactDetail.phoneNumber,
        contactObj.status = contactDetail.status
        }
      }
      
    }
   
    this.router.navigateByUrl(contactRoutes.ContactList);
    
  }

  getContactForm(contactId) {
    if (contactId) {
      for (let contactObj of this.contact) {
        if (contactId == contactObj.contactId) {
          this.contactForm = {
            contactId: contactObj.contactId,
            firstName: contactObj.firstName,
            lastName: contactObj.lastName,
            email: contactObj.email,
            phoneNumber: contactObj.phoneNumber,
            status: contactObj.status,
          };
          return this.contactForm;
        }
      }
    } else {
      return this.setValue();
    }
  }

  private setValue() {
    this.contactForm = {
      contactId: null,
      firstName: null,
      lastName: null,
      email: null,
      phoneNumber: null,
      status: 'Active',
    };

    return this.contactForm;
  }
}
/***********************Service Methods*********** */
