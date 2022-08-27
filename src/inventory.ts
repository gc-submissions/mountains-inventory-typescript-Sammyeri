import { Product } from "./products";

interface InventoryItem {
    product: Product[];
    quantity: number;
};

let inventory: InventoryItem[] = [{product: [{name: "motor", price: 10.00}], quantity: 10}, {product: [{name: "sensor", price: 12.50}], quantity: 4}, {product: [{name: "LED", price: 1.00}], quantity: 20}];

 export function calcInventoryValue(array: InventoryItem[] ){
    let value: number = 0;
    for(let i = 0; i < array.length; i++ ){
        value = (array[i].product[0].price * array[i].quantity) + value;
    }
    return value;
};

let total: number = calcInventoryValue(inventory);
console.log(total);