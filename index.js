
// let arr = [12,30,50,60]




// let student = {
//     name: "chandan",
//     age:24,
//     roll:100
// }

// let {name,age,roll} = student

// console.log(myname);




// let num1 = arr[0]

// let num2 = arr[1]

// let num3 = arr[2]

// let num4 = arr[3]

// let [num1,num2,,num4] = arr

// console.log(num4);

// let ans =arr.reduce((a,e)=>{
   

//     return a+e
// })

// let ans = 0
// for (const item of arr) {
//     ans = ans+ item
// }

// console.log(ans);

// let ans = arr.map((e)=> e-10)


//    let newArr =arr.filter((e)=>{
         
//        return false
//    })
    

// console.log(newArr);



// console.log(document);


// // let myBox = document.getElementById("box")
// let myBox = document.querySelector(".parent")
// let mybtn = document.querySelector("#btn")
// let x = 0;
// mybtn.addEventListener("click",()=>{
//      if(x===0){
//         mybtn.innerHTML="Off"
//         myBox.style.backgroundColor="yellow"
//         x=1
//      }else{
//         mybtn.innerHTML="On"
//         myBox.style.backgroundColor="grey"
//          x=0
//      }
    
// })
// myBox.style.height = "200px"
// myBox.style.backgroundColor="red"

// console.log(myBox);


// let body = document.querySelector("body");
// let btn = document.querySelector("#btn")
// let box = document.querySelector("#box")





// let aTags = document.querySelectorAll("#box a")

// console.log(aTags);

// btn.addEventListener("click",()=>{

// aTags.forEach((e)=>{
//     e.style.textDecoration = "none"
    
// })

// })
// box.setAttribute("class","newclass")
// console.log(box.getAttribute("class"));

// let heading = document.createElement("h1")
// heading.innerHTML="this a demo text"


// let myimage = document.createElement("img")
// myimage.src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/04/13/virat-kohli.jpg"

// myimage.height="100"

// console.log(body);

// body.addEventListener("click",()=>{


// box.append(myimage)

// })



// let arr= [2,3,4,5,7]

// arr.forEach((e)=>{
// console.log(e);
// })
// const syncWait = ms => {
//     const end = Date.now() + ms
//     while (Date.now() < end) continue
// }

// // setTimeout(()=>{
// //     console.log("hello");
// // },4000)
// let x = 1
// setInterval(()=>{
   
//     console.log("hello"+x);
//     x++
// },4000)

// console.log("other task");

// function startSignUp() {

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("sign up staretd");
//             resolve("xyz")
//         },5000)
        
//     })

    
// }


// function sendEmail() {


//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("email sent");
//             resolve()
          
//         },2000)
//     })

  
   
// }

// function otpVerification() {

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("otp verified");
//              resolve()
//         },3000)
//     })
   
   
// }


// function showUserData() {


//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("user data displayed");
//            resolve()
//         },1000)
//     })
   
   
// }



// startSignUp(()=>{
//     sendEmail(()=>{
//         otpVerification(()=>{
//             showUserData()
//         })
//     })
// })

// startSignUp()
// .then(sendEmail)
// .then(otpVerification)
// .then()

// async function register(){
//   let data =   await startSignUp()
//   console.log(data);
//      await sendEmail()
//      await otpVerification()
//      await showUserData()


// }

// register().then(()=>{
//     console.log("sucess");
// })


// console.log("other task");


// new Promise((resolve,reject)=>{

    
//      //resolve("sucess");
//       reject("something went wrong")
     
// })
// .then((data)=>{
//    console.log(data);
// })
// .catch((err)=>{
// console.log(err);
// })
// let body = document.querySelector("body")
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((data)=>{

//     return data.json()
//   console.log(data);
// })
// .then((finaldata)=>{
// console.log(finaldata);

//    finaldata.forEach(element => {
//     console.log(element.title);

//   let title = document.createElement("p")
//   title.innerHTML=`${element.title}`

//   body.append(title)

//    });
// })


// async function getData(){

//     let data = await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data2 = await data.json() 

//     data2.forEach(element => {
//         console.log(element.title);

//       let title = document.createElement("p")
//       title.innerHTML=`${element.title}`
    
//       body.append(title)
//     }
//     )
    
// }

// getData()


// function fun1(a,b){

// console.log(a+b);

// }


// function fun2(a){
//     console.log(" i am fun2");
//     a(2,3)
// }

// fun2(fun1)


// setTimeout(()=>{
// console.log("hello mama");
// },3000)



// setInterval(()=>{
// console.log("hoello mama");
// },1000)


// function startRegister(fun){

//     setTimeout(()=>{
//         console.log("register start"); 
//         fun()
//     },3000)
  
// }

// function sendOtp(fun){

//     setTimeout(()=>{
//         console.log("otp sent");
//         fun() 
//     },1000)
  
   
//  }
 
//  function displayUserData(){
//     setTimeout(()=>{
//         console.log("display user"); 
//     },2000)

// }
 


// startRegister(()=>{
//     sendOtp(()=>{
//         displayUserData()
//     })
// })









// console.log("other task");




// let x = "cha"

// let y = "cha"

// x==y
// x.equal(y)

// let a = [2,3,4]
// let b = [4,5,6]

// let c = a.concat(b)
// console.log(c);




// let name = ["chandan","biswa","saroj"]

// let newname= name.splice(1,1)


// console.log(newname);

// console.log(fun)


//  function   fun(){
//     console.log(2);
// }

// console.log(fun);

// function fun1(x){

//    return function(y){
//        console.log(x+y);
//    }
// }


//  let z =fun1(5)


//  z(4)




let x = [40,40,30,50,11]



let a = new Set([20,30,40,50])

a.delete(20)

a.forEach((value,index)=>{
console.log(value,index);
});














