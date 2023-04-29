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
else if (x==='a') return $date[0]+' '+$date[1]+' '+$date[2]+' '+$date[3]+" "+$date[4]+" "+$date[5]+" "+$date[6]+" "+$date[7];
else if (x==='a:') return $date[0]+':'+$date[1]+':'+$date[2]+':'+$date[3]+":"+$date[4]+":"+$date[5]+":"+$date[6]+":"+$date[7];
else if (x==='a,') return $date[0]+','+$date[1]+','+$date[2]+','+$date[3]+","+$date[4]+","+$date[5]+","+$date[6]+","+$date[7];
else {
    if (typeof(x)!=='number' && typeof(x)!=='string'){
        console.warn('Use "String" or "Number" as the parameter of date function.')
    }else if (/^([0-8]|y|m|dt|d|h|mi|s|ms|a|a:|a,){1}$/.test(x)===false){
        console.warn('Use "[0-8]|y|m|dt|d|h|mi|s|ms| |a|a:|a,". Only one of these flags are allowed as 1st parameter.');
    }else console.error('Something went wrong! There an error while excuting the date function.');
}
}
