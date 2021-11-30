import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.page.html',
  styleUrls: ['./faqs.page.scss'],
})
export class FaqsPage implements OnInit {
    faqs: any = [' 1.Requirements for one to be successfully registered',
        '2. Registration centres per province/town.',
        '3. Is a Driver\'s License accepted when registering',
        '4. Can a person register as a voter in a constituency which they do not reside in',
        '5. Is it possible for one to transfer their registration to another ward. If yes, Is there a timeline to do this?',
        '6. Can a person be objected from registering, what should one do to rectify that?',
        '7. What are the roles of ZEC',
        '8.Which section on the constitution provides for voting as a right?'];

  constructor() { }

  ngOnInit() {
  }

}
