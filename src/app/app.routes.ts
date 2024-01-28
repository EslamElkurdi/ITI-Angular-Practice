import { Routes } from '@angular/router';
import { OrderComponent } from './components/order/order/order.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [

  {path:'', redirectTo:'Home',pathMatch:'full'},
  {path:'Home', component: HomeComponent},
  {path:'About', component: AboutUsComponent},
  {path:'Contact', component: ContactUsComponent},
  {path:'Product', component: OrderComponent},
  {path:'**', component: NotFoundComponent},
];

/*
Add routing to your Project:

add the following links and components:

Home (static page with any data)

About us (static page with any data)

Contact us (static page with any data)

Products (that opens Shopping cart component).///

Default route, when user writes no route, redirects to /home route

A Component to handle any wrong routes that when user writes a route that isn’t exist (Wildcard route).

Remember to:

Add your routes to routes variable in app.routes.ts.

Is the order of the routes in the configuration matters? Why?

The router uses first-match wins strategy when matching routes, explain that?

Add the <router-outlet> in the component which you’ll display the components you navigate to it.

Change the links and add routerLink attribute.

In all links add RouterLinkActive

Why??

*/
