function setTime() {
    // with this approach a new Date object is created every second.
    // surely we can do this better?
    document.body.getElementsByClassName("timer")[0].innerHTML = new Date();
}

/*
    we call setTime once before using it as a callback
    just so something is immediately onscreen for the user
*/
setTime();

/*
    we update the page time faster than every second
    so that our seconds indicator is more precise.
    todo possibly: figure out the best way to handle
    seconds precision?
*/
setInterval(setTime, 400);

console.log("Page and code by Amy Wright");
console.log("If you find this you get a pizza!");

console.log("Supercalifragilisticexpialidocious".length);
var Q_rsqrt = 0x5F3759DF;
console.log("Q_rsqrt = " + Q_rsqrt + " (type is " + (typeof Q_rsqrt) + ")");
var gifHeader = BigInt(0x474946383961);
console.log("gifHeader = " + gifHeader + " (type is " + (typeof gifHeader) + ")");