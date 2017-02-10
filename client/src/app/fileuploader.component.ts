import { Component, OnInit } from '@angular/core';
//import { bootstrap } from "angular2/platform/browser";

@Component({
  selector: 'app-fileuploader',
  template: `
<input type="file" name="file" (change)="fileChangeEvent($event)" placeholder="Upload file..." />
<button type="button" (click)="upload()">Upload</button>
  `,
  styles: []
})
export class FileuploaderComponent implements OnInit {

  ngOnInit() {
  }

  filesToUpload: Array<File>;
 
    constructor() {
        this.filesToUpload = [];
    }
 
    upload() {
        this.makeFileRequest("http://localhost:4201/fileuploader", [], this.filesToUpload).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }
 
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
    }
 
    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }

}
