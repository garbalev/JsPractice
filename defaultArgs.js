const getDefaultB = c => c*2;

function defArgs(a = 10, b = getDefaultB(a)) {
    console.log(a + b);
}

// defArgs();