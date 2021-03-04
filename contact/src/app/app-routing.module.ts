import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact/contactList/contact-list/contact-list.component';
import { ManageContactComponent } from './contact/manageContact/manage-contact/manage-contact.component';

import { contactRoutes } from 'src/app/constants/contact.constant';

const routes: Routes = [
  { path: contactRoutes.ADD, component: ManageContactComponent },
  { path: contactRoutes.Edit + '/:contactId', component: ManageContactComponent },
  { path: contactRoutes.ContactList, component: ContactListComponent },

  { path: '', redirectTo: contactRoutes.ContactList, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
