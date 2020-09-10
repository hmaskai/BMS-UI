import { CompanyService } from './../services/company.service';
import { BadInput } from '../../common/bad-input';
import { AppError } from './../../common/app.error';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../../common/not-found-error';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{
  companies : any[];
  constructor(private companyService: CompanyService) {}
  
  ngOnInit(){
    this.companyService.getAll()
      .subscribe(companies => this.companies = companies);
  }

  createCompany(input: HTMLFormElement){
    let company = {};

    this.companyService.create(company)
      .subscribe(
        company => {
          //TODO: write logic to create company object
          console.log(company);
        }, 
        (error: AppError) => {
          if(error instanceof BadInput){
            alert('Bad Request');
            console.log(error.originalError);
          }
          else 
            throw error;
        }
      );
  }

  updateCompany(company){
    this.companyService.update(company)
      .subscribe(
        updatedCompany => { 
          //TODO: write logic for updating company object
          console.log(this.updateCompany);
        }
      );
  }

  deleteCompany(id){
    this.companyService.delete(id)
      .subscribe(
        () => {
        //TODO: write logic for deleting company here
        }, 
        (error: AppError) => {
          if(error instanceof NotFoundError)
            alert('This company has already been deleted');
          else 
            throw error;
        }
      );
  }

}
