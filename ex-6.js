const carCollection = ["toyota", "fiat", "honda", "bmw"];

const updateCarCollection = (carBrand) => 
  carCollection.includes(carBrand)
  ? `${carBrand} has already existed in the ${carCollection.indexOf(carBrand) + 1} positioin of car collection,` 
  : (carCollection.push(carBrand),
  `new car collection is : ${carCollection}.`);



//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.