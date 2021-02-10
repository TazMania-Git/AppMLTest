import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MLserviceService } from '../service/mlservice.service';
import { PopoverInfoComponent } from '../componentes/popover-info/popover-info.component';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  sellerItems:any[];
  sellerId:string;
  nickName: string;
  
  constructor(private mlService : MLserviceService , public popoverController: PopoverController,
    private nativeStorage: NativeStorage
    ) {  }

    ngOnInit(){
      this.buscarItemsSeller();
    }

guardarItem(items:any){
  this.nativeStorage.setItem('myitem', {property: items})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );
}

obtenerItem(texto:string){
  this.nativeStorage.getItem(texto)
  .then(
    data => console.log(data),
    error => console.error(error)
  );
}

buscarItemsSeller(){

  this.mlService.buscarPorSeller().subscribe((data:any)=>{
    this.sellerItems = data['results'];
    this.nickName = data['seller']['nickname'];
    this.sellerId = data['seller']['id'];
    console.log(this.sellerItems);
    console.log(this.nickName);
    console.log(this.sellerId);
    this.mlService.sellerItemsPDF = this.sellerItems;
    this.mlService.sellerNick = this.nickName;

  });
}

onSearchChange(event){

  this.sellerId = event.detail.value;
  this.mlService.buscarPorSellerId(this.sellerId).subscribe((data:any)=>{
    try {
            
      this.sellerItems = data['results'];
      this.nickName = data['seller']['nickname'];
      this.mlService.sellerItemsPDF = this.sellerItems;
      this.mlService.sellerNick = this.nickName;

      console.log(this.sellerItems);

    } catch (error) {
      console.log("No existe ID");
    }
    });

}

async presentPopover(ev: any) {
  const popover = await this.popoverController.create({
    component: PopoverInfoComponent,
    event: ev,
    translucent: true,
  });
  await popover.present();
  const{data} = await popover.onWillDismiss();
console.log(data);
}



}
