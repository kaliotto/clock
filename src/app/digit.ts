export class Digit {
  p1: number[];
  p2: number[];
  p3: number[];
  p4: number[];
  p5: number[];
  p6: number[];
  p7: number[];

  constructor() {
    // p represents each part of the digital numbers
    // Each pX contains the numbers for which that p is present
    this.p1 = [0, 2, 3, 5, 6, 7, 8, 9];
    this.p2 = [0, 4, 5, 6, 8, 9];
    this.p3 = [0, 1, 2, 3, 4, 7, 8, 9];
    this.p4 = [2, 3, 4, 5, 6, 8, 9];
    this.p5 = [0, 2, 6, 8];
    this.p6 = [0, 1, 3, 4, 5, 6, 7, 8, 9];
    this.p7 = [0, 2, 3, 5, 6, 8, 9];
  }
}
