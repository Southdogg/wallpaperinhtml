let dripArray = document.querySelectorAll('.drip_word');

for (i = 0; i < dripArray.length; i++){
    let drip = dripArray[i];
    let drip_before = getComputedStyle(drip, '::before');
    let drip_after = getComputedStyle(drip, '::after');

    if (parseInt(drip_after.height) > 0 && parseInt(drip_before.height) > 0 ) {
        console.log(drip_after);
        console.log(drip_before);
        drip.style.setProperty('--height-before', '100px');
    }
    else {
        console.log('letter: "I"')
    }

}
