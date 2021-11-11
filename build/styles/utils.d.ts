export declare const UtilsBuilder: () => {
    img: {
        maxWidth: string;
    };
    absolute: {
        position: string;
    };
    relative: {
        position: string;
    };
    'center-items': {
        justifyContent: string;
        alignItems: string;
    };
    'justify-center': {
        justifyContent: string;
    };
    'justify-start': {
        justifyContent: string;
    };
    'justify-end': {
        justifyContent: string;
    };
    'items-center': {
        alignItems: string;
    };
    'items-start': {
        alignItems: string;
    };
    'items-end': {
        alignItems: string;
    };
    'flex-wrap': {
        flexWrap: string;
    };
    'flex-nowrap': {
        flexWrap: string;
    };
    'flex-row': {
        flexDirection: string;
    };
    'flex-column': {
        flexDirection: string;
    };
    shadow: (depth?: number, color?: string) => {
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
    };
    df: {
        display: string;
    };
    dn: {
        display: string;
    };
    rotate: (value?: string) => {
        transform: {
            rotate: string;
        }[];
    };
    scale: (value?: number) => {
        transform: {
            scale: number;
        }[];
    };
    'overflow-visible': {
        overflow: string;
    };
    'overflow-hidden': {
        overflow: string;
    };
    'overflow-scroll': {
        overflow: string;
    };
};
export declare type TUtilsBuilderKey = ReturnType<typeof UtilsBuilder>;
