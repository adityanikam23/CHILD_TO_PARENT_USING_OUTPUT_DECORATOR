import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {


 allinput:any;


  myevent(msg:any){

    this.allinput = msg;
  } 

}
