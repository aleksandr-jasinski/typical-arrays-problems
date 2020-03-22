
exports.min = function min(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }
    else {
        let minimum = array[0];
        for (let i = 1; i < array.length; i++) {
            if (minimum > array[i]) minimum = array[i];
        }
        return minimum;
    }

}

exports.max = function max(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }
    else {
        let maximum = array[0];
        for (let i = 1; i < array.length; i++) {
            if (maximum < array[i]) maximum = array[i];
        }
        return maximum;
    }
}

exports.avg = function avg(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }
    else {
        let summa = array[0];
        for (let i = 1; i < array.length; i++) {
            summa += array[i];
        }
        return summa / array.length;
    }

}
