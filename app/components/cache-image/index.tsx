/**
 * Cache image component
 * @format
 */

import React, { useState } from 'react';
import { Image, ActivityIndicator } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Colors } from '@app/styles';
import { styles } from './styles';

const CacheImage = props => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    loaderShown = true,
    placeholderSource,
    placeHolderImageStyle,
    source,
    loaderProps,
    style,
    onLoadStart,
    onLoad,
    onError,
    onLoadEnd,
    children,
    ...rest
  } = props;

  return (
    <FastImage
      source={source}
      style={style}
      onLoadStart={() => {
        setLoading(true);
        onLoadStart?.();
      }}
      onLoad={() => {
        setImageLoaded(true);
        onLoad?.();
      }}
      onError={() => {
        setImageLoaded(false);
        onError?.();
      }}
      onLoadEnd={() => {
        setLoading(false);
        onLoadEnd?.();
      }}
      {...rest}>
      {!imageLoaded && placeholderSource && (
        <Image
          source={placeholderSource}
          style={[styles.placeholderImageStyle, placeHolderImageStyle]}
        />
      )}

      {children}

      {loading && loaderShown && (
        <ActivityIndicator
          style={styles.loaderStyle}
          color={Colors.white}
          {...loaderProps}
        />
      )}
    </FastImage>
  );
};

export { CacheImage };
