function updateclock(){
    const now= new Date();
    let hours= now.getHours();
    const min=now.getMinutes().toString().padStart(2, 0);

    const meridiem= hours>=12? "PM" :"AM";
    hours=hours % 12||12;
    hours=hours.toString().padStart(2, 0);
    const seconds=now.getSeconds().toString().padStart(2, 0);
    const timestring= `${hours}:${min}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent= timestring;

}
updateclock();
setInterval(updateclock,1000);