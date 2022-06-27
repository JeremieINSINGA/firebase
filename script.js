
import {easyFire} from './lib.js';

const email = document.querySelector('#email')
const pass = document.querySelector('#password')


const firebaseConfig = {
    apiKey: "AIzaSyBdbgKpl4vE7eaILdm5ADSJiAu8uQXu8dI",
    authDomain: "supersite-7b08a.firebaseapp.com",
    projectId: "supersite-7b08a",
    storageBucket: "supersite-7b08a.appspot.com",
    messagingSenderId: "673715742704",
    appId: "1:673715742704:web:d9ed4719523b1c8e0ddf35"
  };

const {login} = easyFire(firebaseConfig)

document.querySelector('#button').addEventListener('click', async (e)=>{
    const uid =  await login(email.value,pass.value)
    if(uid){
        window.location.href= './page.html'
    }

})
console.log('log')

// login("doc@so.com",'123656')

// alert('salut')