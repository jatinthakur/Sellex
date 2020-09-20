import { Injectable } from '@angular/core';
import { Items } from 'src/app/home/home.model';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, switchMap, take, map } from 'rxjs/operators';

interface ItemData {
  id: string,
  name: string,
  imgurl: string,
  price: number
}
@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  dummy: Items =
    {
      id: '',
      name: '',
      imgurl: '',
      price: +''
    }
  keylist: string[] = [];
  // items:Items[]=[
  //   {
  //     id:1,
  //     name: 'Drafter',
  //     imgurl: "https://rukminim1.flixcart.com/image/704/704/office-set/d/v/3/omega-1954-original-imadz44gvhzuhv8a.jpeg?q=70",
  //     price: 1100
  //   },
  //   {
  //     id:2,
  //     name: 'Dumbells',
  //     imgurl: "https://www.rogueeurope.eu/media/catalog/product/cache/5/image/1500x1500/9df78eab33525d08d6e5fb8d27136e95/r/o/rouge-dumbbells-h1_2.jpg",
  //     price: 1500
  //   }
  // ];

  //  shoppingCart: Items[] = [];

  shoppingSubject = new Subject<Items[]>();

  constructor(private http: HttpClient) { }


  // getItems()
  // {
  //   return [...this.items];
  // }

  // getItem(id: number) {
  //   return {
  //     ...this.items.find(item => { //return item with id we selected.
  //       return item.id === id;
  //     })
  //   }
  // }
  // addformitem(object:Forms)
  // {
  //   console.log(object);
  //   this.dummy.id=100;
  //   this.dummy.name=object.name;
  //   this.dummy.imgurl="https://rukminim1.flixcart.com/image/704/704/office-set/d/v/3/omega-1954-original-imadz44gvhzuhv8a.jpeg?q=70";
  //   this.dummy.price=object.price;

  //   this.items.push(this.dummy);
  //   this.shoppingSubject.next(this.items.slice());

  // }

  // addItemToCart(itemDetail: Items) {
  //   this.shoppingCart.push(itemDetail);
  //   // this.shoppingSubject.next(this.shoppingCart.slice());
  // }

  // getCartItems() {
  //   return [...this.shoppingCart];
  // }

  // deleteCartItem(id: number) {
  //   this.shoppingCart = this.shoppingCart.filter(item => {
  //     return item.id !== id;
  //   })
  //   // console.log('final',this.shoppingCart);
  //   this.shoppingSubject.next(this.shoppingCart.slice());
  // }

  private _items = new BehaviorSubject<Items[]>([]);
  private _shoppingCart = new BehaviorSubject<Items[]>([]);

  get items() {
    return this._items.asObservable();
  }
  getItem(id: string) {
    return this.http.get<Items>
      (`https://jatin-project-ee87a.firebaseio.com/itemfolder/${id}.json`)
      .pipe(map(resData => {
        // console.log('resData',resData);
        return resData;
      }))
  }
  get CartItems() {
    return this._shoppingCart.asObservable();
  }
  addItemToCart(itemDetail: Items) {
    return this.http.post<{ name: string }>(
      ' https://jatin-project-ee87a.firebaseio.com/cartfolder.json',
      {
        ...itemDetail,
        id: null
      }).pipe(switchMap(() => {
        return this.CartItems;
      }),
        take(1),
        tap(cartitems => {
          this._shoppingCart.next(cartitems.concat(itemDetail));
        })
      );
  }

  deleteCartItem(id: string) {
    return this.http.delete<Items>
      (`https://jatin-project-ee87a.firebaseio.com/cartfolder/${id}.json`).pipe(switchMap(() => {
        return this.CartItems;
      }), take(1),
        tap((cartItems) => {
          this._shoppingCart.next(cartItems.filter(item => item.id !== id));
        })
      );
  }

  addformitem(object: Items) {
    console.log(object);
    let generatedId: string;
    return this.http.post<{ name: string }>(
      ' https://jatin-project-ee87a.firebaseio.com/itemfolder.json',
      {
        ...object,
        id: null
      }).pipe(switchMap(resData => {
        console.log('resData', resData)
        generatedId = resData.name;
        console.log('items', this.items);
        return this.items;
      }),
        take(1),
        tap(tapitems => {
          console.log("tapitems", tapitems)
          object.id = generatedId;
          //     console.log('object',object.id);
          this._items.next(tapitems.concat(object));
        })
      );
  }
  fetchItems() {
    return this.http.get<{ [key: string]: ItemData }>(
      ' https://jatin-project-ee87a.firebaseio.com/itemfolder.json',
    ).pipe(map((ItemData) => {
      const items = [];
      for (const key in ItemData) {
        if (ItemData.hasOwnProperty(key)) {
          // console.log('key',key)
          items.push(
            new Items(
              key,
              ItemData[key].name,
              ItemData[key].imgurl,
              ItemData[key].price
            ));
          this.keylist.push(key);           //of no use
          // console.log('keylist',this.keylist)
        }
      }
      return items;
    }), tap((items) => {
      // console.log('firebase',items)
      this._items.next(items);
    })
    )
  }
  fetchCartItems() {
    return this.http.get<{ [key: string]: ItemData }>(
      ' https://jatin-project-ee87a.firebaseio.com/cartfolder.json',
    ).pipe(map((ItemData) => {
      const shoppingitems = [];
      for (const key in ItemData) {
        if (ItemData.hasOwnProperty(key)) {
          console.log('key', key)
          shoppingitems.push(
            new Items(
              key,
              ItemData[key].name,
              ItemData[key].imgurl,
              ItemData[key].price
            ));
          this.keylist.push(key);
          // console.log('keylist',this.keylist)
        }
      }
      //console.log('shop',shoppingitems);
      return shoppingitems;
    }), tap((shopitems) => {
      // console.log('firebase',items)
      this._shoppingCart.next(shopitems);
    })
    )
  }

  deletehomeitem(id: string) {
    return this.http.delete<Items>
      (`https://jatin-project-ee87a.firebaseio.com/itemfolder/${id}.json`).pipe(switchMap(() => {
        return this.items;
      }), take(1),
        tap((homeitems) => {
          this._items.next(homeitems.filter((item) => item.id !== id));
        })
      )
      
  }
}
