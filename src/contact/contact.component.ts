import {Component, OnInit} from "@angular/core";
import {Contact, ContactService} from './contact.service';
import UserService from '../services/user.service';

@Component({
    selector: 'app-contact',
    template: require('./contact.component.html')
})
export default class ContactComponent implements OnInit {
    contact: Contact;
    contacts: Contact[];

    msg = 'Loading contacts ...';
    userName: String = '';

    constructor(private contactService: ContactService, userService: UserService) {
        this.userName = userService.userName;
    }

    ngOnInit() {
        this.contactService.getContacts().then(contacts => {
            this.msg = '';
            this.contacts = contacts;
            this.contact = contacts[0];
        });
    }
}