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
    role: string;
    phoneNumber?: string;
    homeAddress?: Place;
    presentAddress?: Place;
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
    isResidential: boolean;
    addmissionFeeStatus: string;
    residenceFeeStatus: string;
    // department: string;
    // hireDate: string;
    comment: string;
    // city: string;
    district: string;
    subDistrict: string;
    union: string;
    postCode: string;
    subject: string;
    classYearSemester: string;
    session: string;
    roll: string;
    cgpa: string;
    roomNo: string;
    roomApprovalStatus: string;
    reAddmissionYear: string;
    alumni: string;
}

export interface SeatApplicationInformation {
    registrationNumber: string;
    fullName: string;
    subject: string;
    classYearSemester: string;
    session: string;
    roll: string;
    cgpa: string;
    roomNo: string;
    roomApprovalStatus: string;
    reason: string;
    appliedDate: Date;
    approvedBy: string;
    monthlyIncome: string;
    presentAddress: string;
}

export interface EmployeeInformation {
    employeeId: number;
    fullName: string;
    nationality: string;
    religion: string;
    gender: string;
    dateOfBirth: string;
    district: string;
    subDistrict: string;
    union: string;
    postCode: string;
    email: string;
    mobile: string;
    jobTitle: string;
    department: string;
    joiningDate: string;
    isResidential: string;
    eventParticipation: string;

}

export interface LeaveInformation {

    leaveType: string;
    startDate: string;
    endDate: string;
    reason: string;
    employeeId: string;
    employeeName: string;
    employeeDesignation: string;
    numberOfDays: number;
    approvalStatus: string;
    appliedDate: Date;
    approvedBy: string;
}

export interface AssetInformation {
    assetId: string;
    assetName: string;
    category: string;
    location: string;
    condition: string;
    dateOfPurchase: string;
    quantity: number;
    price: number;
    aboutAsset: string;
}
export interface TransactionInformation {
    transactionId: number;
    transactionType: string;
    categoryName: string;
    subCategoryName: string;
    amount: number;
    dateOfTransaction: string;
    editDate: string;
    comment: string;
    checkNo: string;
    // editedBy: string;
}
export interface PdfTransactionInformation {
    transactionId: number;
    transactionType: string;
    categoryName: string;
    subCategoryName: string;
    amount: number;
    dateOfTransaction: string;
    editDate: string;
    comment: string;
    checkNo: string;
    dateOfTransactionStr: string;
    // editedBy: string;
}
export interface Category {
    id: number;
    name: string;
}

export interface SubCategory {
    id: number;
    name: string;
    parentCategoryId: number;
}

export interface ResidentialRoomInformation {
    roomNo: string;
    blockName: string;
    capacity: number;
    responsibleTeacherName: string;
}
export interface ResidentialBlockInformation {
    blockName: string;
    location: string;
    numberOfRooms: number;
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
    fields: DistrictFields;
}
export interface DistrictFields {
    name: string;
    division: number;
}

export interface SubDistrict {
    model: string;
    pk: number;
    fields: SubDistrictFields;
}
export interface SubDistrictFields {
    name: string;
    district: number;
}
export interface Union {
    model: string;
    pk: number;
    fields: UnionFields;
}
export interface UnionFields {
    name: string;
    sub_district: number;
}
