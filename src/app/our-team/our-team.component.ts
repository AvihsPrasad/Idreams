import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent {

  membersList: any = [
    {imglink:'../../assets/imges/team/Sindhura1.png',name:'Sindhura Pathakota',designation: 'HR Manager',info: 'Professionals tasked with strategic planning for staffing, conducting interviews, and hiring personnel to foster a productive work atmosphere.'},
    {imglink:'../../assets/imges/team/chari1.png',name:'Mallikarjuna Chari Padira',designation: 'Sr.Manager',info: 'Lead and manage a team of employees, providing guidance and support as needed. Ensure that projects are completed on time, within budget, and to the required quality standards. Collaborate with other departments and stakeholders to ensure that business needs are being met.'},
    {imglink:'../../assets/imges/team/Bava1.png',name:'Jayendra Mallavarapu',designation: 'Solution Architect',info: ''},
    {imglink:'../../assets/imges/team/Jai1.png',name:'Jaya Kiran Reddy Konkala',designation: 'Manager',info: ''},
    {imglink:'../../assets/imges/team/anusha1.png',name:'Anoosha S',designation: 'Recruiter',info: ''},
    {imglink:'../../assets/imges/team/Ashu1.png',name:'Ashwitha Reddy',designation: 'Data Engineer',info: ''},
    {imglink:'../../assets/imges/team/Ravi1.png',name:'Ravindra Samala',designation: 'Senior Developer',info: ''},
    {imglink:'../../assets/imges/team/Poojith1.png',name:'Poojith Potluti',designation: 'Devops Engineer',info: ''},
    {imglink:'../../assets/imges/team/kalyan1.png',name:'Sai Kalyan V',designation: 'Data Engineer',info: ''},
  ]

}
