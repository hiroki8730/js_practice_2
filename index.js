// 変数
let unko = 'Hello World!';

// 定数
const bigUnko = "He...Hell...Hello World!";

// 配列
const inoki = ["いーち", "にーい", "さーん","ダーー！！"];

// ループ文
// let index = 0;
// while(index < inoki.length){
//     console.log(inoki[index]);
//     index++;
// }

// 関数, 引数
const test = (arg) => {
    if(inoki.length > arg){
        console.log("ボンバイエ！");
    } else {
        console.log("ボンバ...！");
    }
};

test(6);

// オブジェクト(関数を作ることもできる)
const unko2 = {
    color: 'pink',
    size: 'large',
    purfume: 'mint',
    goToilet: () => {
        console.log("Hello World");
    }
}
console.log(unko2);
console.log(unko2.color);
// console.log(unko2.goToilet());
// unko2.goToilet();

// デフォルトで用意されているオブジェクトも
console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);



document.getElementsByTagName("button")[0].addEventListener('click', () => {
    window.alert('Hello World!');
});

document.getElementById("source").addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=QCjFPSO96RU');
});