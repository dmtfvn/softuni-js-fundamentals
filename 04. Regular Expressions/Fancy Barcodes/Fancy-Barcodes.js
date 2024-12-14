function solveCurTask(arr) {
  const pattern = /(@)#+[A-Z][a-zA-Z0-9]{4,}[A-Z]\1#+/;

  const barcodeCount = Number(arr.shift());

  for (let i = 0; i < barcodeCount; i++) {
    const curBarcode = arr[i];

    if (pattern.test(curBarcode)) {
      let productGroup = '';

      for (const curChar of curBarcode) {
        const curCharCode = curChar.charCodeAt(0);

        if (curCharCode >= 48 && curCharCode <= 57) {
          productGroup += curChar;
        }
      }

      if (productGroup === '') {
        productGroup = '00';
      }

      console.log(`Product group: ${productGroup}`);
    } else {
      console.log('Invalid barcode'); 
    }
  }
}

solveCurTask(["6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#"]);