// import { inject, TestBed } from '@angular/core/testing';
// import { Component } from '@angular/core';
// import { expect } from 'chai';
// import {Contact} from './contact.service';
// import { ContactService } from './contact.service';

// describe('contact-service should work properly', () => {
//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             providers: [
//                 ContactService
//             ]
//         });
//     })

//     it('get list of contact should work', () => {
//         // inject([ContactService])
//     })
// });


// describe('test example', () => {
//     let x: boolean;
//     let contacts: Promise<Contact[]>;
//     let contactInts: ContactService;
//     // console.log('sinon:', sinon);
//     beforeEach(() => {
//         x = true;
//         contactInts = new ContactService();
//         sinon.stub(contactInts, 'getContacts').returns(Promise.resolve(['aaa', 'bbb']));
        
//         contacts = contactInts.getContacts();
        
//     })
//     it('should be true', () => {
//         expect(x).to.be.equal(true);
//     });

//     it('promise should be called', () => {
//         contacts.should.eventually.deep.equal(['aaa', 'bbb']);
//     });

// });