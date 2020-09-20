import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NavController, LoadingController, ActionSheetController } from '@ionic/angular';
import { ItemserviceService } from 'src/app/itemservice.service';
import { Items } from '../home/home.model';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-seller',
  templateUrl: './seller.page.html',
  styleUrls: ['./seller.page.scss'],
})
export class SellerPage implements OnInit {

  SellerForm: FormGroup;
  checkvalue1: string;
  checkvalue2: string;
  checkvalue3: string;
  imageUrl: string;

  //isLoading=false;

  constructor(private formbuilder: FormBuilder, private navctrl: NavController, private itemserve: ItemserviceService, private loadingctrl: LoadingController, private camera: Camera, private actionSheetCtrl: ActionSheetController) {

    this.SellerForm = this.formbuilder.group({
      name: ['', Validators.required],
      productname: ['', Validators.required],
      gender: ['', Validators.required],
      price: ['', Validators.required],
      checkbox1: ['false'],
      checkbox2: ['false'],
      checkbox3: ['false']
    })
  }

  ngOnInit() {
  }
  option1(value1, event) {
    if (event.detail.checked) {
      this.checkvalue1 = value1;
      // console.log('value1',this.checkvalue1);
    }
  }
  option2(value2, event) {
    if (event.detail.checked) {
      this.checkvalue2 = value2;
      // console.log('value2',this.checkvalue2);
    }
  }
  option3(value3, event) {
    if (event.detail.checked) {
      this.checkvalue3 = value3;
      //console.log('value3',this.checkvalue3);
    }
  }
  // SubmitData()
  // {
  //  let value=this.SellerForm.value;
  //  console.log(value);

  //  const object=new Forms(value.name,value.price);
  //  console.log(object);
  //  this.itemserve.addformitem(object);

  //  this.navctrl.navigateForward('/home');
  //  this.SellerForm.reset();
  // }
  SubmitData() {
    let value = this.SellerForm.value;
    // console.log(value); 
    const object = new Items('1', value.productname, this.imageUrl, value.price);
    //console.log(object);
    this.loadingctrl.create({
      message: 'Adding. . .',
      duration: 5000
    }).then((loading) => {
      loading.present();
      this.itemserve.addformitem(object).subscribe(() => {
        this.loadingctrl.dismiss();
        this.navctrl.navigateForward('/home');
        this.SellerForm.reset();
      });
    })

  }
  //imageSelected=null;
  PresentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      header: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.TakePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.TakePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    }).then(actionSheet => {
      actionSheet.present();
    });
  }
  TakePicture(source) {
    const options: CameraOptions = {
      quality: 100,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: source,
      destinationType: this.camera.DestinationType.FILE_URI
    }
    this.camera.getPicture(options).then(imageData => {
      this.imageUrl = imageData;
    }).catch(err => {
      console.log(err);
    })
  }
}
