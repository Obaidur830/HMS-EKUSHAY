import { Routes } from '@angular/router';
import { SignInComponent } from 'src/app/authentication/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/authentication/components/sign-up/sign-up.component';
import { AccountRecoveryComponent } from 'src/app/authentication/components/account-recovery/account-recovery.component';
import { CategoryDefaultComponent } from 'src/app/category/components/category-default/category-default.component';
import { AdminDefaultComponent } from 'src/app/admin/components/admin-default/admin-default.component';
import { EnquiryDefaultComponent } from 'src/app/enquiry/components/enquiry-default/enquiry-default.component';
import { ProductDefaultComponent } from 'src/app/product/components/product-default/product-default.component';
import { ProfileDefaultComponent } from 'src/app/profile/components/profile-default/profile-default.component';
import { PurchaseDefaultComponent } from 'src/app/purchase/components/purchase-default/purchase-default.component';
import { ShoppingCartDefaultComponent } from 'src/app/shopping-cart/shopping-cart-default/shopping-cart-default.component';
import { OrderSuccessComponent } from 'src/app/shopping-cart/order-success/order-success.component';
import { StudentListComponent } from 'src/app/student/components/student-list/student-list.component';
import { EmployeeListComponent } from 'src/app/employee/components/employee-list/employee-list.component';
import { AssetListComponent } from 'src/app/store/components/asset-list/asset-list.component';
import { TransactionListComponent } from 'src/app/accounting/components/transaction-list/transaction-list.component';
import { DefaultHomeComponent } from 'src/app/home/components/default-home/default-home.component';
import { NotificationListComponent } from 'src/app/notification/components/notification-list/notification-list.component';
import { DefaultResidencePageComponent } from 'src/app/room/components/default-residence-page/default-residence-page.component';
import { ResidenceStudentListComponent } from 'src/app/room/components/residence-student-list/residence-student-list.component';
import { RoomListComponent } from 'src/app/room/components/room-list/room-list.component';
import { BlockListComponent } from 'src/app/room/components/block-list/block-list.component';
import { LeaveListComponent } from 'src/app/leave/components/leave-list/leave-list.component';
import { UploaderComponent } from 'src/app/notice-board/components/uploader/uploader.component';
import { ListUploadComponent } from 'src/app/notice/components/list-upload/list-upload.component';
import { DefaultAccountingPageComponent } from 'src/app/accounting/components/default-accounting-page/default-accounting-page.component';
import { ExpenseListComponent } from 'src/app/accounting/components/expense-list/expense-list.component';
import { ProtibedonListComponent } from 'src/app/accounting/components/protibedon-list/protibedon-list.component';
import { SeatApplicationListComponent } from 'src/app/seat-application/components/seat-application-list/seat-application-list.component';
import { RoomWiseStudentListComponent } from 'src/app/room/components/room-wise-student-list/room-wise-student-list.component';

export const authenticationRoutes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'account-recovery',
    component: AccountRecoveryComponent
  }
];

export const categoryRoutes: Routes = [
  {
    path: '',
    component: CategoryDefaultComponent
  }
];

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminDefaultComponent
  }
];

export const enquiryRoutes: Routes = [
  {
    path: '',
    component: EnquiryDefaultComponent
  }
];
export const productRoutes: Routes = [
  {
    path: '',
    component: ProductDefaultComponent
  }
];
export const homeRoutes: Routes = [
  {
    path: '',
    component: DefaultHomeComponent
  }
];
export const studentRoutes: Routes = [
  {
    path: '',
    component: StudentListComponent
  }
];

export const employeeRoutes: Routes = [
  {
    path: '',
    component: EmployeeListComponent
  }
];

export const assetRoutes: Routes = [
  {
    path: '',
    component: AssetListComponent
  }
];
export const accountingRoutes: Routes = [
  {
    path: '',
    component: DefaultAccountingPageComponent,
    children: [
      {
        path: '',
        // component: ResidenceStudentListComponent
        redirectTo: 'income'
      },
      {
        path: 'income',
        component: TransactionListComponent
      },
      {
        path: 'expense',
        component: ExpenseListComponent
      },
      {
        path: 'protibedon',
        component: ProtibedonListComponent
      }
    ]


}];
export const leaveRoutes: Routes = [
  {
    path: '',
    component: LeaveListComponent
  }
];

export const seatApplicationRoutes: Routes = [
  {
    path: '',
    component: SeatApplicationListComponent
  }
];
export const notificationRoutes: Routes = [
  {
    path: '',
    component: NotificationListComponent
  }
];
export const residenceRoutes: Routes = [
  {
    path: '',
    component: DefaultResidencePageComponent,
    children: [
      {
        path: '',
        // component: ResidenceStudentListComponent
        redirectTo: 'seat-application'
      },
      {
        path: 'seat-application',
        component: ResidenceStudentListComponent
      },
      {
        path: 'room-wise-student',
        component: RoomWiseStudentListComponent
      },
      {
        path: 'room',
        component: RoomListComponent
      },
      {
        path: 'block',
        component: BlockListComponent
      }
    ]


}];
export const profileRoutes: Routes = [
  {
    path: '',
    component: ProfileDefaultComponent
  }
];
export const noticeBoardRoutes: Routes = [
  {
    path: '',
    component: UploaderComponent
  }
];
export const noticeRoutes: Routes = [
  {
    path: '',
    component: ListUploadComponent
  }
];
export const purchaseRoutes: Routes = [
  {
    path: '',
    component: PurchaseDefaultComponent
  }
];

export const shoppingcartRoutes: Routes = [
  {
    path: '',
    component: ShoppingCartDefaultComponent
  },
  {
    path: 'order',
    component: OrderSuccessComponent,

  }
];

