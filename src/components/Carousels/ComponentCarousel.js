import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { styles } from '../styles';

const DEVICE_WIDTH = Dimensions.get('window').width;

const useComponentCarousel = () => {
  const [index, setIndex] = useState(0);
  const updateIndex = event => {
    //width of the view size
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    //get current position of scrollView
    const contentOffset = event.nativeEvent.contentOffset.x;

    const selectedIndex = Math.floor(contentOffset / viewSize);
    setIndex(selectedIndex);
  };
  return { updateIndex, index, setIndex };
};

const ComponentCarousel = ({ slides, dimensions: { width, height } }) => {
  const { updateIndex, index: selectedIndex, setIndex } = useComponentCarousel();
  const scrollRef = useRef();
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    scrollRef.current.scrollTo({
      animated: true,
      y: 0,
      x: DEVICE_WIDTH * selectedIndex,
    });
    return () => clearInterval(interval);
  }, [selectedIndex, setIndex, slides.length, width]);

  return (
    <View style={{ width, height, ...styles.bg_white, ...styles.marginBottom_md }}>
      <ScrollView
        horizontal
        pagingEnabled
        onMomentumScrollEnd={updateIndex}
        ref={scrollRef}
        style={CarouselStyles.slider}>
        {slides.map((Slide, index) => (
          <View key={index} style={{ ...CarouselStyles.slide }}>
            {Slide}
          </View>
        ))}
      </ScrollView>
      <View style={CarouselStyles.circleDiv}>
        {slides.map((slide, index) => (
          <View
            key={index}
            style={[
              CarouselStyles.whiteCircle,
              index === selectedIndex ? styles.bg_color1 : styles.bg_white,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const CarouselStyles = StyleSheet.create({
  slider: {
    width: DEVICE_WIDTH,
  },

  slide: {
    width: DEVICE_WIDTH,
    height: '100%',
    paddingHorizontal: 5,
  },
  circleDiv: {
    position: 'absolute',
    bottom: 15,
    height: 10,
    width: '100%',
    ...styles.justifyContent_center,
    ...styles.alignItems_center,
    ...styles.row,
  },
  whiteCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    ...styles.margin_sm,
    ...styles.bg_white,
  },
});

export default ComponentCarousel;
