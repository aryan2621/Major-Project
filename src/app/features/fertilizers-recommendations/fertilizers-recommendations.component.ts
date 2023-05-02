import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MlServicesService } from 'src/app/service/ml-services.service';
import { DESC, IMAGE_PATH } from './fertilizers-recommendations-utils';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

class Response {
  fertilizer: string;
  desc: string;
  image: string;

  constructor(fertilizer: string, desc: string, image: string) {
    this.fertilizer = fertilizer;
    this.desc = desc;
    this.image = image;
  }
}

@Component({
  selector: 'app-fertilizers-recommendations',
  templateUrl: './fertilizers-recommendations.component.html',
  styleUrls: ['./fertilizers-recommendations.component.css'],
})
export class FertilizersRecommendationsComponent {
  fertilizer: FormGroup;
  SoilType: string[] = ['Sandy', 'Loamy', 'Clayey', 'Black', 'Red'];

  CropType: string[] = [
    'Maize',
    'Sugarcane',
    'Cotton',
    'Tobacco',
    'Paddy',
    'Barley',
    'Oil Seeds',
    'Pulses',
    'Ground Nuts',
    'Wheat',
    'Millets',
  ];
  constructor(
    private fertlizerService: MlServicesService,
    private dialog: MatDialog
  ) {
    this.fertilizer = new FormGroup({
      temparature: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      humidity: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      moisture: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      nitrogen: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      potassium: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      phosphorous: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      soilType: new FormControl('', [Validators.required]),
      cropType: new FormControl('', [Validators.required]),
    });
  }
  async fertilizersSubmit() {
    const values: number[] = Object.values(this.fertilizer.value);
    const res = await this.fertlizerService.fertilizerPrediction(values);
    if (typeof res === 'string') {
      const response = new Response(
        res,
        DESC[res as keyof typeof DESC],
        IMAGE_PATH[res as keyof typeof IMAGE_PATH]
      );
      const dialogRef = this.dialog.open(
        FertilizerRecommendationsDialogComponent,
        {
          data: response,
        }
      );
    } else {
      alert('Invalid Input');
    }
  }
}

@Component({
  selector: 'app-fertilizer-recommendations-dialog',
  template: `
    <h2 mat-dialog-title>CROP RECOMMENDATION</h2>
    <mat-dialog-content class="mat-typography">
      <h3 class="mx-auto justify-center">
        You should use  {{ data.fertilizer | uppercase }} in your farm !
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
export class FertilizerRecommendationsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Response) {}
}
