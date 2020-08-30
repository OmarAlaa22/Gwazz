import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { MemberComponent } from './member/member.component';
import { FavouriteListComponent } from './Favourite-List/Favourite-List.component';
import { MessageComponent } from './Message/Message.component';
import { AuthGuard } from './guard/auth.guard';
export const  appRoutes:Routes=[

{path:'',component:HomeComponent},
{
    path:'',
runGuardsAndResolvers:'always',
canActivate:[AuthGuard],
children:[

    {path:'member',component:MemberComponent},
    {path:'fav',component:FavouriteListComponent},
    {path:'message',component:MessageComponent},
]


},

{path:'home',component:HomeComponent},

{path:'**',redirectTo:'home',pathMatch:'full'},




];