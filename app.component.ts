import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'toDoList';
  list:any[]=[];
  taskValue:string="";
  addTask()
  {
    if(this.taskValue.length>0)
    this.list.push({id:this.list.length,name:this.taskValue});
    this.taskValue="";
  }
  removeTask(id:number)
  {
    this.list=this.list.filter(item=>item.id!=id);
  }
}
