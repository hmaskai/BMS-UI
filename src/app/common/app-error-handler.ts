import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(error: any){
        //TODO: replace with toast
        alert('An unexpected error occurred');
        //TODO: log to server
        console.log(error);
    }
}