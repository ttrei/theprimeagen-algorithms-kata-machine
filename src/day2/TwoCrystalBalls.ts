export default function two_crystal_balls(breaks: boolean[]): number {

    const interval = Math.floor(Math.sqrt(breaks.length));

    var lo = 0;
    var high = interval - 1;

    do {
        if (breaks[high]) {
            for (let i = lo; i < high; ++i) {
                if (breaks[i]) {
                    return i;
                }
            }
        }

        lo += interval;
        high = Math.min(high + interval, breaks.length - 1);
    } while (lo < breaks.length);

    return -1;

}
