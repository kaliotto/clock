export class Digit {
    p1: boolean;
    p2: boolean;
    p3: boolean;
    p4: boolean;
    p5: boolean;
    p6: boolean;
    p7: boolean;
  
    constructor(value?: number) {
      switch (value) {
        case 0:
          this.p1 = true;
          this.p2 = true;
          this.p3 = true;
          this.p4 = false;
          this.p5 = true;
          this.p6 = true;
          this.p7 = true;
          break;
        case 1:
          this.p1 = false;
          this.p2 = false;
          this.p3 = true;
          this.p4 = false;
          this.p5 = false;
          this.p6 = true;
          this.p7 = false;
          break;
        case 2:
          this.p1 = true;
          this.p2 = false;
          this.p3 = true;
          this.p4 = true;
          this.p5 = true;
          this.p6 = false;
          this.p7 = true;
          break;
        case 3:
          this.p1 = true;
          this.p2 = false;
          this.p3 = true;
          this.p4 = true;
          this.p5 = false;
          this.p6 = true;
          this.p7 = true;
          break;
        case 4:
          this.p1 = false;
          this.p2 = true;
          this.p3 = true;
          this.p4 = true;
          this.p5 = false;
          this.p6 = true;
          this.p7 = false;
          break;
        case 5:
          this.p1 = true;
          this.p2 = true;
          this.p3 = false;
          this.p4 = true;
          this.p5 = false;
          this.p6 = true;
          this.p7 = true;
          break;
        case 6:
          this.p1 = true;
          this.p2 = true;
          this.p3 = false;
          this.p4 = true;
          this.p5 = true;
          this.p6 = true;
          this.p7 = true;
          break;
        case 7:
          this.p1 = true;
          this.p2 = false;
          this.p3 = true;
          this.p4 = false;
          this.p5 = false;
          this.p6 = true;
          this.p7 = false;
          break;
        case 8:
          this.p1 = true;
          this.p2 = true;
          this.p3 = true;
          this.p4 = true;
          this.p5 = true;
          this.p6 = true;
          this.p7 = true;
          break;
        case 9:
          this.p1 = true;
          this.p2 = true;
          this.p3 = true;
          this.p4 = true;
          this.p5 = false;
          this.p6 = true;
          this.p7 = true;
          break;
        default:
          this.p1 = true;
          this.p2 = true;
          this.p3 = true;
          this.p4 = true;
          this.p5 = true;
          this.p6 = true;
          this.p7 = true;
          break;
      }
    }
  }
  