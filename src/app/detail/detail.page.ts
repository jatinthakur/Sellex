import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ItemserviceService } from 'src/app/itemservice.service';
import { Items } from 'src/app/home/home.model';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  itemDetail: Items;

  constructor(private route: ActivatedRoute, private router: Router, private itemserve: ItemserviceService, private loadingctrl: LoadingController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(path => {
      if (!path.has('Id')) {
        this.router.navigate(["/home"]);
        return;
      }

      let id = path.get('Id');
      // console.log(id);

      this.itemserve.getItem(id).subscribe((singleitem) => {
        this.itemDetail = singleitem;
        //     console.log('itemDetail', this.itemDetail);
      });
      // console.log(this.itemDetail);
    })
  }
  addtocart() {
    this.loadingctrl.create({
      message: 'Adding. . .',
      duration: 5000
    }).then((loading) => {
      loading.present();
      this.itemserve.addItemToCart(this.itemDetail).subscribe(() => {
        this.loadingctrl.dismiss();
        this.router.navigate(['/cart']);
      });
    });
  }
}
