const coding = ['js','rubyy','java','python','cpp']

//foreach does not return value

coding.forEach((item) => {
    console.log(item);
    return item;
})

const mynumd = [1,2,3,4,5,6,7,8,9,10]

//here if we put {} in filter or any it considers as scope and hence we 
//need to use return

const result = mynumd.filter((num) => num>4);
// const r=mynumd.filter((num) => {
//     return num>4
// })
console.log(result);

// mynumd.forEach((item) => {
//     if(item>4){
//         console.log(item)
//     }
// })


const books = [
    {title: 'book1', genre:'fiction',publish: 1981,edition:2004},
    {title:'book2', genre:'non-fiction', publish: 1992, edition: 2008},
    {title:'book3', genre:'history', publish: 1999, edition: 2007},
    {title:'book4', genre:'non-fiction', publish:1989, edition:2010},
    {title: 'book5', genre:'science', publish:2009,edition:2014},
    {title:'book6', genre:'fiction', publish:1987, edition:2010},
    {title:'book7', genre:'history', publish:1986, edition: 1996},
    {title:'book8',genre:'science', publish: 2011, edition:2016},
    {title:'book9', genre:"non-fiction", publish:1981, edition:1989},
]

const userBooks = books.filter((bk) => bk.genre == 'history');
console.log(userBooks);
const u = books.filter((bk) => bk.publish > 1995 && bk.genre == 'history');
console.log(u);

const mynums = [1,2,3,4,5,6,7,8,9,10]

//chaining

const r = mynums.map((i) => i*10).filter((num) => num>20);
console.log(r);

//reduce

const array1 = [1,2,3,4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
console.log(sumWithInitial);

//here the initialvalue is 0 in the initial step accumulator is o and the
//currenvalue is the first value from the array that is 1 so now accumulator 
//is 1 again currentvalue is 2 and accumulator now is 3 like that the final answer becomes 10

const myNum = [1,2,3]

const Total = myNum.reduce((acc,currval) => acc+ currval,0);
console.log(Total);

const shoppingCart = [
    {
        item: 'js course',
        price: 2999
    },
    {
        item: 'python course',
        price:599
    },
    {
        item: 'mobile dev course',
        price: 5999
    },
    {
        item: 'data sceince course',
        price: 12999
    },
]

const t = shoppingCart.reduce((acc,item) => acc+item.price ,0);
console.log(t);


