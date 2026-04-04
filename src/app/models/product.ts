


export class Product {
   id! : number;
   name! : string;
   price! : number;
   nuts? : boolean;
   image? : string;
   vegeterian? : boolean;
   spiciness? : spicinessEnum;
   categoryId? : number;
}

enum  spicinessEnum {
   nospice = 0,
   middle = 1,
   hulfspice = 2,
   hot = 3,
   veryhot = 4
}

enum cat {
    salad = "Salads"
}


export class Category {
    id!: number;
    name!: string
}



// "id": 2,
//     "name": "Som tam papaya salad",
//     "price": 9.5,
//     "nuts": false,
//     "image": "https://course-jsbasic.javascript.ru/assets/products/som_tam_papaya_salad.png",
//     "vegeterian": true,
//     "spiciness": 0,
//     "categoryId": 1