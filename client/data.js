// import axios from "axios";

// const url = "http://rexinc.net:8080/find_orders.php?crexwono=e15506"
// axios.get(url).then(res=> {
//     console.log(res)
// }).catch(err=> {
//     console.error(err)
// })


const form = $('form')[0]
form.submit(function(e){
    e.preventdefault();
    console.log("clicked")
})
