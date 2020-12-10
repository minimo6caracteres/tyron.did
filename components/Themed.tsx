/*
    tyron.did: Self-sovereign digital identity decentralized application on the Zilliqa blockchain platform
    Copyright (C) 2020 Julio Cesar Cabrapan Duarte

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
*/

import * as React from 'react';
import * as ReactNative from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Constants from 'expo-constants';

// Background images
export const welcomeBackground = require('../assets/images/welcomeBackground.jpg');
export const welcomeImage = require('../assets/images/welcomeImage.jpg');

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & ReactNative.Text['props'];
export type ViewProps = ThemeProps & ReactNative.View['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <ReactNative.Text style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <ReactNative.SafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export const styles = ReactNative.StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    marginTop: Constants.statusBarHeight,
  },
  welcomeImage: {
    height: ReactNative.Dimensions.get('screen').height,
  },
  container: {
    flex: 1,
    height: ReactNative.Dimensions.get('screen').height,
    width: ReactNative.Dimensions.get('screen').width,
    //alignItems: 'center',
    //justifyContent: 'space-around',
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    marginHorizontal: 40,
  },
  tab: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Ubuntu_400Regular',
    lineHeight: 40,
    fontWeight: 'bold',
    marginBottom: 10, 
    color: '#fff'
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row-reverse'
  },
  button: {
    margin: 10,
    backgroundColor: '#58929b',
    padding: 5,
    borderRadius: 5,
    borderBottomWidth: 0,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 50,
    color: '#fff',
    fontFamily: 'Ubuntu_400Regular',
    marginTop: 20,
    marginBottom: 20,
  },
  inputText: {
    flex: 1,
    fontSize: 50,
    color: '#7e9e81',
    marginTop: 20,
    marginBottom: 20,
    fontFamily: 'Ubuntu_400Regular',
  },
  options: {
    flex: 1,
    backgroundColor: '#7e9e81',
    fontSize: 20,
    flexDirection: "row"
  },
  radioText: {
    marginRight: 35,
    fontSize: 25,
    fontFamily: 'Ubuntu_400Regular',
    color: '#000',
    fontWeight: '700',
  },
	radioCircle: {
		height: 25,
		width: 25,
		borderRadius: 100,
		borderWidth: 3,
		borderColor: '#185c49',
		alignItems: 'center',
    justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
    backgroundColor: '#708b9b',
  },
});
