import { Injectable, Injector } from '@angular/core';


import { from, Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { HttpRequest, HttpErrorResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Key } from 'protractor';
@Injectable()
export class ErrorInterseptor implements HttpInterceptor {
intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    return next.handle(req).pipe(
        catchError (error =>{
            if( error instanceof HttpErrorResponse){

                const applicationerror=error.headers.get("Application-Error");
                if(applicationerror){

                    console.error(applicationerror);
                    return throwError(applicationerror);
                }
                const servererror=error.error;
                        let modalstateerror ='';
                        if (servererror && typeof servererror === 'object') {
                            const errors = servererror.errors;
                            for (const key in errors) {
                                if (Array.isArray(errors[key])) {
                                    modalstateerror += errors[key].join('\n');
                                    }
                                }
                           }
                if(error.status===401){
                    return throwError(error.statusText);
                }
                return throwError(modalstateerror || servererror ||'server error');
                
            }



            
        }
        

        )
        )
}
}
export const ErrorInterseptorProvider={

    provide:HTTP_INTERCEPTORS,
    useClass:ErrorInterseptor,
    multi:true
}

