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
    registrationNumber: string;
    fullName: string;
    fathersName: string;
    mothersName: string;
    nationality: string;
    religion: string;
    gender: string;
    dateOfBirth: string;
    email: string;
    mobile: string;
    isResidential: string;
    addmisionFeeStatus: string;
    residenceFeeStatus: string;
    department: string;
    hireDate: string;
    city: string;
    district: string;
    subDistrict: string;
    union: string;
    subject: string;
    classYearSemester: string;
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
export interface LeaveInformation {
    fullName: string;
    email: string;
    mobile: string;
    city: string;
    gender: string;
    department: string;
    hireDate: string;
    isPermanent: boolean;
}

export interface FileUpload {
    key?: string;
    name: string;
    url: string;
    file: File;

    // constructor(file: File) {
    //   this.file = file;
    // }
  }
export interface FileDetails {
    key?: string;
    name: string;
    type?: string;
    path: string;
    url: string;
    modifiedDate?: number;
    fileDescription?: string;
    publisherName?: string;
  }
export interface District {
   model: string;
   pk: number;
   fields: DistrictFields ;
}
export interface DistrictFields {
    name: string;
    division: number;
}

export interface SubDistrict {
    model: string;
    pk: number;
    fields: SubDistrictFields ;
}
export interface SubDistrictFields {
    name: string;
    district: number;
}
export interface Union {
    model: string;
    pk: number;
    fields: UnionFields ;
}
export interface UnionFields {
    name: string;
    sub_district: number;
}
