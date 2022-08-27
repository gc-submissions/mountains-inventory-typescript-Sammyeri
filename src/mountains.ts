export default interface Mountain {
    name: string;
    height: number;
}

let mountain: Mountain[] = [{ name: "Killamanjaro", height: 19341}, {name: "Everest", height: 29029}, {name: "Denali", height: 20310}];

export function findNameOfTallestMountain(mountain: any){
    let tallest: string = "";
    let tallestHeight: number = 0;
    for(let i:number = 0; i < mountain.length; i++ ){
        if(mountain[i].height > tallestHeight){
            tallest = mountain[i].name;
            tallestHeight = mountain[i].height
        }
    }
    return tallest;
}

let tallestMountain = findNameOfTallestMountain(mountain);

console.log(tallestMountain);

