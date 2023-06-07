import { Routes } from "@angular/router";
import { OlipageGuard } from "src/olipage.guard";
import { LoginComponent } from "./login/login.component";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";

export const routes: Routes=[
    {
        path:"",component:Page1Component,canActivate:[OlipageGuard]

        
    },
    {
    path:"page2",component:Page2Component
    },

    {
    path:"login",component:LoginComponent
    },
    {
    path:"page1",component:Page1Component
    }
];


