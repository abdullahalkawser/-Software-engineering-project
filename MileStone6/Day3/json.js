 //সহজ সরল বাংলা ভাষায় JSON একটা ডেটা রিপ্রেজেন্টেশন ফরম্যাট। এখন কথা হচ্ছে ডেটা রিপ্রেজেন্টেশন কি জিনিস আর এর জন্য কোন ফরম্যাট অনুসরণ করা জরুরি কেন ?
 // JSN JAVASCRIFT OBJCET NOTATION

 const user = { id: 23, name : "abdullah al kawser", job : 'software Engineer' }
 const result = JSON.stringify(user)
 console.log(user) // js 
  console.log(result) // json

 //JSON.stringify //   JSN JAVASCRIFT OBJCET NOTATION STRING  PROKASH KORBE

// { id: 23, name: 'abdullah al kawser', job: 'software Engineer' }  js 
// {"id":23,"name":"abdullah al kawser","job":"software Engineer"} json



const shop = {
    onner: 'alia',
    address:{
        street : 'dhaka',
        country: 'bd'

    }
    ,
    product : ['laptop','mic', 'monitor', 'keybord'],

    revenew: 54000,
    isopen: true,

}
console.log(shop)
const shops = JSON.stringify(shop) //{"onner":"alia","address":{"street":"dhaka","country":"bd"},"product":["laptop","mic","monitor","keybord"],"revenew":54000,"isopen":true}
console.log(shops)


const shpobj = JSON.parse(shops)
console.log(shpobj)