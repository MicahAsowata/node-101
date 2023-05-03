const int = setInterval(() => {
    console.log("Interval");
}, 1000);

setTimeout(()=>{
    console.log("Timed out");
    clearInterval(int)
}, 3000)