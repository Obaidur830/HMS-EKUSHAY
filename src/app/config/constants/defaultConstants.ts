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
            url: 'accounting',
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
export const accountingConstant = [
    {
        name: 'Hall Income',
        url: 'income'
     },

     {
       name: 'Hall Expense',
       url: 'expense'
    },
    {
       name: 'Protibedon',
       url: 'protibedon'
    }
];
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
// export const noticeBoardConstant = {
//     noticeBoard: {
//         name: 'Notice Board',
//         url: 'notice-board',
//         icon: 'emoji_flags'
//      },
//      notice: {
//         name: 'Notice',
//         url: 'notice',
//         icon: 'emoji_flags'
//      }
// };
export const toolbarButtons = [
    {
        name: 'All-Notice',
        url: 'notice',
        icon: 'inbox'
    },
    {
        name: 'Notice-Board',
        url: 'notice-board',
        icon: 'send'
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
export const feeStatus = [
    'pending', 'completed'
];

export const residentialStatus = [
    'Residential', 'Non-Residential'
];
export const classYearSemesters = [
   '1st year - 1st semester', '1st year - 2nd semester', '2nd year - 1st semester', '2nd year - 2nd semester',
   ' 3rd year - 1st semester', '3rd year - 2nd semester', '4th year - 1st semester', '4th year - 2nd semester',
   'masters - 1st semester', 'masters - 2nd semester', 'masters - 3rd semester'
];

export const nationalities = [
    'Afghan', 'Albanian', 'Algerian', 'American', 'Andorran', 'Angolan', 'Antiguans', 'Argentinean', 'Armenian', 'Australian',
    'Austrian', 'Azerbaijani', 'Bahamian', 'Bahraini', 'Bangladeshi', 'Barbadian', 'Barbudans', 'Batswana', 'Belarusian',
    'Belgian', 'Belizean', 'Beninese', 'Bhutanese', 'Bolivian', 'Bosnian', 'Brazilian', 'British', 'Bruneian', 'Bulgarian',
    'Burkinabe', 'Burmese', 'Burundian', 'Cambodian', 'Cameroonian', 'Canadian', 'Cape Verdean', 'Central African', 'Chadian',
    'Chilean', 'Chinese', 'Colombian', 'Comoran', 'Congolese', 'Costa Rican', 'Croatian', 'Cuban',
    'Cypriot', 'Czech', 'Danish', 'Djibouti', 'Dominican', 'Dutch', 'East Timorese', 'Ecuadorean', 'Egyptian', 'Emirian',
    'Equatorial Guinean', 'Eritrean', 'Estonian', 'Ethiopian', 'Fijian', 'Filipino', 'Finnish', 'French', 'Gabonese', 'Gambian', 'Georgian',
    'German', 'Ghanaian', 'Greek', 'Grenadian', 'Guatemalan', 'Guinea-Bissauan', 'Guinean', 'Guyanese', 'Haitian',
    // tslint:disable-next-line: max-line-length
    'Herzegovinian', 'Honduran', 'Hungarian', 'I-Kiribati', 'Icelander', 'Indian', 'Indonesian', 'Iranian', 'Iraqi', 'Irish', 'Israeli', 'Italian', 'Ivorian', 'Jamaican', 'Japanese', 'Jordanian', 'Kazakhstani', 'Kenyan',
    // tslint:disable-next-line: max-line-length
    'Kittian and Nevisian', 'Kuwaiti', 'Kyrgyz', 'Laotian', 'Latvia', 'Lebanes', 'Liberia', 'Libya', 'Liechtensteine', 'Lithuania', 'Luxembourge', 'Macedonia',
    'Malagas', 'Malawia', 'Malaysia', 'Maldivia', 'Malia', 'Maltes', 'Marshalles', 'Mauritania', 'Mauritia', 'Mexica', 'Micronesia',
    'Moldova', 'Monaca', 'Mongolia', 'Morocca', 'Mosoth', 'Motswan', 'Mozambica', 'Namibia', 'Naurua',
    'Nepales', 'New Zealande', 'Ni-Vanuat', 'Nicaragua', 'Nigeria', 'Nigerie', 'North Korea', 'Northern Iris', 'Norwegia', 'Oman',
    'Pakistan', 'Palaua',  'Panamania',  'Papua New Guinea',  'Paraguaya', 'Peruvia', 'Polis', 'Portugues', 'Qatar', 'Romania', 'Russia',
    'Rwanda',  'Saint Lucia', 'Salvadora', 'Samoa', 'San Marines', 'Sao Tomea', 'Saud', 'Scottis', 'Senegales',
    'Serbia', 'Seychelloi', 'Sierra Leonea', 'Singaporea', 'Slovakia', 'Slovenia', 'Solomon Islande', 'Somal',
    // tslint:disable-next-line: max-line-length
    'South Africa', 'South Korea', 'Spanis', 'Sri Lanka', 'Sudanes', 'Suriname', 'Swaz', 'Swedis', 'Swis', 'Syria', 'Taiwanes', 'Taji', 'Tanzania', 'Tha',
    'Togoles', 'Tonga', 'Trinidadian or Tobagonia', 'Tunisia', 'Turkis', 'Tuvalua', 'Uganda', 'Ukrainia', 'Uruguaya', 'Uzbekistan',
    'Venezuela', 'Vietnames', 'Wels', 'Yemenit', 'Zambia', 'Zimbabwea'
];
