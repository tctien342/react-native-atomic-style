export declare const BorderBuilder: (style: IAppStyles) => {
    ba: {
        borderStyle: string;
        borderWidth: number;
    };
    bw: (width?: number | undefined) => {
        borderWidth: number;
    };
    br: (radius?: number | undefined) => {
        borderRadius: number;
    };
    br0: {
        borderRadius: number;
    };
    br1: {
        borderRadius: number;
    };
    br2: {
        borderRadius: number;
    };
    br3: {
        borderRadius: number;
    };
    br4: {
        borderRadius: number;
    };
    br5: {
        borderRadius: number;
    };
    br6: {
        borderRadius: number;
    };
    br7: {
        borderRadius: number;
    };
    bc: (color: keyof IColorStyle) => {
        borderColor: string;
    };
    'b--dot': {
        borderStyle: string;
    };
    'b--dash': {
        borderStyle: string;
    };
    'br-btn': {
        borderRadius: number;
    };
    'br-pill': {
        borderRadius: number;
    };
    'br--bottom': {
        borderTopLeftRadius: number;
        borderTopRightRadius: number;
    };
    'br--top': {
        borderBottomLeftRadius: number;
        borderBottomRightRadius: number;
    };
    'br--right': {
        borderTopLeftRadius: number;
        borderBottomLeftRadius: number;
    };
    'br--left': {
        borderBottomRightRadius: number;
        borderTopRightRadius: number;
    };
};
export declare type TBorderBuilderKey = ReturnType<typeof BorderBuilder>;
