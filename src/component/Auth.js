import firebase from './Config'
import {auth} from './Config'


const socialMediaAuth=(provider)=>{
    console.log("provider", provider);
    auth
    .signInWithPopup(provider)
    .then((res)=>{
       console.log(res.user) 
    }).catch((error)=>{
        console.log(error.message)
    })
};

export default socialMediaAuth;





// const socialMediaAuth=(provider)=>{
//     console.log("provider", provider);
//     return (auth
//     .signInWithPopup(provider)
//     )
// };