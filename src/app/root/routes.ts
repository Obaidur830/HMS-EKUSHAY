import { Routes } from '@angular/router';
import { AnonymousComponent } from './anonymous/anonymous.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularFireAuthGuard, loggedIn, canActivate } from '@angular/fire/auth-guard';
import { AuthguardService } from '../core/security-service/authguard.service';
import { AdminguardGuard } from '../core/security-service/adminguard.guard';
export const routes: Routes = [
	{
		path: '',
		redirectTo: 'authentication',
		pathMatch: 'full'
	},
	{
		path: '',
		component: NavbarComponent,
		children: [
			{
				path: 'shopping-cart',
				loadChildren: '../shopping-cart/shopping-cart.module#ShoppingCartModule',
				canActivate: [AuthguardService]
			},
			{
				path: 'profile',
				loadChildren: '../profile/profile.module#ProfileModule',
				canActivate: [AuthguardService]
			},
			{
				path: 'notice-board',
				loadChildren: '../notice-board/notice-board.module#NoticeBoardModule',
				//canActivate: [AuthguardService]
			},
			{
				path: 'notice',
				loadChildren: '../notice/notice.module#NoticeModule',
				//canActivate: [AuthguardService]
			},
			{
				path: 'home',
				loadChildren: '../home/home.module#HomeModule',
				canActivate: [AuthguardService]
			},
			{
				path: 'student',
				loadChildren: '../student/student.module#StudentModule',
				canActivate: [AuthguardService]
			},
			{
				path: 'product',
				loadChildren: '../product/product.module#ProductModule',
				canActivate: [AuthguardService]
			},
			{
				path: 'employee',
				loadChildren: '../employee/employee.module#EmployeeModule',
				canActivate: [AuthguardService]
			},
			{
				path: 'asset',
				loadChildren: '../store/store.module#StoreModule',
				canActivate: [AuthguardService]
			},
			{
				path: 'accounting',
				loadChildren: '../accounting/accounting.module#AccountingModule',
				canActivate: [AuthguardService]
			},
			{
				path: 'leave',
				loadChildren: '../leave/leave.module#LeaveModule',
				canActivate: [AuthguardService]
			},
			{
				path: 'notification',
				loadChildren: '../notification/notification.module#NotificationModule',
				canActivate: [AuthguardService]
			},
			{
				path: 'residence',
				loadChildren: '../room/room.module#RoomModule',
				canActivate: [AuthguardService]
			},
			{
				path: 'admin',
				loadChildren: '../admin/admin.module#AdminModule',
				canActivate: [AuthguardService, AdminguardGuard]

			},
			{
				path: 'category',
				loadChildren: '../category/category.module#CategoryModule',
				canActivate: [AuthguardService, AdminguardGuard]

			},
			{
				path: 'purchase',
				loadChildren: '../purchase/purchase.module#PurchaseModule',
				canActivate: [AuthguardService]

			}
		]
	},
	
	{
		path: '',
		component: AnonymousComponent,
		children: [
			{
				path: 'authentication',
				loadChildren: '../authentication/authentication.module#AuthenticationModule',

			}
		]
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];
