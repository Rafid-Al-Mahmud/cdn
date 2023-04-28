setInterval(()=>{
$date=[
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
    new Date().getDay(),
    new Date().getHours(),
    new Date().getMinutes(),
    new Date().getSeconds(),
    new Date().getMilliseconds()
]
},0);
date=(x='a')=>{
if (typeof(x)==='number') return $date[x];
else if (typeof(x)==='string') return $date[(x==='y')?0:(x==='m')?1:(x==='dt')?2:(x==='d')?3:(x==='h')?4:(x==='m')?5:(x==='s')?6:(x==='ms')?7:false];
}
