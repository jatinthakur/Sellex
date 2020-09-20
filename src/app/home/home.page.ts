import { Component } from '@angular/core';
import { Items } from './home.model';
//import { ActivatedRoute } from '@angular/router/src/router_state';
import { Router } from '@angular/router'
import { ItemserviceService } from 'src/app/itemservice.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: Items[] = [];

  constructor(
    private router: Router, private itemserve: ItemserviceService
  ) { }
  ngOnInit() {
    // this.items=this.itemserve.getItems();
    // this.itemserve.shoppingSubject.subscribe((newitems:Items[])=>{
    //   this.items=newitems;
    // });
    this.itemserve.items.subscribe((itemsfetched) => {
      this.items = itemsfetched;
    })
  }

  ionViewWillEnter() {
    this.itemserve.fetchItems().subscribe();
  }

  onDetail(id: number) {
    //console.log('id',id);
    this.router.navigate(["/detail", id]);
  }


}
