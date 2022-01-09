//display in the console the numbers from 1 to 20

var i=1
  
for(i=1;i<=20;i++) {

 console.log(i);  
}

for (var input = 1; input <= 20; input++) {
console.log(input)
}
//display in the console the odd numbers from 1 to 20

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i] + "");
    }
}
//compute the sum of the elements of an array and display it in the console
var arr = [2, 4, 5, 7, 9];
var sum = 0

	for (var i = 0; i <= arr.length - 1; i++) {
		sum = sum + arr[i];
        console.log(sum);

	}
   // compute the maximum of the elements of an array and display it in the console 

var arr = [3, 5, 9, 6, 20];
max = 0;
for (i = 0; i < arr.length; i++){
    if(arr[i]>max);{
    max=arr[i];
  
    }
  console.log(max )
}

//compute how many times a certain element appears in an array
 var arr = [ 22, 35, 7, 22, 45];
 var count = {}
 for(i = 0; i< arr.length; i++){
 var num = arr[i];
 count[num]= count[num] ? count[num] +1 :1;

 }
 console.log(count);
