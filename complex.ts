class Complex {

    re: number;
    im: number;

constructor(realNumber, imaginaryNumber) {
        this.re = realNumber;
        this.im = imaginaryNumber;
    }

    add(complexNumber: Complex) {
        let re = this.re + complexNumber.re;
        let im = this.im + complexNumber.im;
        return new Complex(re, im);
    }

    toString() {
        console.log('re: ', this.re, ', im:', this.im);
    }
}
let c1 = new Complex(2, 4);
let c2 = new Complex(-4, 7);
let c3 = c1.add(c2);
c3.toString();