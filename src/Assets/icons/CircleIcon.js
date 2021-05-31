import React from 'react';
import Svg, {Path} from 'react-native-svg';

function CircleIcon(props) {
  // console.log("props in user", props.SVGStrings)
  // let size = props.size ? props.size : 40;
  return (
    <Svg height="15" width="15" viewBox="0 0 34.76 34.76">
      <Path
        fill={props.iconColor}
        fillRule="evenodd"
        d="M17.38 34.76C7.797 34.76.001 26.964.001 17.38S7.797 0 17.38 0s17.379 7.796 17.379 17.38-7.796 17.38-17.379 17.38zm0-28.265c-6.002 0-10.885 4.882-10.885 10.885s4.883 10.885 10.885 10.885 10.885-4.882 10.885-10.885S23.382 6.495 17.38 6.495z"
      />
    </Svg>
  );
}

export default CircleIcon;
