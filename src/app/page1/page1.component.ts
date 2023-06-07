import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  
  tabs = [
    {
      title:"Branding",
      subtitle:"Zoik agency",
      link:"assets/images/projects/nikhil-KO4io-eCAXA-unsplash.jpg",
    },
    {
      title:"Photography",
      subtitle:"The Watch",
      link:"assets/images/projects/the-5th-IQYR7N67dhM-unsplash.jpg",
    },
    {
      title:"Website",
      subtitle:"Polo",
      link:"assets/images/projects/true-agency-9Bjog5FZ-oc-unsplash.jpg",
    },
  ];

  loading=false;
  title = 'olivia';
  time=0;
  btnClick(){
    this.time++;
  }

  constructor (){
    setTimeout(()=>{
      console.log("constructor");
      this.loading=false;
    },1000*0);
  
  
  
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
  //constructor() { }

  //ngOnInit(): void {
 // }


//}


