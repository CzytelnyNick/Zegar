p = document.querySelector("p")
h = document.querySelector(".h")
min = document.querySelector(".min")
sec = document.querySelector(".sec")
btn = document.querySelector(".btn")


function ustawCzas(){
    let time = new Date()
    var timeH;
    if(time.getHours() < 10)
    {
        timeH = "0" + time.getHours();
    }
    else 
    {
        timeH = time.getHours()
    }

    if(time.getMinutes() < 10)
    {
        timeM = "0" + time.getMinutes();
    }
    else 
    {
        timeM = time.getMinutes()
    }

    if(time.getSeconds() < 10)
    {
        timeS = "0" + time.getSeconds();
    }
    else 
    {
        timeS = time.getSeconds()
    }
    p.innerHTML = timeH + ":" + timeM + ":" + timeS
    }
  

setInterval(() => {
    ustawCzas()
    // h.style.transform = "rotate(-180deg)"
    let data = new Date()
    let cyfH = data.getHours 
    let cyfM = data.getMinutes
    let cyfS = data.getSeconds
    sec.style.transform = `rotate(180deg)`;
    
    hours = data.getHours() * 30
    minutes = (data.getMinutes() * 6) + 1
    seconds = (data.getSeconds() * 6) 
    // if(data.getSeconds() > 0 && seconds <= )
    // {
    //     sec.style.transform = `rotate(90deg)`;
    // }
    console.log(seconds);
    h.style.transform = `rotate(${hours}deg)`
    sec.style.transform = `rotate(${seconds}deg)`
    min.style.transform = `rotate(${minutes}deg)` 
    
}, 1000);

    
// btn.addEventListener("click", () =>{
//     i = i + 3
//     h.style.transform = `rotate(${i}deg)`
// })

