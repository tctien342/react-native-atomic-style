import { MIN_DIMENSION } from '@configs/const';
import { reScale, vh, vw } from '@utils/style';

export const SizeBuilder: TStringBuilder = (_style: IAppStyles) => ({
    vh: (percent: number) => ({
        height: vh(percent),
    }),
    h: (height: number | string) => ({
        height: typeof height === 'string' ? height : reScale(height),
    }),
    vw: (percent: number) => ({
        width: vw(percent),
    }),
    w: (width: number | string) => ({
        width: typeof width === 'string' ? width : reScale(width),
    }),
    mvh: (percent: number) => ({
        maxHeight: vh(percent),
    }),
    mh: (maxHeight: number) => ({
        maxHeight: reScale(maxHeight),
    }),
    mvw: (percent: number) => ({
        maxWidth: vw(percent),
    }),
    mw: (maxWidth: number) => ({
        maxWidth: reScale(maxWidth),
    }),
    miw: (minWidth: number | string) => ({
        minWidth: typeof minWidth === 'string' ? minWidth : reScale(minWidth),
    }),
    mih: (minHeight: number | string) => ({
        minHeight:
            typeof minHeight === 'string' ? minHeight : reScale(minHeight),
    }),
    flex: (size = 1) => ({
        flex: size,
    }),
    wh: (size: number) => {
        const realSize = reScale(size);
        return {
            width: realSize,
            height: realSize,
        };
    },
    miwh: (percent: number) => {
        const realSize = (percent * MIN_DIMENSION) / 100;
        return {
            width: realSize,
            height: realSize,
        };
    },
});
