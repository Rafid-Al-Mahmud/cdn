setInterval(()=>{
$date=[
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
    new Date().getDay(),
    new Date().getHours(),
    new Date().getMinutes(),
    new Date().getSeconds(),
    new Date().getMilliseconds(),
    new Date().getTime()
]
},0);
date=(x='a')=>{
if (/[0-9]/.test(x)) return $date[x];
else if (/y|m|dt|d|h|mi|s|ms/.test(x)) return $date[(x==='y')?0:(x==='m')?1:(x==='dt')?2:(x==='d')?3:(x==='h')?4:(x==='mi')?5:(x==='s')?6:(x==='ms')?7:(x==='t')?7:false];
else if (x==='a') return new Date();
else {
    if (typeof(x)!=='number'||typeof(x)!=='string'){
        console.warn('Use "String" as parameter of date function.')
    }else if (/[0-9]|y|m|dt|d|h|mi|s|ms/.test(x)==='false':){
        ?console.warn('Use [0-9]|y|m|dt|d|h|mi|s|ms'):console.error()
    }
}
}
