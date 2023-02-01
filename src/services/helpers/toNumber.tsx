
function toNumber(string: string | null, defaultValue: number): number {
    // console.log(string);
    if (isNaN(Number(string))) {
        return defaultValue;
    }
    if (Number(string) <= 0) {
        return defaultValue;
    }
    return Number(string);
}

export default toNumber;
