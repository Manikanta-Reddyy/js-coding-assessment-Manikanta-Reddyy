const decodeTheRing = function (s, p) {
    let sIndex = 0;
    let pIndex = 0;

    while (pIndex < p.length) {
        if (p[pIndex] === '*') {
            pIndex++;
            if (pIndex === p.length) return true;
            while (sIndex < s.length && (s[sIndex] !== p[pIndex] || p[pIndex] === '?')) {
                sIndex++;
            }
        } else if (sIndex < s.length && (s[sIndex] === p[pIndex] || p[pIndex] === '?')) {
            sIndex++;
            pIndex++;
        } else {
            return false;
        }
    }

    return sIndex === s.length;
};

module.exports = decodeTheRing;
