import { Roles } from '../enums/default.enum';
import { Place } from './place.interface';

export interface UserInformation {
    password: string;
    email: string;
    displayName?: string;
    metaData?: CustomerUserInformation;

}

export interface CustomerUserInformation {
    uid?: string;
    name?: string;
    email: string;
    role: Roles[];
    phoneNumber?: string;
    ratings?: number;
    homeAddress?: Place;
    shopAddress?: Place;
    enquiryLimit?: number;
    photoURL?: string;
}

// tslint:disable-next-line: class-name
export interface firebaseUserInformation {
    displayName?: string;
    email?: string;
    emailVerified?: string;
    isAnonymous?: string;
    metadata?: string;
    phoneNumber?: string;
    photoURL?: string;
    providerData?: string;
    providerId?: string;
    refreshToken?: string;
    uid?: string;
}

export interface StudentInformation {
    fullName: string;
    email: string;
    mobile: string;
    city: string;
    gender: string;
    department: string;
    hireDate: string;
    isPermanent: boolean;
}

export interface EmployeeInformation {
    fullName: string;
    email: string;
    mobile: string;
    city: string;
    gender: string;
    department: string;
    hireDate: string;
    isPermanent: boolean;
}

export interface AssetInformation {
    fullName: string;
    email: string;
    mobile: string;
    city: string;
    gender: string;
    department: string;
    hireDate: string;
    isPermanent: boolean;
}
export interface TransactionInformation {
    fullName: string;
    email: string;
    mobile: string;
    city: string;
    gender: string;
    department: string;
    hireDate: string;
    isPermanent: boolean;
}
export interface ResidentialRoomInformation {
    fullName: string;
    email: string;
    mobile: string;
    city: string;
    gender: string;
    department: string;
    hireDate: string;
    isPermanent: boolean;
}
export interface ResidentialBlockInformation {
    fullName: string;
    email: string;
    mobile: string;
    city: string;
    gender: string;
    department: string;
    hireDate: string;
    isPermanent: boolean;
}

export interface NotificationInformation {
    fullName: string;
    email: string;
    mobile: string;
    city: string;
    gender: string;
    department: string;
    hireDate: string;
    isPermanent: boolean;
}
