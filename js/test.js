/*
* @Author: xiaofan
* @Date:   2018-04-10 19:00:10
* @Last Modified by:   xiaofan
* @Last Modified time: 2018-04-14 16:15:01
*/


// var name = "AlbERt EINstEiN";

// function nameChanger(oldName) {
//     var finalName = oldName;
//     // Your code goes here!
//     var names = oldName.split(" ");
//     names[1] = names[1].toUpperCase();
//     names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//     finalName = names.join(" ");
    
//     // Don't delete this line!
//     return finalName;
// };

// Did your code work? The line below will tell you!
// console.log(nameChanger(name));



// var work = {};
// work.position = "wuhan";
// work.years = "two";

// var education = {};
// education["name"] = "HeNanGongMao";
// education["years"] = "2009--2012";


// $("#main").append(work["position"]);
// $("#main").append(education.name);


// const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

// const one = "red";
// const two = "green";
// const three = "blue";

// const colors = `List of Colors
// 1. ${one}
// 2. ${two}
// 3. ${three}`;

// console.log(colors)
// console.log("helllo")

// const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// for (let day of days) {
// 	day = day.slice(0,1).toUpperCase() + day.slice(1);

// 	console.log(day);
// }


// const fruits = ["apples", "bananas", "pears"];
// const vegetables = ["corn", "potatoes", "carrots"];

// const produce = [...fruits, ...vegetables];

// console.log(produce);


// function average(...nums) {
// 	let total = 0;
//     for(const num of nums) {
//     	total += num;
//     }
//     if (nums.length == 0) {
//     	return 0;
//     }
//     return (total/nums.length);
// }

// console.log(average(2, 6));
// console.log(average(2, 3, 3, 5, 7, 10));
// console.log(average(7, 1432, 12, 13, 100));
// console.log(average());


// const greet = name => 'hello ${name}!';

// console.log(greet('xiaofan'));

// greet('xiaofan')

// const sayHi = () => console.log("hello xiaofan");

// sayHi()

// const orderIceCream = (flavor, cone) => console.log(`here is your ${flavor} ice cream in a ${cone} cone`);

// orderIceCream('chocolate', 'waffle');


// setTimeOut(()=>{
// 	console.log('starting');
// 	test.start();
// },2000);

// const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
//   name = name.toUpperCase();
//   return `${name} has ${name.length} characters in their name`;
// });


// const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function(square) {
// 	return square * square;
// });

// const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
// 	square => square * square);

// console.log(...squares);


// var umbrella = {
//     color: "pink",
//     isOpen: true,
//     open: function() {
//         if (umbrella.isOpen === true) {
//             return "The umbrella is already opened!";
//         } else {
//             umbrella.isOpen = true;
//             return "Julia opens the umbrella!";
//         }
//     },
//     // your code goes here
//     close: function() {
//     	if (umbrella.isOpen === false) {
//     		return "The umbrella is already closed!";
//     	} else {
//     		umbrella.isOpen = false;
//     		return "Julia close the umbrella!";
//     	}
//     }
// };


// console.log(umbrella);


// var savingsAccount = {
//     balance: 1000,
//     interestRatePercent: 1,
//     deposit: function addMoney(amount) {
//         if (amount > 0) {
//             return savingsAccount.balance += amount;
//         }
//     },
//     withdraw: function removeMoney(amount) {
//         var verifyBalance = savingsAccount.balance - amount;
//         if (amount > 0 && verifyBalance >= 0) {
//             return savingsAccount.balance -= amount;
//         }
//     },
//     // your code goes here
//     printAccountSummary: function account(amount) {
//     	return "Welcome! Your balance is currently " + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%";
//     } 
// };

// console.log(savingsAccount.printAccountSummary());

// console.log(savingsAccount.deposit(100));

// 创建一个叫做 facebookProfile 的对象。该对象应该包含 3 个属性：

// 你的名称
// 你的好友数，以及
// 你发过的消息（字符串）数组
// 该对象还应该具有 4 个方法：

// postMessage(message) - 向数组中添加新的消息字符串
// deleteMessage(index) - 删除给定索引对应的消息
// addFriend() - 好友数加一
// removeFriend() - 好友数减一

// var facebookProfile = {
// 	name: "xiaofna",
// 	friends: 222,
// 	messages: ["hello", "I am xiaofan", "I am happy", "good morning"],

// 	postMessage: function (message) {
// 	 	facebookProfile.messages.push(message);
// 	},

// 	deleteMessage: function (index) {
// 		facebookProfile.messages.splice(index,1);
// 	},

// 	addFriend: function (account) {
// 		facebookProfile.friends += 1;
// 	},

// 	removeFriend: function (account) {
// 		facebookProfile.friends -= 1;
// 	}
// }


// console.log(facebookProfile.postMessage("hello"));


// var donuts = [
//     { type: "Jelly", cost: 1.22 },
//     { type: "Chocolate", cost: 2.45 },
//     { type: "Cider", cost: 1.59 },
//     { type: "Boston Cream", cost: 5.99 }
// ];

// // your code goes here
// donuts.forEach(function(donut) {
//    console.log(donut.type + " donuts cost $" + donut.cost + " each"); 
// });

// var outsideExample = "First string";
// function example() {
//     var outsideExample = "Second string";
// }
// example();
// console.log(outsideExample);

var outsideExample = "First string";
function example() {
    outsideExample = "Second string";
}
example();
console.log(outsideExample);


























