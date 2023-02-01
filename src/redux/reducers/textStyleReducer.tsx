import getAlign from "../../services/helpers/getAlign";
import { Action, ActionType, State } from "./textStyleReducerInterfaces";
import toNumber from "../../services/helpers/toNumber";
import defaultTextStyle from "../../services/helpers/defaultTextStyle";


export function setFontFamily(fontFamily: string): Action {
    return {
        type: ActionType.SET_FONT_FAMILY,
        payload: {
            fontFamily: fontFamily
        }
    };
}

export function setFontWeight(fontWeight: string): Action {
    return {
        type: ActionType.SET_FONT_WEIGHT,
        payload: {
            fontWeight: fontWeight
        }
    };
}

export function setFontSize(fontSize: number): Action {

    if (fontSize < 0) {
        fontSize = 0;
    }

    return {
        type: ActionType.SET_FONT_SIZE,
        payload: {
            fontSize: fontSize
        }
    }
}

export function setFontColor(fontColor: string): Action {
    return {
        type: ActionType.SET_FONT_COLOR,
        payload: {
            fontColor: fontColor
        }
    };
}

export function setLineHeight(lineHeight: number): Action {

    if (lineHeight < 0) {
        lineHeight = 0;
    }

    return {
        type: ActionType.SET_LINE_HEIGHT,
        payload: {
            lineHeight: lineHeight
        }
    };
}

export function setLetterSpacing(letterSpacing: number): Action {

    if (letterSpacing < 0) {
        letterSpacing = 0;
    }

    return {
        type: ActionType.SET_LETTER_SPACING,
        payload: {
            letterSpacing: letterSpacing
        }
    };
}

export function setAlign(align: "start" | "center" | "end" | "justify"): Action {
    return {
        type: ActionType.SET_ALIGN,
        payload: {
            align: align
        }
    };
}

const initialState = {
    fontFamily: localStorage.getItem("fontFamily") ?? defaultTextStyle.fontFamily,
    fontWeight: localStorage.getItem("fontWeight") ?? defaultTextStyle.fontWeight,
    fontSize: toNumber(localStorage.getItem("fontSize"), defaultTextStyle.fontSize),
    fontColor: localStorage.getItem("fontColor") ?? defaultTextStyle.fontColor,
    lineHeight: toNumber(localStorage.getItem("lineHeight"), defaultTextStyle.lineHeight),
    letterSpacing: toNumber(localStorage.getItem("letterSpacing"), defaultTextStyle.letterSpacing),
    align: getAlign(localStorage.getItem("align"))
}

function textStyleReducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case ActionType.SET_FONT_FAMILY:
            return {
                ...state,
                fontFamily: action.payload.fontFamily ?? defaultTextStyle.fontFamily
            };
        case ActionType.SET_FONT_WEIGHT:
            return {
                ...state,
                fontWeight: action.payload.fontWeight ?? defaultTextStyle.fontWeight
            };
        case ActionType.SET_FONT_SIZE:
            return {
                ...state,
                fontSize: action.payload.fontSize ?? defaultTextStyle.fontSize
            };
        case ActionType.SET_FONT_COLOR:
            return {
                ...state,
                fontColor: action.payload.fontColor ?? defaultTextStyle.fontColor
            };
        case ActionType.SET_LINE_HEIGHT:
            return {
                ...state,
                lineHeight: action.payload.lineHeight ?? defaultTextStyle.lineHeight
            };
        case ActionType.SET_LETTER_SPACING:
            return {
                ...state,
                letterSpacing: action.payload.letterSpacing ?? defaultTextStyle.letterSpacing
            };
        case ActionType.SET_ALIGN:
            return {
                ...state,
                align: action.payload.align ?? defaultTextStyle.align
            };
        default:
            return state;
    }
}

export default textStyleReducer;
