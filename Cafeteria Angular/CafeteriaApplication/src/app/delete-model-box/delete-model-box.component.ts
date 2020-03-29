import { DialogData } from './../panel/category-admin/category-admin.component';
import { Component, OnInit, Input, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-model-box',
  templateUrl: './delete-model-box.component.html',
  styleUrls: ['./delete-model-box.component.css']
})
export class DeleteModelBoxComponent implements OnInit {

  @Input()ID:any;
  @Input()message:string;
  constructor(public dialogRef: MatDialogRef<DeleteModelBoxComponent>,@Inject(MAT_DIALOG_DATA) public data: any ) { 
    
  }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close({status:false,data:null});
  }
  onYesClick():void{
    this.dialogRef.close({status:true,data:this.data});
    

  }


}
