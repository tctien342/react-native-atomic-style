import { StyleProp } from 'react-native';
export declare const styleBuilders: (style: IAppStyles) => {
    [x: string]: TTokenOutput;
};
export declare const creator: (isDarkMode?: boolean) => (styleString: string) => StyleProp<{}>;
