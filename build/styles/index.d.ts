import { StyleProp } from 'react-native';
export declare const styleBuilders: (style: IAppStyles) => {
    [x: string]: (...args: any[]) => {
        [key: string]: any;
    };
};
export declare const s: (isDarkMode?: boolean, breakpoints?: {}, overrideStyle?: {}) => (styleString: string) => StyleProp<{}>;
