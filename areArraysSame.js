var areArraysSame = function(a,b) {
    value = true
    if (a.length === b.length) {
        for (i = 0; i<a.length; i++) {
            if (a[i] === b[i]) {
                value = true
            }
            else {
                value = false
                break
                };
            };
    }
    else {
        value = false
    };
    return value
};
