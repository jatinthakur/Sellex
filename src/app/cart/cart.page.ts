import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/home/home.model';
import { ItemserviceService } from 'src/app/itemservice.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

shoppingCart:Items[]=[];

  constructor(private itemservice:ItemserviceService,private alertctrl:AlertController,private router:Router) { }

  ngOnInit() {

    this.itemservice.CartItems.subscribe((cartItems)=>{
      this.shoppingCart=cartItems;
    });
    
  //   // this.itemservice.shoppingSubject.subscribe((items:Items[])=>{
  //   // this.shoppingCart=items;
  //  // console.log('cart',this.shoppingCart);
  // });
  }

  ionViewWillEnter()
  {
    this.itemservice.fetchCartItems().subscribe();
  }

  deleteItem(id:string)
  {
   // console.log('id taken',id);
    this.alertctrl.create({
    header:"Are you Sure?",
    message:"Delete item",
    buttons:[
     {
       text:"NO",
       role:'cancel'
     },
     {
       text:"YES",
       handler: ()=>{
         this.itemservice.deleteCartItem(id).subscribe((items)=>{
        // console.log('deleted',items );
         });
       }
     }
    ]
    }).then(alert=>{
      alert.present();
    })
  }

  deletefromhome(id:string)
  {
    this.itemservice.deletehomeitem(id).subscribe();
    this.router.navigate(["/home"]);
    this.itemservice.deleteCartItem(id).subscribe();
  }
}
