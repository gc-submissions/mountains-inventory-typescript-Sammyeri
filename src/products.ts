
export  interface Product {
    name: string;
    price: number;
};

let products: Product[] = [{name: "pizza", price: 2.51}, {name: "soda", price: 1.50}, {name: "potato", price: -1.3}];

export function calcAverageProductPrice(product: any){
    let average: number = 0;
    let finalAverage: number = 0;
    if(product.length > 0){
        product.forEach((element: any) => {
        average += element.price;
        });
        finalAverage = average / product.length;
    }
    return finalAverage;
};

let averageResult: number = calcAverageProductPrice(products);
console.log(averageResult);