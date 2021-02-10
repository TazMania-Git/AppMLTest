import { Component, OnInit  } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { MLserviceService } from '../../service/mlservice.service';
import { File } from '@ionic-native/file/ngx';
declare var cordova:any;    //global;



@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

items = Array(3);
private promise: Promise<string>;
private stringToWrite: string;
private blob: Blob;

  constructor(private popOverCtrl: PopoverController, 
              private MLService: MLserviceService,
              private file:File,
              public alertController: AlertController
               ) { }


               
  ngOnInit() {
  }


  testPDF(itemsSeller:any[]){
      
    var plantilla= `
      <html>
      <head style="font-size:200%"> 
      <h1><u><span style="color:red;font-weight:bold">Vendedor: </span>: ${this.MLService.sellerNick}</h1></u>
      </head>
      <body style="font-size:50%" >
      <h2>
       ${itemsSeller.map(a=>
        `
         <p>Id del Item: ${a.id}</p>
         <p>Titulo: ${a.title}</p>
         <p>Categoria: ${a.category_id}</p>
        `)}
      </2> 
      </body>
      </html>
     `;
           let options = {
             documentSize: 'A4',
             type: 'share',
             fileName: this.MLService.sellerNick
           }
           const before = Date.now();
           document.addEventListener('deviceready', () => {
             console.log('DEVICE READY FIRED AFTER', (Date.now() - before), 'ms');
             //generate the pdf.
             // cordova.plugins.pdf.fromData( ' <h1>  Hello World  </h1>', options )
             cordova.plugins.pdf.fromData(plantilla, options )
             .then(()=>'ok')
             .catch((err)=>console.error)
           })
     
    }
    
    refreshToken(){

      this.MLService.refreshToken();
    }

    onClickDownloadPDF(){
      this.testPDF(this.MLService.sellerItemsPDF);

    }
    async about() {
      const alert = await this.alertController.create({
        header: 'Desarrollador',
        subHeader: 'Franco Nicolas Nallino',
        message: 'nallinon@gmail.com',
      });
  
      await alert.present();
    }
  }
  
