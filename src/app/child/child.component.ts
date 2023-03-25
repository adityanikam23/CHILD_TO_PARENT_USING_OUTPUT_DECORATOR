import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {


  @Output() messagesent = new EventEmitter<any>();

  inputone:any;
  inputtwo:any;
  inputthree:any;
  inputfour:any;
  // allinput:any;


  

   allinput:any = {first:"", last:"", email:"", number:""};

  clicked(){

     this.allinput = {first:this.inputone, last:this.inputtwo, email:this.inputthree, number:this.inputfour};
     console.log(this.allinput);
     

     this.messagesent.emit(this.allinput);
     console.log(this.messagesent);
     
     
     this.allinput = {first:"", last:"", email:"", number:""};
  

}
}
