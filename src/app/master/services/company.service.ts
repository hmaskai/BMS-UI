import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class CompanyService extends DataService {
  
  constructor(http: Http) {
    super('http://localhost:8080/master/company', http);
  }
  
}
