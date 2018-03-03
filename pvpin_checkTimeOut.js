var pvpin_timeout=0;
var pvpin_max_timeout;
var pvpin_onTimeout;
function pvpin_checkTimeout(){
pvpin_timeout++;

if(pvpin_max_timeout&&pvpin_timeout>=pvpin_max_timeout&&pvpin_onTimeout&&typeof pvpin_onTimeout=='function'){
pvpin_onTimeout(pvpin_timeout);
}
}
