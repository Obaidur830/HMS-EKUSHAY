export interface Navbar {
    name: string;
    url: string;
}

export interface Snackbar {
    duration?: number;
    data: SnackbarData;
    horizontalPosition?: MatSnackBarHorizontalPosition;
    verticalPosition?: MatSnackBarVerticalPosition;
    panelClass?: string[];
}
interface SnackbarData {
    message: string;
    isAccepted?: any;
}
export declare type MatSnackBarHorizontalPosition = 'start' | 'center' | 'end' | 'left' | 'right';
export declare type MatSnackBarVerticalPosition = 'top' | 'bottom';
export declare type acceptance = 'default' | true | false;
