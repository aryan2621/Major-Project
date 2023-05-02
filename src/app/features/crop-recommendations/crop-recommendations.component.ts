import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MlServicesService } from 'src/app/service/ml-services.service';
import { DESC, IMAGE_PATH } from './crop-recommendation-utils';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

class Response {
  crop: string;
  desc: string;
  image: string;

  constructor(crop: string, desc: string, image: string) {
    this.crop = crop;
    this.desc = desc;
    this.image = image;
  }
}

@Component({
  selector: 'app-crop-recommendations',
  templateUrl: './crop-recommendations.component.html',
  styleUrls: ['./crop-recommendations.component.css'],
})
export class CropRecommendationsComponent {
  crop: FormGroup;
  constructor(
    private cropService: MlServicesService,
    private dialog: MatDialog
  ) {
    this.crop = new FormGroup({
      nitrogen: new FormControl('', [Validators.min(0), Validators.max(150)]),
      phosphorus: new FormControl('', [Validators.min(5), Validators.max(145)]),
      potassium: new FormControl('', [Validators.min(5), Validators.max(205)]),
      temperature: new FormControl('', [Validators.min(0), Validators.max(50)]),
      humidity: new FormControl('', [Validators.min(1), Validators.max(100)]),
      ph: new FormControl('', [Validators.min(3), Validators.max(10)]),
      rainfall: new FormControl('', [Validators.min(20), Validators.max(300)]),
    });
  }
  async cropSubmit() {
    if (this.crop.invalid) return;
    const values: number[] = Object.values(this.crop.value);
    const res = await this.cropService.cropRecommendation(values);
    if (typeof res === 'string') {
      const response = new Response(
        res,
        DESC[res as keyof typeof DESC],
        IMAGE_PATH[res as keyof typeof IMAGE_PATH]
      );
      const dialogRef = this.dialog.open(CropRecommendationsDialogComponent, {
        data: response,
      });
    } else {
      alert('Invalid Inputs');
    }
  }
  nitrogenError() {
    const nitrogenControl = this.crop.get('nitrogen');
    if (nitrogenControl?.hasError('min') || nitrogenControl?.hasError('max')) {
      return 'Nitrogen value should be between 0 and 150';
    }
    return '';
  }
  phosphorusError() {
    const phosphorusControl = this.crop.get('phosphorus');
    if (
      phosphorusControl?.hasError('min') ||
      phosphorusControl?.hasError('max')
    ) {
      return 'Phosphorus value should be between 5 and 145';
    }
    return '';
  }
  potassiumError() {
    const potassiumControl = this.crop.get('potassium');
    if (
      potassiumControl?.hasError('min') ||
      potassiumControl?.hasError('max')
    ) {
      return 'Potassium value should be between 5 and 205';
    }
    return '';
  }
  temperatureError() {
    const temperatureControl = this.crop.get('temperature');
    if (
      temperatureControl?.hasError('min') ||
      temperatureControl?.hasError('max')
    ) {
      return 'Temperature value should be between 0 and 50';
    }
    return '';
  }
  humidityError() {
    const humidityControl = this.crop.get('humidity');
    if (humidityControl?.hasError('min') || humidityControl?.hasError('max')) {
      return 'Humidity value should be between 1 and 100';
    }
    return '';
  }
  phError() {
    const phControl = this.crop.get('ph');
    if (phControl?.hasError('min') || phControl?.hasError('max')) {
      return 'PH value should be between 3 and 10';
    }
    return '';
  }
  rainfallError() {
    const rainfallControl = this.crop.get('rainfall');
    if (rainfallControl?.hasError('min') || rainfallControl?.hasError('max')) {
      return 'Rainfall value should be between 20 and 300';
    }
    return '';
  }
}

@Component({
  selector: 'app-crop-recommendations-dialog',
  template: `
    <h2 mat-dialog-title>CROP RECOMMENDATION</h2>
    <mat-dialog-content class="mat-typography">
      <h3 class="mx-auto justify-center">
        You should grow {{ data.crop | uppercase }} in your farm !
      </h3>
      <img
        class="shadow-xl rounded-md w-[50%] mx-auto my-3"
        [src]="data.image"
      />
      <p>
        {{ data.desc }}
      </p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        mat-button
        mat-dialog-close
      >
        Cancel
      </button>
    </mat-dialog-actions>
  `,
})
export class CropRecommendationsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Response) {}
}
