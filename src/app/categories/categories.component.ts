import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
 
  categoriesForm : FormGroup |any;

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private api: ApiService,private toastr: ToastrService) { }

  cards = [
    {
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },

  ];


  ngOnInit(): void {
    this.categoriesForm = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, Validators.email]),
      product: new FormControl('', [Validators.required,]),
      
    },
   
    );
  }

  // oncategoriesubmit() {
  //   this.http.post<any>("http://localhost:3000/need", this.categoriesForm.value).subscribe(res => {
  //     alert("signup Succesfully");
  //     this.categoriesForm.reset();
      
  //   }, err => {
  //     alert("error");
  //   }
  //   )
  // }

  oncategoriesubmit(){
    if(this.categoriesForm.valid){
      this.api.postCategories(this.categoriesForm.value)
      .subscribe({
        next:(res)=>{
          this.toastr.success('details added successfully', 'successfully', { timeOut: 2000, });
          this.categoriesForm.reset();
         },
         error: () => {
          this.toastr.error('error while adding  the data', 'error', { timeOut: 2000, });
         }
      })
    }
  }

}
