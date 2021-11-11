export declare const TextBuilder: (style: IAppStyles) => {
    tc: {
        textAlign: string;
    };
    tf: {
        textAlign: string;
    };
    tr: {
        textAlign: string;
    };
    f1: {
        fontSize: number;
    };
    f2: {
        fontSize: number;
    };
    f3: {
        fontSize: number;
    };
    f4: {
        fontSize: number;
    };
    f5: {
        fontSize: number;
    };
    f6: {
        fontSize: number;
    };
    f7: {
        fontSize: number;
    };
    f: (size: number) => {
        fontSize: number;
    };
    fw: (size?: string) => {
        fontWeight: string;
    };
    thin: {
        fontWeight: string;
    };
    bold: {
        fontWeight: string;
    };
};
export declare type TTextBuilderKey = ReturnType<typeof TextBuilder>;
