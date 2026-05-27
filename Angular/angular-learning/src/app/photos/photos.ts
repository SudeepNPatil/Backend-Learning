import { Component , inject,OnInit, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-photos',
  imports: [FormsModule],
  templateUrl: './photos.html',
  styleUrl: './photos.css',
})
export class Photos implements OnInit {

  http = inject(HttpClient);
  photolist= signal<any[]>([]);
  isEditMode:boolean = false;

  newphotos:any = {
    "albumId":0,
    "id": 0,
    "title": "",
    "url": "",
    "thumbnailUrl": ""
  }

  ngOnInit(): void {
    this.getallphotos();
  }

  getallphotos() {
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe((result:any)=>{
        this.photolist.set(result.slice(0,20));
    })
  }

  submitphotos(){
  this.http.post("https://jsonplaceholder.typicode.com/photos",this.newphotos).subscribe((result:any)=>{
    alert("Photo added successfully");
  });
  
  }

  editphotos(photos:any){
    this.newphotos = photos;
    this.isEditMode = true;
  }

  deletephotos(id:number){
    this.http.delete("https://jsonplaceholder.typicode.com/photos/"+id).subscribe((result:any)=>{
      alert("Photo deleted successfully");
    });
  }

  updatephotos(){
    this.http.put("https://jsonplaceholder.typicode.com/photos/"+this.newphotos.id,this.newphotos).subscribe((result:any)=>{
      alert("Photo updated successfully");
    });
  }

}
