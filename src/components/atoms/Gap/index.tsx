import {View} from 'react-native';
import React from 'react';

interface GapProps {
  width?: number;
  height?: number;
}

const Gap: React.FC<GapProps> = ({width = 0, height = 0}) => {
  return <View style={{width: width, height: height}} />;
};

export default Gap;
