import colors from "../color/colors"
import fonts from "../font/fonts"
import weights from "../weight/weights"

interface defaultTextStyleType {
    fontFamily: string,
    fontWeight: string,
    fontSize: number,
    fontColor: string,
    lineHeight: number,
    letterSpacing: number,
    align: "start"
}

const defaultTextStyle: defaultTextStyleType = {
    fontFamily: fonts[0],
    fontWeight: weights[0],
    fontSize: 14,
    fontColor: colors[0],
    lineHeight: 125,
    letterSpacing: 0.6,
    align: "start"
};

export default defaultTextStyle;
