import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    
  model={
    Username:"",
    Email:"",
    password:""
    
  };
location:any={};


  constructor(private provider:ProviderService) {
    this.provider.getUser()
    .subscribe(
      (r)=>{
        console.log("venez voir",r);
        this.location=r;
      },(e)=>{
        console.log("regarde")
      }
    )
   }
  ngOnInit(): void {
  }

  validation(){
    alert("c'est bon");
  }

}