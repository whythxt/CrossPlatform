import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {
  data: any = [];
  data_users: any = [];

  showDetails: boolean[] = new Array(1000).fill(false);
  dataUrl = 'https://api.jsonbin.io/v3/b/65eb25a0dc74654018afbeba';
  loading: any;
  max: number = 0;
  min: number = 100;

  constructor(public loadingController: LoadingController) { 
    }

    async load() {
      this.data = [];
      this.data_users = [];

      this.loading = await this.loadingController.create({
        spinner: "bubbles",
        message: "Loading..."
      });

      await this.loading.present();

      fetch(this.dataUrl).then(res => res.json())
        .then(json => {
          this.data = json;
          this.data = this.data.record;
          let i = 0;
          while (this.data[i] != undefined) {
            this.data_users.push(this.data[i][0]);
            i++;
          }
          this.loading.dismiss(); 
        })
      }

      getColor(departmentInput: any): { [key: string]: string } {
        const colors: { [key: string]: string } = {};
        for (let i = 0; i < this.data_users.length; i++) {
          if (this.data_users[i]['department'] === departmentInput) {
            colors[i.toString()] = "green";
          } else {
            colors[i.toString()] = "";
          }
        }
        return colors;
      }
      

  ngOnInit() { }
}
