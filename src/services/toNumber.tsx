
function toNumber(string: string | null, defaultValue: number): number {
    if (isNaN(Number(string))) {
        return defaultValue;
    }
    if (Number(string) < 0) {
        return defaultValue;
    }
    return Number(string);
}

export default toNumber;
