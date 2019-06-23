import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import { Response } from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name:string;
  private age:number;
  private email:string;
  private isEditable:boolean = true;
  
  
    //===============================================
    // Declare Dictionary
    //===============================================  
  private address:{
    street:string,
    city:string,
    province:string,
    postcode:string
  }
    //===============================================
    // Declare array of interface
    //===============================================  
  private TodoList:Todo[];
    //===============================================
    // Declare Array
    //===============================================  
  private skills:string[];

    //===============================================
    // Constructure for call service
    //===============================================  
  constructor(private TodoService: TodoService) { }     // Need to import todoService 1) create service file 2) import 3) add constructor => Better to use ngOnInit

    //===============================================
    // EVENT: On Init
    //===============================================  
  ngOnInit() {
    this.name = "Traitet test1"
    this.age = 39
    this.email = "traitet@gmail.com"
    this.address = {
      street: "3761/334",
      city: "Ratburana",
      province:"Bangkok",
      postcode:"10140"

     
    }

    //===============================================
    // CALL SERVICE
    //===============================================  
    this.TodoService.getTodoList().subscribe((response)=>{this.TodoList = response;})
    //===============================================
    // Add Array of String
    //===============================================  
    this.skills = ["Programming","ITILS","Tennis"];
  }

    //===============================================
    // Function: add skill
    //===============================================    
  addSkill(skill){
    this.skills.unshift(skill);
    return false;
  }

    //===============================================
    // Function: Remove skill
    //===============================================    
    removeSkill(skill){
    this.skills.forEach((element,index) => {
      if (element == skill){
        this.skills.splice(index,1);
      }
    });
    }

    //===============================================
    // Function: TOGGLE FOR EDIT
    //===============================================  
    toggleEdit(){
      //this.isEditable = false
     this.isEditable =! this.isEditable
      }
   
  




}

    //===============================================
    // Model from API
    //===============================================    
    interface Todo {
      userId: number;
      id: number;
      title: string;
      completed: boolean;
  }
