
function getAlign(string: string | null): "start" | "center" | "end" | "justify" {
    switch (string) {
        case "start":
            return "start";
        case "center":
            return "center";
        case "end":
            return "end";
        case "justify":
            return "justify";
        default:
            return "start";
    }
}

export default getAlign;
