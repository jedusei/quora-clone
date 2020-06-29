import React from 'react';
import { Image, View } from 'react-native';

export default function ({ style, ...props }) {
    return (
        <View style={style}>
            <Image {...props}
                style={{
                    resizeMode: style.resizeMode,
                    width: style.width - (2 * style.borderWidth),
                    height: style.height - (2 * style.borderWidth),
                    borderRadius: style.borderRadius
                }} />
        </View>
    );
}