import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
jobList: any = [
  {title:'Digital Marketing Analyst',exp: '3-5',date: 'March 20, 2023',type: 'Full Time',desc: ''},
  {title:'Web Developer',exp: '3-5',date: 'March 20, 2023',type: 'Full Time',desc: ''},
  {title:'Creative Designer',exp: '1-2',date: 'March 20, 2023',type: 'Full Time',desc: ''},
  {title:'Devops Engineer',exp: '4-6',date: 'March 20, 2023',type: 'Full Time',desc: ''},
  {title:'Java Senior Developer',exp: '5+',date: 'March 20, 2023',type: 'Full Time',desc: ''},
  {title:'Content Writer',exp: '1-2',date: 'March 20, 2023',type: 'Full Time',desc: ''},
  {title:'UI & UX DESIGN',exp: '',date: '',type: 'Intership',desc: 'We help interns understand the industry requirements of UI and UX, which allow them to align design requirements with customer needs.'},
  {title:'DIGITAL MARKETING',exp: '',date: '',type: 'Intership',desc: 'With our best industry approaches and practices, we help interns understand the real intricacies of digital marketing.'},
  {title:'MOBILE APP DEVELOPMENT',exp: '',date: '',type: 'Intership',desc: 'Since mobile applications drive digital sales to a great extent, we ensure that interns know how to create market-ready applications.'},
  {title:'WEB DEVELOPMENT',exp: '',date: '',type: 'Intership',desc: 'Similar to mobile applications, our intern programs include end-to-end knowledge of web development such as UI, UX, design, clean code strategy, etc.'}
]
storted: any = 'All';
filter(data: any){
  this.storted = data;
  return this.storted;
}
}
