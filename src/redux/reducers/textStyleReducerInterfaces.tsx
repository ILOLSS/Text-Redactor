export enum ActionType {
    SET_FONT_FAMILY = "SET_FONT_FAMILY",
    SET_FONT_WEIGHT = "SET_FONT_WEIGHT",
    SET_FONT_SIZE = "SET_FONT_SIZE",
    SET_FONT_COLOR = "SET_FONT_COLOR",
    SET_LINE_HEIGHT = "SET_LINE_HEIGHT",
    SET_LETTER_SPACING = "SET_LETTER_SPACING",
    SET_ALIGN = "SET_ALIGN"
};

export interface State {
    fontFamily: string;
    fontWeight: string;
    fontSize: number;
    fontColor: string;
    lineHeight: number;
    letterSpacing: number;
    align: "start" | "center" | "end" | "justify"
};

interface Payload {
    fontFamily?: string;
    fontWeight?: string;
    fontSize?: number;
    fontColor?: string;
    lineHeight?: number;
    letterSpacing?: number;
    align?: "start" | "center" | "end" | "justify"
}

export interface Action {
    type: ActionType.SET_FONT_FAMILY 
        | ActionType.SET_FONT_WEIGHT 
        | ActionType.SET_FONT_SIZE 
        | ActionType.SET_FONT_COLOR 
        | ActionType.SET_LINE_HEIGHT 
        | ActionType.SET_LETTER_SPACING 
        | ActionType.SET_ALIGN;
    payload: Payload;
};