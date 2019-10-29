export const defaultConst = {
    sidebarforcustomersupplier: [
        {
            name: 'Dashboard',
            url: 'home',
            icon: 'home'
        },
        // {
        //     name: 'Product',
        //     url: 'product',
        //     icon: 'weekend'
        // },
        {
            name: 'Student',
            url: 'student',
            icon: 'wc'
        },
        {
            name: 'Employee',
            url: 'employee',
            icon: 'emoji_people'
        },
        {
            name: 'Asset',
            url: 'asset',
            icon: 'store'
        },
        {
            name: 'Accounting',
            url: 'transaction',
            icon: 'account_tree'
        },
        {
            name: 'Leave',
            url: 'leave',
            icon: 'flight_takeoff'
        },
        {
            name: 'Notification',
            url: 'notification',
            icon: 'notification_important'
        },
        {
            name: 'Residence',
            // residence can not be changed as it used in nav bar component
            // directly. if you change, change in navbar and routes.ts
            url: 'residence',
            icon: 'school'
        }
    ],
    sidebar: [
        {
            name: 'Admin Panel',
            url: 'admin',
            icon: 'security'
        },
        {
            name: 'Student',
            url: 'student',
            icon: 'wc'
        },
        {
            name: 'Product',
            url: 'product',
            icon: 'weekend'
        },
        {
           name: 'Enquiry',
           url: 'enquiry',
           icon: 'contact_support'
        },
        {
            name: 'Category',
            url: 'category',
            icon: 'widgets'
        },
        {
            name: 'Purchase',
            url: 'purchase',
            icon: 'shopping_cart'
        }
    ],
    menu: {
        profile: {
            name: 'My Profile',
            url: 'profile'
        },
        logout: {
            name: 'Logout',
            url: 'sign-in'
        }
    },
    username: {
        name: 'Login',
        url: 'authentication/sign-in'
    },
    siteName: {
        name: 'HMS-EKUSHAY',
        url: 'https://oshop-e9657.firebaseapp.com/'
    },
    defaultEnquiryLimit: 5,
    defaultRatings: 50,
    defaultPhonenumberCode: 'bd',
    emailsent: 'Email sent successfully',
    checkEmail: 'Verification email sent'
};
export const residentialConstant = [
     {
         name: 'Residential Student',
         url: 'student'
      },

      {
        name: 'Residential Room',
        url: 'room'
     },
     {
        name: 'Residential Block',
        url: 'block'
     }
];
export const signinErrorCode = {
    'Invalid Email': {
        code: 'auth/invalid-email',
        message: 'Enter valid email address'
    },
    'User Disabled': {
        code: 'auth/user-disabled',
        message: 'Account with the corresponding email is disabled'
    },
    'User not found': {
        code: 'auth/user-not-found',
        message: 'No such user found with the corresponding email'
    },
    'Wrong password': {
        code: 'auth/wrong-password',
        message: 'Password does not match'
    }
};

export const recoverAccountCode = {
    'Invalid Email': {
        code: 'auth/invalid-email',
        message: 'Enter valid email address'
    },
    'User not found': {
        code: 'auth/user-not-found',
        message: 'No such email is registered'
    }
};

export const signupErrorCodes = {
    'Email Already in use': {
        code: 'auth/email-already-in-use',
        message: 'This email is taken'
    },
    'Invalid Email': {
        code: 'auth/invalid-email',
        message: 'Enter valid email address'
    },
    'Invalid Operation': {
        code: 'auth/operation-not-allowed',
        message: 'Site do not have permission'
    },
    'Weak Password': {
        code: 'auth/weak-password',
        message: 'Password is too weak'
    }

};

// export const passwordRegex='/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm';
export const passwordRegex = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$';

// This can vary if routes are changed in module so maintain consistency
export const urlPaths = {
    Authentication: {
        Signin: {
            url: 'authentication/sign-in'
        },
        Signup: {
            url: 'authentication/sign-up'
        },
        AccountRecovery: {
            url: 'authentication/account-recovery'
        }
    },
    Student: {
        StudentList: {
           url: 'student'
        }
    },
    Product: {
        ProductList: {
            url: 'product'
        }
    },
};

