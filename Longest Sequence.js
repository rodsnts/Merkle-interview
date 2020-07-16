function longestSequence(seq) {
    let maxCount = 0,
        maxChar = null,
        prevChar = null,
        count = 0;
    for (let current of seq) {
        prevChar === current ? count += 1 : count = 1;
        if (count >= maxCount) {
            maxCount = count;
            maxChar = current;
        }
        prevChar = current;
    }
    return {[maxChar]: maxCount};
}

longestSequence('AAABBB');
