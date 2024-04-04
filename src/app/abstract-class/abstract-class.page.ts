import { Component, OnInit } from '@angular/core';
import { Vector } from './classes/Vector';
import { TwoDVector } from './classes/TwoDVector';
import { ThreeDVector } from './classes/ThreeDVector';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})
// export class AbstractClassPage implements OnInit {
//   selectedVectorType: string = 'twoD';
//   xCoordinate: number = 0;
//   yCoordinate: number = 0;
//   zCoordinate: number = 0;
//   result: number = 0;

//   constructor() { }

//   ngOnInit() { }

//   calculateLength() {
//     let vector: Vector;

//     if (this.selectedVectorType === 'twoD') {
//       vector = new TwoDVector('Two-dimensional vector', [this.xCoordinate, this.yCoordinate]);
//       this.result = vector.getLength();
//     } else if (this.selectedVectorType === 'threeD') {
//       vector = new ThreeDVector('Three-dimensional vector', [this.xCoordinate, this.yCoordinate, this.zCoordinate]);
//       this.result = vector.getLength();
//     }
//   }
// }

export class AbstractClassPage implements OnInit {

  vectors: Vector[] = [];
  totalLength: number = 0;

  constructor() { }

  ngOnInit() {
    this.vectors.push(new TwoDVector("Vector2D-1", [3, 4]));
    this.vectors.push(new ThreeDVector("Vector3D-1", [1, 2, 3]));
    this.vectors.push(new TwoDVector("Vector2D-2", [5, 6]));
    this.vectors.push(new ThreeDVector("Vector3D-2", [4, 5, 6]));
    this.vectors.push(new TwoDVector("Vector2D-3", [7, 8]));

    this.calculateTotalLength();
  }

  calculateTotalLength() {
    this.totalLength = this.vectors.reduce((acc, vector) => acc + vector.getLength(), 0);
  }

}