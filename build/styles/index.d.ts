import { StyleProp } from 'react-native';
export declare const styleBuilders: (style: IAppStyles, isDark: boolean) => {
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
    vh: (percent: number) => {
        height: number;
    };
    vh0: {
        height: number;
    };
    vh10: {
        height: number;
    };
    vh20: {
        height: number;
    };
    vh30: {
        height: number;
    };
    vh40: {
        height: number;
    };
    vh50: {
        height: number;
    };
    vh60: {
        height: number;
    };
    vh70: {
        height: number;
    };
    vh80: {
        height: number;
    };
    vh90: {
        height: number;
    };
    vh100: {
        height: number;
    };
    h: (height: string | number) => {
        height: string | number;
    };
    h0: {
        height: number;
    };
    h1: {
        height: number;
    };
    h2: {
        height: number;
    };
    h3: {
        height: number;
    };
    h4: {
        height: number;
    };
    h5: {
        height: number;
    };
    h6: {
        height: number;
    };
    h7: {
        height: number;
    };
    vw: (percent: number) => {
        width: number;
    };
    vw0: {
        width: number;
    };
    vw10: {
        width: number;
    };
    vw20: {
        width: number;
    };
    vw30: {
        width: number;
    };
    vw40: {
        width: number;
    };
    vw50: {
        width: number;
    };
    vw60: {
        width: number;
    };
    vw70: {
        width: number;
    };
    vw80: {
        width: number;
    };
    vw90: {
        width: number;
    };
    vw100: {
        width: number;
    };
    w: (width: string | number) => {
        width: string | number;
    };
    w0: {
        width: number;
    };
    w1: {
        width: number;
    };
    w2: {
        width: number;
    };
    w3: {
        width: number;
    };
    w4: {
        width: number;
    };
    w5: {
        width: number;
    };
    w6: {
        width: number;
    };
    w7: {
        width: number;
    };
    mvh: (percent: number) => {
        maxHeight: number;
    };
    mh: (maxHeight: number) => {
        maxHeight: number;
    };
    mh0: {
        maxHeight: number;
    }; /**
     * If token is passthroght
     */
    mh1: {
        maxHeight: number;
    };
    mh2: {
        maxHeight: number;
    };
    mh3: {
        maxHeight: number;
    };
    mh4: {
        maxHeight: number;
    };
    mh5: {
        maxHeight: number;
    };
    mh6: {
        maxHeight: number;
    };
    mh7: {
        maxHeight: number;
    };
    mvw: (percent: number) => {
        maxWidth: number;
    };
    mw: (maxWidth: number) => {
        maxWidth: number;
    };
    mw0: {
        maxWidth: number;
    };
    mw1: {
        maxWidth: number;
    };
    mw2: {
        maxWidth: number;
    };
    mw3: {
        maxWidth: number;
    };
    mw4: {
        maxWidth: number;
    };
    mw5: {
        maxWidth: number;
    };
    mw6: {
        maxWidth: number;
    };
    mw7: {
        maxWidth: number;
    };
    miw: (minWidth: string | number) => {
        minWidth: string | number;
    };
    miw0: {
        minWidth: number;
    };
    miw1: {
        minWidth: number;
    };
    miw2: {
        minWidth: number;
    };
    miw3: {
        minWidth: number;
    };
    miw4: {
        minWidth: number;
    };
    miw5: {
        minWidth: number;
    };
    miw6: {
        minWidth: number;
    };
    miw7: {
        minWidth: number;
    };
    mih: (minHeight: string | number) => {
        minHeight: string | number;
    };
    mih0: {
        minHeight: number;
    };
    mih1: {
        minHeight: number;
    };
    mih2: {
        minHeight: number;
    };
    mih3: {
        minHeight: number;
    };
    mih4: {
        minHeight: number;
    };
    mih5: {
        minHeight: number;
    };
    mih6: {
        minHeight: number;
    };
    mih7: {
        minHeight: number;
    };
    flex: (size?: number) => {
        flex: number;
    };
    wh: (size: number) => {
        width: number;
        height: number;
    };
    wh1: {
        maxWidth: number;
        maxHeight: number;
    };
    wh2: {
        maxWidth: number;
        maxHeight: number;
    };
    wh3: {
        maxWidth: number;
        maxHeight: number;
    };
    wh4: {
        maxWidth: number;
        maxHeight: number;
    };
    wh5: {
        maxWidth: number;
        maxHeight: number;
    };
    wh6: {
        maxWidth: number;
        maxHeight: number;
    };
    wh7: {
        maxWidth: number;
        maxHeight: number;
    };
    vwh: (percent: number) => {
        width: number;
        height: number;
    };
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
    top: (offset?: string | number) => {
        top: string | number;
    };
    top0: {
        top: number;
    };
    top1: {
        top: number;
    };
    top2: {
        top: number;
    };
    left: (offset?: string | number) => {
        left: string | number;
    };
    left0: {
        left: number;
    };
    left1: {
        left: number;
    };
    left2: {
        left: number;
    };
    right: (offset?: string | number) => {
        right: string | number;
    };
    right0: {
        right: number;
    };
    right1: {
        right: number;
    };
    right2: {
        right: number;
    };
    bottom: (offset?: string | number) => {
        bottom: string | number;
    };
    bottom0: {
        bottom: number;
    };
    bottom1: {
        bottom: number;
    };
    bottom2: {
        bottom: number;
    };
    z: (index?: number) => {
        zIndex: number;
    };
    z0: {
        zIndex: number;
    };
    z1: {
        zIndex: number;
    };
    z2: {
        zIndex: number;
    };
    z3: {
        zIndex: number;
    };
    z100: {
        zIndex: number;
    };
    z999: {
        zIndex: number;
    };
    z9999: {
        zIndex: number;
    };
    pa: (size?: string | number) => {
        padding: string | number;
    };
    pa0: {
        padding: number;
    };
    pa1: {
        padding: number;
    };
    pa2: {
        padding: number;
    };
    pa3: {
        padding: number;
    };
    pa4: {
        padding: number;
    };
    pa5: {
        padding: number;
    };
    pa6: {
        padding: number;
    };
    pa7: {
        padding: number;
    };
    pt: (size?: string | number) => {
        paddingTop: string | number;
    };
    pt0: {
        paddingTop: number;
    };
    pt1: {
        paddingTop: number;
    };
    pt2: {
        paddingTop: number;
    };
    pt3: {
        paddingTop: number;
    };
    pt4: {
        paddingTop: number;
    };
    pt5: {
        paddingTop: number;
    };
    pt6: {
        paddingTop: number;
    };
    pt7: {
        paddingTop: number;
    };
    pr: (size?: string | number) => {
        paddingRight: string | number;
    };
    pr0: {
        paddingRight: number;
    };
    pr1: {
        paddingRight: number;
    };
    pr2: {
        paddingRight: number; /**
         * Parsing token into multi part
         */
    };
    pr3: {
        paddingRight: number;
    };
    pr4: {
        paddingRight: number;
    };
    pr5: {
        paddingRight: number;
    };
    pr6: {
        paddingRight: number;
    };
    pr7: {
        paddingRight: number;
    };
    pb: (size?: string | number) => {
        paddingBottom: string | number;
    };
    pb0: {
        paddingBottom: number;
    };
    pb1: {
        paddingBottom: number;
    };
    pb2: {
        paddingBottom: number;
    };
    pb3: {
        paddingBottom: number;
    };
    pb4: {
        paddingBottom: number;
    };
    pb5: {
        paddingBottom: number;
    };
    pb6: {
        paddingBottom: number;
    };
    pb7: {
        paddingBottom: number;
    };
    pl: (size?: string | number) => {
        paddingLeft: string | number;
    };
    pl0: {
        paddingLeft: number;
    };
    pl1: {
        paddingLeft: number;
    };
    pl2: {
        paddingLeft: number;
    };
    pl3: {
        paddingLeft: number;
    };
    pl4: {
        paddingLeft: number;
    };
    pl5: {
        paddingLeft: number;
    };
    pl6: {
        paddingLeft: number;
    };
    pl7: {
        paddingLeft: number;
    };
    ma: (size?: string | number) => {
        margin: string | number;
    };
    ma0: {
        margin: number;
    };
    ma1: {
        margin: number;
    };
    ma2: {
        margin: number;
    };
    ma3: {
        margin: number;
    };
    ma4: {
        margin: number;
    };
    ma5: {
        margin: number;
    };
    ma6: {
        margin: number;
    };
    ma7: {
        margin: number;
    };
    mt: (size?: string | number) => {
        marginTop: string | number;
    };
    mt0: {
        marginTop: number;
    };
    mt1: {
        marginTop: number;
    };
    mt2: {
        marginTop: number;
    };
    mt3: {
        marginTop: number;
    };
    mt4: {
        marginTop: number;
    };
    mt5: {
        marginTop: number;
    };
    mt6: {
        marginTop: number;
    };
    mt7: {
        marginTop: number;
    };
    mr: (size?: string | number) => {
        marginRight: string | number;
    };
    mr0: {
        marginRight: number;
    };
    mr1: {
        marginRight: number;
    };
    mr2: {
        marginRight: number;
    };
    mr3: {
        marginRight: number;
    };
    mr4: {
        marginRight: number;
    };
    mr5: {
        marginRight: number;
    };
    mr6: {
        marginRight: number;
    };
    mr7: {
        marginRight: number;
    };
    mb: (size?: string | number) => {
        marginBottom: string | number;
    };
    mb0: {
        marginBottom: number;
    };
    mb1: {
        marginBottom: number;
    };
    mb2: {
        marginBottom: number;
    };
    mb3: {
        marginBottom: number;
    };
    mb4: {
        marginBottom: number;
    };
    mb5: {
        marginBottom: number;
    };
    mb6: {
        marginBottom: number;
    };
    mb7: {
        marginBottom: number;
    };
    ml: (size?: string | number) => {
        marginLeft: string | number;
    };
    ml0: {
        marginLeft: number;
    };
    ml1: {
        marginLeft: number;
    };
    ml2: {
        marginLeft: number;
    };
    ml3: {
        marginLeft: number;
    };
    ml4: {
        marginLeft: number;
    };
    ml5: {
        marginLeft: number;
    };
    ml6: {
        marginLeft: number;
    };
    ml7: {
        marginLeft: number;
    };
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
        /**
         * Cached builded styles for not build it each time call again with same build string
         */
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
export declare const BUILDER_PACK: {
    LIGHT: {
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
        vh: (percent: number) => {
            height: number;
        };
        vh0: {
            height: number;
        };
        vh10: {
            height: number;
        };
        vh20: {
            height: number;
        };
        vh30: {
            height: number;
        };
        vh40: {
            height: number;
        };
        vh50: {
            height: number;
        };
        vh60: {
            height: number;
        };
        vh70: {
            height: number;
        };
        vh80: {
            height: number;
        };
        vh90: {
            height: number;
        };
        vh100: {
            height: number;
        };
        h: (height: string | number) => {
            height: string | number;
        };
        h0: {
            height: number;
        };
        h1: {
            height: number;
        };
        h2: {
            height: number;
        };
        h3: {
            height: number;
        };
        h4: {
            height: number;
        };
        h5: {
            height: number;
        };
        h6: {
            height: number;
        };
        h7: {
            height: number;
        };
        vw: (percent: number) => {
            width: number;
        };
        vw0: {
            width: number;
        };
        vw10: {
            width: number;
        };
        vw20: {
            width: number;
        };
        vw30: {
            width: number;
        };
        vw40: {
            width: number;
        };
        vw50: {
            width: number;
        };
        vw60: {
            width: number;
        };
        vw70: {
            width: number;
        };
        vw80: {
            width: number;
        };
        vw90: {
            width: number;
        };
        vw100: {
            width: number;
        };
        w: (width: string | number) => {
            width: string | number;
        };
        w0: {
            width: number;
        };
        w1: {
            width: number;
        };
        w2: {
            width: number;
        };
        w3: {
            width: number;
        };
        w4: {
            width: number;
        };
        w5: {
            width: number;
        };
        w6: {
            width: number;
        };
        w7: {
            width: number;
        };
        mvh: (percent: number) => {
            maxHeight: number;
        };
        mh: (maxHeight: number) => {
            maxHeight: number;
        };
        mh0: {
            maxHeight: number;
        }; /**
         * If token is passthroght
         */
        mh1: {
            maxHeight: number;
        };
        mh2: {
            maxHeight: number;
        };
        mh3: {
            maxHeight: number;
        };
        mh4: {
            maxHeight: number;
        };
        mh5: {
            maxHeight: number;
        };
        mh6: {
            maxHeight: number;
        };
        mh7: {
            maxHeight: number;
        };
        mvw: (percent: number) => {
            maxWidth: number;
        };
        mw: (maxWidth: number) => {
            maxWidth: number;
        };
        mw0: {
            maxWidth: number;
        };
        mw1: {
            maxWidth: number;
        };
        mw2: {
            maxWidth: number;
        };
        mw3: {
            maxWidth: number;
        };
        mw4: {
            maxWidth: number;
        };
        mw5: {
            maxWidth: number;
        };
        mw6: {
            maxWidth: number;
        };
        mw7: {
            maxWidth: number;
        };
        miw: (minWidth: string | number) => {
            minWidth: string | number;
        };
        miw0: {
            minWidth: number;
        };
        miw1: {
            minWidth: number;
        };
        miw2: {
            minWidth: number;
        };
        miw3: {
            minWidth: number;
        };
        miw4: {
            minWidth: number;
        };
        miw5: {
            minWidth: number;
        };
        miw6: {
            minWidth: number;
        };
        miw7: {
            minWidth: number;
        };
        mih: (minHeight: string | number) => {
            minHeight: string | number;
        };
        mih0: {
            minHeight: number;
        };
        mih1: {
            minHeight: number;
        };
        mih2: {
            minHeight: number;
        };
        mih3: {
            minHeight: number;
        };
        mih4: {
            minHeight: number;
        };
        mih5: {
            minHeight: number;
        };
        mih6: {
            minHeight: number;
        };
        mih7: {
            minHeight: number;
        };
        flex: (size?: number) => {
            flex: number;
        };
        wh: (size: number) => {
            width: number;
            height: number;
        };
        wh1: {
            maxWidth: number;
            maxHeight: number;
        };
        wh2: {
            maxWidth: number;
            maxHeight: number;
        };
        wh3: {
            maxWidth: number;
            maxHeight: number;
        };
        wh4: {
            maxWidth: number;
            maxHeight: number;
        };
        wh5: {
            maxWidth: number;
            maxHeight: number;
        };
        wh6: {
            maxWidth: number;
            maxHeight: number;
        };
        wh7: {
            maxWidth: number;
            maxHeight: number;
        };
        vwh: (percent: number) => {
            width: number;
            height: number;
        };
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
        top: (offset?: string | number) => {
            top: string | number;
        };
        top0: {
            top: number;
        };
        top1: {
            top: number;
        };
        top2: {
            top: number;
        };
        left: (offset?: string | number) => {
            left: string | number;
        };
        left0: {
            left: number;
        };
        left1: {
            left: number;
        };
        left2: {
            left: number;
        };
        right: (offset?: string | number) => {
            right: string | number;
        };
        right0: {
            right: number;
        };
        right1: {
            right: number;
        };
        right2: {
            right: number;
        };
        bottom: (offset?: string | number) => {
            bottom: string | number;
        };
        bottom0: {
            bottom: number;
        };
        bottom1: {
            bottom: number;
        };
        bottom2: {
            bottom: number;
        };
        z: (index?: number) => {
            zIndex: number;
        };
        z0: {
            zIndex: number;
        };
        z1: {
            zIndex: number;
        };
        z2: {
            zIndex: number;
        };
        z3: {
            zIndex: number;
        };
        z100: {
            zIndex: number;
        };
        z999: {
            zIndex: number;
        };
        z9999: {
            zIndex: number;
        };
        pa: (size?: string | number) => {
            padding: string | number;
        };
        pa0: {
            padding: number;
        };
        pa1: {
            padding: number;
        };
        pa2: {
            padding: number;
        };
        pa3: {
            padding: number;
        };
        pa4: {
            padding: number;
        };
        pa5: {
            padding: number;
        };
        pa6: {
            padding: number;
        };
        pa7: {
            padding: number;
        };
        pt: (size?: string | number) => {
            paddingTop: string | number;
        };
        pt0: {
            paddingTop: number;
        };
        pt1: {
            paddingTop: number;
        };
        pt2: {
            paddingTop: number;
        };
        pt3: {
            paddingTop: number;
        };
        pt4: {
            paddingTop: number;
        };
        pt5: {
            paddingTop: number;
        };
        pt6: {
            paddingTop: number;
        };
        pt7: {
            paddingTop: number;
        };
        pr: (size?: string | number) => {
            paddingRight: string | number;
        };
        pr0: {
            paddingRight: number;
        };
        pr1: {
            paddingRight: number;
        };
        pr2: {
            paddingRight: number; /**
             * Parsing token into multi part
             */
        };
        pr3: {
            paddingRight: number;
        };
        pr4: {
            paddingRight: number;
        };
        pr5: {
            paddingRight: number;
        };
        pr6: {
            paddingRight: number;
        };
        pr7: {
            paddingRight: number;
        };
        pb: (size?: string | number) => {
            paddingBottom: string | number;
        };
        pb0: {
            paddingBottom: number;
        };
        pb1: {
            paddingBottom: number;
        };
        pb2: {
            paddingBottom: number;
        };
        pb3: {
            paddingBottom: number;
        };
        pb4: {
            paddingBottom: number;
        };
        pb5: {
            paddingBottom: number;
        };
        pb6: {
            paddingBottom: number;
        };
        pb7: {
            paddingBottom: number;
        };
        pl: (size?: string | number) => {
            paddingLeft: string | number;
        };
        pl0: {
            paddingLeft: number;
        };
        pl1: {
            paddingLeft: number;
        };
        pl2: {
            paddingLeft: number;
        };
        pl3: {
            paddingLeft: number;
        };
        pl4: {
            paddingLeft: number;
        };
        pl5: {
            paddingLeft: number;
        };
        pl6: {
            paddingLeft: number;
        };
        pl7: {
            paddingLeft: number;
        };
        ma: (size?: string | number) => {
            margin: string | number;
        };
        ma0: {
            margin: number;
        };
        ma1: {
            margin: number;
        };
        ma2: {
            margin: number;
        };
        ma3: {
            margin: number;
        };
        ma4: {
            margin: number;
        };
        ma5: {
            margin: number;
        };
        ma6: {
            margin: number;
        };
        ma7: {
            margin: number;
        };
        mt: (size?: string | number) => {
            marginTop: string | number;
        };
        mt0: {
            marginTop: number;
        };
        mt1: {
            marginTop: number;
        };
        mt2: {
            marginTop: number;
        };
        mt3: {
            marginTop: number;
        };
        mt4: {
            marginTop: number;
        };
        mt5: {
            marginTop: number;
        };
        mt6: {
            marginTop: number;
        };
        mt7: {
            marginTop: number;
        };
        mr: (size?: string | number) => {
            marginRight: string | number;
        };
        mr0: {
            marginRight: number;
        };
        mr1: {
            marginRight: number;
        };
        mr2: {
            marginRight: number;
        };
        mr3: {
            marginRight: number;
        };
        mr4: {
            marginRight: number;
        };
        mr5: {
            marginRight: number;
        };
        mr6: {
            marginRight: number;
        };
        mr7: {
            marginRight: number;
        };
        mb: (size?: string | number) => {
            marginBottom: string | number;
        };
        mb0: {
            marginBottom: number;
        };
        mb1: {
            marginBottom: number;
        };
        mb2: {
            marginBottom: number;
        };
        mb3: {
            marginBottom: number;
        };
        mb4: {
            marginBottom: number;
        };
        mb5: {
            marginBottom: number;
        };
        mb6: {
            marginBottom: number;
        };
        mb7: {
            marginBottom: number;
        };
        ml: (size?: string | number) => {
            marginLeft: string | number;
        };
        ml0: {
            marginLeft: number;
        };
        ml1: {
            marginLeft: number;
        };
        ml2: {
            marginLeft: number;
        };
        ml3: {
            marginLeft: number;
        };
        ml4: {
            marginLeft: number;
        };
        ml5: {
            marginLeft: number;
        };
        ml6: {
            marginLeft: number;
        };
        ml7: {
            marginLeft: number;
        };
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
            /**
             * Cached builded styles for not build it each time call again with same build string
             */
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
    DARK: {
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
        vh: (percent: number) => {
            height: number;
        };
        vh0: {
            height: number;
        };
        vh10: {
            height: number;
        };
        vh20: {
            height: number;
        };
        vh30: {
            height: number;
        };
        vh40: {
            height: number;
        };
        vh50: {
            height: number;
        };
        vh60: {
            height: number;
        };
        vh70: {
            height: number;
        };
        vh80: {
            height: number;
        };
        vh90: {
            height: number;
        };
        vh100: {
            height: number;
        };
        h: (height: string | number) => {
            height: string | number;
        };
        h0: {
            height: number;
        };
        h1: {
            height: number;
        };
        h2: {
            height: number;
        };
        h3: {
            height: number;
        };
        h4: {
            height: number;
        };
        h5: {
            height: number;
        };
        h6: {
            height: number;
        };
        h7: {
            height: number;
        };
        vw: (percent: number) => {
            width: number;
        };
        vw0: {
            width: number;
        };
        vw10: {
            width: number;
        };
        vw20: {
            width: number;
        };
        vw30: {
            width: number;
        };
        vw40: {
            width: number;
        };
        vw50: {
            width: number;
        };
        vw60: {
            width: number;
        };
        vw70: {
            width: number;
        };
        vw80: {
            width: number;
        };
        vw90: {
            width: number;
        };
        vw100: {
            width: number;
        };
        w: (width: string | number) => {
            width: string | number;
        };
        w0: {
            width: number;
        };
        w1: {
            width: number;
        };
        w2: {
            width: number;
        };
        w3: {
            width: number;
        };
        w4: {
            width: number;
        };
        w5: {
            width: number;
        };
        w6: {
            width: number;
        };
        w7: {
            width: number;
        };
        mvh: (percent: number) => {
            maxHeight: number;
        };
        mh: (maxHeight: number) => {
            maxHeight: number;
        };
        mh0: {
            maxHeight: number;
        }; /**
         * If token is passthroght
         */
        mh1: {
            maxHeight: number;
        };
        mh2: {
            maxHeight: number;
        };
        mh3: {
            maxHeight: number;
        };
        mh4: {
            maxHeight: number;
        };
        mh5: {
            maxHeight: number;
        };
        mh6: {
            maxHeight: number;
        };
        mh7: {
            maxHeight: number;
        };
        mvw: (percent: number) => {
            maxWidth: number;
        };
        mw: (maxWidth: number) => {
            maxWidth: number;
        };
        mw0: {
            maxWidth: number;
        };
        mw1: {
            maxWidth: number;
        };
        mw2: {
            maxWidth: number;
        };
        mw3: {
            maxWidth: number;
        };
        mw4: {
            maxWidth: number;
        };
        mw5: {
            maxWidth: number;
        };
        mw6: {
            maxWidth: number;
        };
        mw7: {
            maxWidth: number;
        };
        miw: (minWidth: string | number) => {
            minWidth: string | number;
        };
        miw0: {
            minWidth: number;
        };
        miw1: {
            minWidth: number;
        };
        miw2: {
            minWidth: number;
        };
        miw3: {
            minWidth: number;
        };
        miw4: {
            minWidth: number;
        };
        miw5: {
            minWidth: number;
        };
        miw6: {
            minWidth: number;
        };
        miw7: {
            minWidth: number;
        };
        mih: (minHeight: string | number) => {
            minHeight: string | number;
        };
        mih0: {
            minHeight: number;
        };
        mih1: {
            minHeight: number;
        };
        mih2: {
            minHeight: number;
        };
        mih3: {
            minHeight: number;
        };
        mih4: {
            minHeight: number;
        };
        mih5: {
            minHeight: number;
        };
        mih6: {
            minHeight: number;
        };
        mih7: {
            minHeight: number;
        };
        flex: (size?: number) => {
            flex: number;
        };
        wh: (size: number) => {
            width: number;
            height: number;
        };
        wh1: {
            maxWidth: number;
            maxHeight: number;
        };
        wh2: {
            maxWidth: number;
            maxHeight: number;
        };
        wh3: {
            maxWidth: number;
            maxHeight: number;
        };
        wh4: {
            maxWidth: number;
            maxHeight: number;
        };
        wh5: {
            maxWidth: number;
            maxHeight: number;
        };
        wh6: {
            maxWidth: number;
            maxHeight: number;
        };
        wh7: {
            maxWidth: number;
            maxHeight: number;
        };
        vwh: (percent: number) => {
            width: number;
            height: number;
        };
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
        top: (offset?: string | number) => {
            top: string | number;
        };
        top0: {
            top: number;
        };
        top1: {
            top: number;
        };
        top2: {
            top: number;
        };
        left: (offset?: string | number) => {
            left: string | number;
        };
        left0: {
            left: number;
        };
        left1: {
            left: number;
        };
        left2: {
            left: number;
        };
        right: (offset?: string | number) => {
            right: string | number;
        };
        right0: {
            right: number;
        };
        right1: {
            right: number;
        };
        right2: {
            right: number;
        };
        bottom: (offset?: string | number) => {
            bottom: string | number;
        };
        bottom0: {
            bottom: number;
        };
        bottom1: {
            bottom: number;
        };
        bottom2: {
            bottom: number;
        };
        z: (index?: number) => {
            zIndex: number;
        };
        z0: {
            zIndex: number;
        };
        z1: {
            zIndex: number;
        };
        z2: {
            zIndex: number;
        };
        z3: {
            zIndex: number;
        };
        z100: {
            zIndex: number;
        };
        z999: {
            zIndex: number;
        };
        z9999: {
            zIndex: number;
        };
        pa: (size?: string | number) => {
            padding: string | number;
        };
        pa0: {
            padding: number;
        };
        pa1: {
            padding: number;
        };
        pa2: {
            padding: number;
        };
        pa3: {
            padding: number;
        };
        pa4: {
            padding: number;
        };
        pa5: {
            padding: number;
        };
        pa6: {
            padding: number;
        };
        pa7: {
            padding: number;
        };
        pt: (size?: string | number) => {
            paddingTop: string | number;
        };
        pt0: {
            paddingTop: number;
        };
        pt1: {
            paddingTop: number;
        };
        pt2: {
            paddingTop: number;
        };
        pt3: {
            paddingTop: number;
        };
        pt4: {
            paddingTop: number;
        };
        pt5: {
            paddingTop: number;
        };
        pt6: {
            paddingTop: number;
        };
        pt7: {
            paddingTop: number;
        };
        pr: (size?: string | number) => {
            paddingRight: string | number;
        };
        pr0: {
            paddingRight: number;
        };
        pr1: {
            paddingRight: number;
        };
        pr2: {
            paddingRight: number; /**
             * Parsing token into multi part
             */
        };
        pr3: {
            paddingRight: number;
        };
        pr4: {
            paddingRight: number;
        };
        pr5: {
            paddingRight: number;
        };
        pr6: {
            paddingRight: number;
        };
        pr7: {
            paddingRight: number;
        };
        pb: (size?: string | number) => {
            paddingBottom: string | number;
        };
        pb0: {
            paddingBottom: number;
        };
        pb1: {
            paddingBottom: number;
        };
        pb2: {
            paddingBottom: number;
        };
        pb3: {
            paddingBottom: number;
        };
        pb4: {
            paddingBottom: number;
        };
        pb5: {
            paddingBottom: number;
        };
        pb6: {
            paddingBottom: number;
        };
        pb7: {
            paddingBottom: number;
        };
        pl: (size?: string | number) => {
            paddingLeft: string | number;
        };
        pl0: {
            paddingLeft: number;
        };
        pl1: {
            paddingLeft: number;
        };
        pl2: {
            paddingLeft: number;
        };
        pl3: {
            paddingLeft: number;
        };
        pl4: {
            paddingLeft: number;
        };
        pl5: {
            paddingLeft: number;
        };
        pl6: {
            paddingLeft: number;
        };
        pl7: {
            paddingLeft: number;
        };
        ma: (size?: string | number) => {
            margin: string | number;
        };
        ma0: {
            margin: number;
        };
        ma1: {
            margin: number;
        };
        ma2: {
            margin: number;
        };
        ma3: {
            margin: number;
        };
        ma4: {
            margin: number;
        };
        ma5: {
            margin: number;
        };
        ma6: {
            margin: number;
        };
        ma7: {
            margin: number;
        };
        mt: (size?: string | number) => {
            marginTop: string | number;
        };
        mt0: {
            marginTop: number;
        };
        mt1: {
            marginTop: number;
        };
        mt2: {
            marginTop: number;
        };
        mt3: {
            marginTop: number;
        };
        mt4: {
            marginTop: number;
        };
        mt5: {
            marginTop: number;
        };
        mt6: {
            marginTop: number;
        };
        mt7: {
            marginTop: number;
        };
        mr: (size?: string | number) => {
            marginRight: string | number;
        };
        mr0: {
            marginRight: number;
        };
        mr1: {
            marginRight: number;
        };
        mr2: {
            marginRight: number;
        };
        mr3: {
            marginRight: number;
        };
        mr4: {
            marginRight: number;
        };
        mr5: {
            marginRight: number;
        };
        mr6: {
            marginRight: number;
        };
        mr7: {
            marginRight: number;
        };
        mb: (size?: string | number) => {
            marginBottom: string | number;
        };
        mb0: {
            marginBottom: number;
        };
        mb1: {
            marginBottom: number;
        };
        mb2: {
            marginBottom: number;
        };
        mb3: {
            marginBottom: number;
        };
        mb4: {
            marginBottom: number;
        };
        mb5: {
            marginBottom: number;
        };
        mb6: {
            marginBottom: number;
        };
        mb7: {
            marginBottom: number;
        };
        ml: (size?: string | number) => {
            marginLeft: string | number;
        };
        ml0: {
            marginLeft: number;
        };
        ml1: {
            marginLeft: number;
        };
        ml2: {
            marginLeft: number;
        };
        ml3: {
            marginLeft: number;
        };
        ml4: {
            marginLeft: number;
        };
        ml5: {
            marginLeft: number;
        };
        ml6: {
            marginLeft: number;
        };
        ml7: {
            marginLeft: number;
        };
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
            /**
             * Cached builded styles for not build it each time call again with same build string
             */
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
};
export declare const creator: (isDarkMode?: boolean, builderPack?: {
    LIGHT: {
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
        vh: (percent: number) => {
            height: number;
        };
        vh0: {
            height: number;
        };
        vh10: {
            height: number;
        };
        vh20: {
            height: number;
        };
        vh30: {
            height: number;
        };
        vh40: {
            height: number;
        };
        vh50: {
            height: number;
        };
        vh60: {
            height: number;
        };
        vh70: {
            height: number;
        };
        vh80: {
            height: number;
        };
        vh90: {
            height: number;
        };
        vh100: {
            height: number;
        };
        h: (height: string | number) => {
            height: string | number;
        };
        h0: {
            height: number;
        };
        h1: {
            height: number;
        };
        h2: {
            height: number;
        };
        h3: {
            height: number;
        };
        h4: {
            height: number;
        };
        h5: {
            height: number;
        };
        h6: {
            height: number;
        };
        h7: {
            height: number;
        };
        vw: (percent: number) => {
            width: number;
        };
        vw0: {
            width: number;
        };
        vw10: {
            width: number;
        };
        vw20: {
            width: number;
        };
        vw30: {
            width: number;
        };
        vw40: {
            width: number;
        };
        vw50: {
            width: number;
        };
        vw60: {
            width: number;
        };
        vw70: {
            width: number;
        };
        vw80: {
            width: number;
        };
        vw90: {
            width: number;
        };
        vw100: {
            width: number;
        };
        w: (width: string | number) => {
            width: string | number;
        };
        w0: {
            width: number;
        };
        w1: {
            width: number;
        };
        w2: {
            width: number;
        };
        w3: {
            width: number;
        };
        w4: {
            width: number;
        };
        w5: {
            width: number;
        };
        w6: {
            width: number;
        };
        w7: {
            width: number;
        };
        mvh: (percent: number) => {
            maxHeight: number;
        };
        mh: (maxHeight: number) => {
            maxHeight: number;
        };
        mh0: {
            maxHeight: number;
        }; /**
         * If token is passthroght
         */
        mh1: {
            maxHeight: number;
        };
        mh2: {
            maxHeight: number;
        };
        mh3: {
            maxHeight: number;
        };
        mh4: {
            maxHeight: number;
        };
        mh5: {
            maxHeight: number;
        };
        mh6: {
            maxHeight: number;
        };
        mh7: {
            maxHeight: number;
        };
        mvw: (percent: number) => {
            maxWidth: number;
        };
        mw: (maxWidth: number) => {
            maxWidth: number;
        };
        mw0: {
            maxWidth: number;
        };
        mw1: {
            maxWidth: number;
        };
        mw2: {
            maxWidth: number;
        };
        mw3: {
            maxWidth: number;
        };
        mw4: {
            maxWidth: number;
        };
        mw5: {
            maxWidth: number;
        };
        mw6: {
            maxWidth: number;
        };
        mw7: {
            maxWidth: number;
        };
        miw: (minWidth: string | number) => {
            minWidth: string | number;
        };
        miw0: {
            minWidth: number;
        };
        miw1: {
            minWidth: number;
        };
        miw2: {
            minWidth: number;
        };
        miw3: {
            minWidth: number;
        };
        miw4: {
            minWidth: number;
        };
        miw5: {
            minWidth: number;
        };
        miw6: {
            minWidth: number;
        };
        miw7: {
            minWidth: number;
        };
        mih: (minHeight: string | number) => {
            minHeight: string | number;
        };
        mih0: {
            minHeight: number;
        };
        mih1: {
            minHeight: number;
        };
        mih2: {
            minHeight: number;
        };
        mih3: {
            minHeight: number;
        };
        mih4: {
            minHeight: number;
        };
        mih5: {
            minHeight: number;
        };
        mih6: {
            minHeight: number;
        };
        mih7: {
            minHeight: number;
        };
        flex: (size?: number) => {
            flex: number;
        };
        wh: (size: number) => {
            width: number;
            height: number;
        };
        wh1: {
            maxWidth: number;
            maxHeight: number;
        };
        wh2: {
            maxWidth: number;
            maxHeight: number;
        };
        wh3: {
            maxWidth: number;
            maxHeight: number;
        };
        wh4: {
            maxWidth: number;
            maxHeight: number;
        };
        wh5: {
            maxWidth: number;
            maxHeight: number;
        };
        wh6: {
            maxWidth: number;
            maxHeight: number;
        };
        wh7: {
            maxWidth: number;
            maxHeight: number;
        };
        vwh: (percent: number) => {
            width: number;
            height: number;
        };
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
        top: (offset?: string | number) => {
            top: string | number;
        };
        top0: {
            top: number;
        };
        top1: {
            top: number;
        };
        top2: {
            top: number;
        };
        left: (offset?: string | number) => {
            left: string | number;
        };
        left0: {
            left: number;
        };
        left1: {
            left: number;
        };
        left2: {
            left: number;
        };
        right: (offset?: string | number) => {
            right: string | number;
        };
        right0: {
            right: number;
        };
        right1: {
            right: number;
        };
        right2: {
            right: number;
        };
        bottom: (offset?: string | number) => {
            bottom: string | number;
        };
        bottom0: {
            bottom: number;
        };
        bottom1: {
            bottom: number;
        };
        bottom2: {
            bottom: number;
        };
        z: (index?: number) => {
            zIndex: number;
        };
        z0: {
            zIndex: number;
        };
        z1: {
            zIndex: number;
        };
        z2: {
            zIndex: number;
        };
        z3: {
            zIndex: number;
        };
        z100: {
            zIndex: number;
        };
        z999: {
            zIndex: number;
        };
        z9999: {
            zIndex: number;
        };
        pa: (size?: string | number) => {
            padding: string | number;
        };
        pa0: {
            padding: number;
        };
        pa1: {
            padding: number;
        };
        pa2: {
            padding: number;
        };
        pa3: {
            padding: number;
        };
        pa4: {
            padding: number;
        };
        pa5: {
            padding: number;
        };
        pa6: {
            padding: number;
        };
        pa7: {
            padding: number;
        };
        pt: (size?: string | number) => {
            paddingTop: string | number;
        };
        pt0: {
            paddingTop: number;
        };
        pt1: {
            paddingTop: number;
        };
        pt2: {
            paddingTop: number;
        };
        pt3: {
            paddingTop: number;
        };
        pt4: {
            paddingTop: number;
        };
        pt5: {
            paddingTop: number;
        };
        pt6: {
            paddingTop: number;
        };
        pt7: {
            paddingTop: number;
        };
        pr: (size?: string | number) => {
            paddingRight: string | number;
        };
        pr0: {
            paddingRight: number;
        };
        pr1: {
            paddingRight: number;
        };
        pr2: {
            paddingRight: number; /**
             * Parsing token into multi part
             */
        };
        pr3: {
            paddingRight: number;
        };
        pr4: {
            paddingRight: number;
        };
        pr5: {
            paddingRight: number;
        };
        pr6: {
            paddingRight: number;
        };
        pr7: {
            paddingRight: number;
        };
        pb: (size?: string | number) => {
            paddingBottom: string | number;
        };
        pb0: {
            paddingBottom: number;
        };
        pb1: {
            paddingBottom: number;
        };
        pb2: {
            paddingBottom: number;
        };
        pb3: {
            paddingBottom: number;
        };
        pb4: {
            paddingBottom: number;
        };
        pb5: {
            paddingBottom: number;
        };
        pb6: {
            paddingBottom: number;
        };
        pb7: {
            paddingBottom: number;
        };
        pl: (size?: string | number) => {
            paddingLeft: string | number;
        };
        pl0: {
            paddingLeft: number;
        };
        pl1: {
            paddingLeft: number;
        };
        pl2: {
            paddingLeft: number;
        };
        pl3: {
            paddingLeft: number;
        };
        pl4: {
            paddingLeft: number;
        };
        pl5: {
            paddingLeft: number;
        };
        pl6: {
            paddingLeft: number;
        };
        pl7: {
            paddingLeft: number;
        };
        ma: (size?: string | number) => {
            margin: string | number;
        };
        ma0: {
            margin: number;
        };
        ma1: {
            margin: number;
        };
        ma2: {
            margin: number;
        };
        ma3: {
            margin: number;
        };
        ma4: {
            margin: number;
        };
        ma5: {
            margin: number;
        };
        ma6: {
            margin: number;
        };
        ma7: {
            margin: number;
        };
        mt: (size?: string | number) => {
            marginTop: string | number;
        };
        mt0: {
            marginTop: number;
        };
        mt1: {
            marginTop: number;
        };
        mt2: {
            marginTop: number;
        };
        mt3: {
            marginTop: number;
        };
        mt4: {
            marginTop: number;
        };
        mt5: {
            marginTop: number;
        };
        mt6: {
            marginTop: number;
        };
        mt7: {
            marginTop: number;
        };
        mr: (size?: string | number) => {
            marginRight: string | number;
        };
        mr0: {
            marginRight: number;
        };
        mr1: {
            marginRight: number;
        };
        mr2: {
            marginRight: number;
        };
        mr3: {
            marginRight: number;
        };
        mr4: {
            marginRight: number;
        };
        mr5: {
            marginRight: number;
        };
        mr6: {
            marginRight: number;
        };
        mr7: {
            marginRight: number;
        };
        mb: (size?: string | number) => {
            marginBottom: string | number;
        };
        mb0: {
            marginBottom: number;
        };
        mb1: {
            marginBottom: number;
        };
        mb2: {
            marginBottom: number;
        };
        mb3: {
            marginBottom: number;
        };
        mb4: {
            marginBottom: number;
        };
        mb5: {
            marginBottom: number;
        };
        mb6: {
            marginBottom: number;
        };
        mb7: {
            marginBottom: number;
        };
        ml: (size?: string | number) => {
            marginLeft: string | number;
        };
        ml0: {
            marginLeft: number;
        };
        ml1: {
            marginLeft: number;
        };
        ml2: {
            marginLeft: number;
        };
        ml3: {
            marginLeft: number;
        };
        ml4: {
            marginLeft: number;
        };
        ml5: {
            marginLeft: number;
        };
        ml6: {
            marginLeft: number;
        };
        ml7: {
            marginLeft: number;
        };
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
            /**
             * Cached builded styles for not build it each time call again with same build string
             */
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
    DARK: {
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
        vh: (percent: number) => {
            height: number;
        };
        vh0: {
            height: number;
        };
        vh10: {
            height: number;
        };
        vh20: {
            height: number;
        };
        vh30: {
            height: number;
        };
        vh40: {
            height: number;
        };
        vh50: {
            height: number;
        };
        vh60: {
            height: number;
        };
        vh70: {
            height: number;
        };
        vh80: {
            height: number;
        };
        vh90: {
            height: number;
        };
        vh100: {
            height: number;
        };
        h: (height: string | number) => {
            height: string | number;
        };
        h0: {
            height: number;
        };
        h1: {
            height: number;
        };
        h2: {
            height: number;
        };
        h3: {
            height: number;
        };
        h4: {
            height: number;
        };
        h5: {
            height: number;
        };
        h6: {
            height: number;
        };
        h7: {
            height: number;
        };
        vw: (percent: number) => {
            width: number;
        };
        vw0: {
            width: number;
        };
        vw10: {
            width: number;
        };
        vw20: {
            width: number;
        };
        vw30: {
            width: number;
        };
        vw40: {
            width: number;
        };
        vw50: {
            width: number;
        };
        vw60: {
            width: number;
        };
        vw70: {
            width: number;
        };
        vw80: {
            width: number;
        };
        vw90: {
            width: number;
        };
        vw100: {
            width: number;
        };
        w: (width: string | number) => {
            width: string | number;
        };
        w0: {
            width: number;
        };
        w1: {
            width: number;
        };
        w2: {
            width: number;
        };
        w3: {
            width: number;
        };
        w4: {
            width: number;
        };
        w5: {
            width: number;
        };
        w6: {
            width: number;
        };
        w7: {
            width: number;
        };
        mvh: (percent: number) => {
            maxHeight: number;
        };
        mh: (maxHeight: number) => {
            maxHeight: number;
        };
        mh0: {
            maxHeight: number;
        }; /**
         * If token is passthroght
         */
        mh1: {
            maxHeight: number;
        };
        mh2: {
            maxHeight: number;
        };
        mh3: {
            maxHeight: number;
        };
        mh4: {
            maxHeight: number;
        };
        mh5: {
            maxHeight: number;
        };
        mh6: {
            maxHeight: number;
        };
        mh7: {
            maxHeight: number;
        };
        mvw: (percent: number) => {
            maxWidth: number;
        };
        mw: (maxWidth: number) => {
            maxWidth: number;
        };
        mw0: {
            maxWidth: number;
        };
        mw1: {
            maxWidth: number;
        };
        mw2: {
            maxWidth: number;
        };
        mw3: {
            maxWidth: number;
        };
        mw4: {
            maxWidth: number;
        };
        mw5: {
            maxWidth: number;
        };
        mw6: {
            maxWidth: number;
        };
        mw7: {
            maxWidth: number;
        };
        miw: (minWidth: string | number) => {
            minWidth: string | number;
        };
        miw0: {
            minWidth: number;
        };
        miw1: {
            minWidth: number;
        };
        miw2: {
            minWidth: number;
        };
        miw3: {
            minWidth: number;
        };
        miw4: {
            minWidth: number;
        };
        miw5: {
            minWidth: number;
        };
        miw6: {
            minWidth: number;
        };
        miw7: {
            minWidth: number;
        };
        mih: (minHeight: string | number) => {
            minHeight: string | number;
        };
        mih0: {
            minHeight: number;
        };
        mih1: {
            minHeight: number;
        };
        mih2: {
            minHeight: number;
        };
        mih3: {
            minHeight: number;
        };
        mih4: {
            minHeight: number;
        };
        mih5: {
            minHeight: number;
        };
        mih6: {
            minHeight: number;
        };
        mih7: {
            minHeight: number;
        };
        flex: (size?: number) => {
            flex: number;
        };
        wh: (size: number) => {
            width: number;
            height: number;
        };
        wh1: {
            maxWidth: number;
            maxHeight: number;
        };
        wh2: {
            maxWidth: number;
            maxHeight: number;
        };
        wh3: {
            maxWidth: number;
            maxHeight: number;
        };
        wh4: {
            maxWidth: number;
            maxHeight: number;
        };
        wh5: {
            maxWidth: number;
            maxHeight: number;
        };
        wh6: {
            maxWidth: number;
            maxHeight: number;
        };
        wh7: {
            maxWidth: number;
            maxHeight: number;
        };
        vwh: (percent: number) => {
            width: number;
            height: number;
        };
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
        top: (offset?: string | number) => {
            top: string | number;
        };
        top0: {
            top: number;
        };
        top1: {
            top: number;
        };
        top2: {
            top: number;
        };
        left: (offset?: string | number) => {
            left: string | number;
        };
        left0: {
            left: number;
        };
        left1: {
            left: number;
        };
        left2: {
            left: number;
        };
        right: (offset?: string | number) => {
            right: string | number;
        };
        right0: {
            right: number;
        };
        right1: {
            right: number;
        };
        right2: {
            right: number;
        };
        bottom: (offset?: string | number) => {
            bottom: string | number;
        };
        bottom0: {
            bottom: number;
        };
        bottom1: {
            bottom: number;
        };
        bottom2: {
            bottom: number;
        };
        z: (index?: number) => {
            zIndex: number;
        };
        z0: {
            zIndex: number;
        };
        z1: {
            zIndex: number;
        };
        z2: {
            zIndex: number;
        };
        z3: {
            zIndex: number;
        };
        z100: {
            zIndex: number;
        };
        z999: {
            zIndex: number;
        };
        z9999: {
            zIndex: number;
        };
        pa: (size?: string | number) => {
            padding: string | number;
        };
        pa0: {
            padding: number;
        };
        pa1: {
            padding: number;
        };
        pa2: {
            padding: number;
        };
        pa3: {
            padding: number;
        };
        pa4: {
            padding: number;
        };
        pa5: {
            padding: number;
        };
        pa6: {
            padding: number;
        };
        pa7: {
            padding: number;
        };
        pt: (size?: string | number) => {
            paddingTop: string | number;
        };
        pt0: {
            paddingTop: number;
        };
        pt1: {
            paddingTop: number;
        };
        pt2: {
            paddingTop: number;
        };
        pt3: {
            paddingTop: number;
        };
        pt4: {
            paddingTop: number;
        };
        pt5: {
            paddingTop: number;
        };
        pt6: {
            paddingTop: number;
        };
        pt7: {
            paddingTop: number;
        };
        pr: (size?: string | number) => {
            paddingRight: string | number;
        };
        pr0: {
            paddingRight: number;
        };
        pr1: {
            paddingRight: number;
        };
        pr2: {
            paddingRight: number; /**
             * Parsing token into multi part
             */
        };
        pr3: {
            paddingRight: number;
        };
        pr4: {
            paddingRight: number;
        };
        pr5: {
            paddingRight: number;
        };
        pr6: {
            paddingRight: number;
        };
        pr7: {
            paddingRight: number;
        };
        pb: (size?: string | number) => {
            paddingBottom: string | number;
        };
        pb0: {
            paddingBottom: number;
        };
        pb1: {
            paddingBottom: number;
        };
        pb2: {
            paddingBottom: number;
        };
        pb3: {
            paddingBottom: number;
        };
        pb4: {
            paddingBottom: number;
        };
        pb5: {
            paddingBottom: number;
        };
        pb6: {
            paddingBottom: number;
        };
        pb7: {
            paddingBottom: number;
        };
        pl: (size?: string | number) => {
            paddingLeft: string | number;
        };
        pl0: {
            paddingLeft: number;
        };
        pl1: {
            paddingLeft: number;
        };
        pl2: {
            paddingLeft: number;
        };
        pl3: {
            paddingLeft: number;
        };
        pl4: {
            paddingLeft: number;
        };
        pl5: {
            paddingLeft: number;
        };
        pl6: {
            paddingLeft: number;
        };
        pl7: {
            paddingLeft: number;
        };
        ma: (size?: string | number) => {
            margin: string | number;
        };
        ma0: {
            margin: number;
        };
        ma1: {
            margin: number;
        };
        ma2: {
            margin: number;
        };
        ma3: {
            margin: number;
        };
        ma4: {
            margin: number;
        };
        ma5: {
            margin: number;
        };
        ma6: {
            margin: number;
        };
        ma7: {
            margin: number;
        };
        mt: (size?: string | number) => {
            marginTop: string | number;
        };
        mt0: {
            marginTop: number;
        };
        mt1: {
            marginTop: number;
        };
        mt2: {
            marginTop: number;
        };
        mt3: {
            marginTop: number;
        };
        mt4: {
            marginTop: number;
        };
        mt5: {
            marginTop: number;
        };
        mt6: {
            marginTop: number;
        };
        mt7: {
            marginTop: number;
        };
        mr: (size?: string | number) => {
            marginRight: string | number;
        };
        mr0: {
            marginRight: number;
        };
        mr1: {
            marginRight: number;
        };
        mr2: {
            marginRight: number;
        };
        mr3: {
            marginRight: number;
        };
        mr4: {
            marginRight: number;
        };
        mr5: {
            marginRight: number;
        };
        mr6: {
            marginRight: number;
        };
        mr7: {
            marginRight: number;
        };
        mb: (size?: string | number) => {
            marginBottom: string | number;
        };
        mb0: {
            marginBottom: number;
        };
        mb1: {
            marginBottom: number;
        };
        mb2: {
            marginBottom: number;
        };
        mb3: {
            marginBottom: number;
        };
        mb4: {
            marginBottom: number;
        };
        mb5: {
            marginBottom: number;
        };
        mb6: {
            marginBottom: number;
        };
        mb7: {
            marginBottom: number;
        };
        ml: (size?: string | number) => {
            marginLeft: string | number;
        };
        ml0: {
            marginLeft: number;
        };
        ml1: {
            marginLeft: number;
        };
        ml2: {
            marginLeft: number;
        };
        ml3: {
            marginLeft: number;
        };
        ml4: {
            marginLeft: number;
        };
        ml5: {
            marginLeft: number;
        };
        ml6: {
            marginLeft: number;
        };
        ml7: {
            marginLeft: number;
        };
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
            /**
             * Cached builded styles for not build it each time call again with same build string
             */
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
}) => (styleString: string) => StyleProp<{}>;
