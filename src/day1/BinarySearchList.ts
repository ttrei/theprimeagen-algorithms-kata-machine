export default function bs_list(haystack: number[], needle: number): boolean {

    return search(haystack, 0, haystack.length, needle);

}

function search(arr: number[], lo: number, hi: number, n: number): boolean {
    if (lo >= hi) {
        return false;
    }
    var m = Math.floor((lo + hi) / 2);
    if (arr[m] === n) {
        return true;
    } else if (arr[m] < n) {
        return search(arr, m + 1, hi, n);
    } else {
        return search(arr, lo, m, n);
    }
}
