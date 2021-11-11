export declare const selColor: (style: IAppStyles, select: string, defaultColor: string) => string;
export declare const ColorBuilder: <T = {}>(style: IAppStyles & T) => {
    white: {
        color: string;
    };
    hard: {
        color: string;
    };
    light: {
        color: string;
    };
    prime: {
        color: string;
    };
    purble: {
        color: string;
    };
    blue: {
        color: string;
    };
    orange: {
        color: string;
    };
    red: {
        color: string;
    };
    green: {
        color: string;
    };
    black: {
        color: string;
    };
    o: (value: number) => {
        opacity: string | number;
    };
    bg: (color: keyof IColorStyle) => {
        backgroundColor: string;
    };
};
export declare type TColorBuilderKey = ReturnType<typeof ColorBuilder>;
