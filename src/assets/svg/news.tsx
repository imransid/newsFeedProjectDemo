
import * as React from "react";
import Svg, { Path } from "react-native-svg";
const News = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={20}
        viewBox="0 0 22 20"
        fill="none"
        {...props}
    >
        <Path
            d="M1.15921 1V16.4915C1.15921 17.0785 1.39109 17.6414 1.80385 18.0564C2.2166 18.4715 2.77642 18.7046 3.36014 18.7046H18.7666C19.3504 18.7046 19.9102 18.4715 20.3229 18.0564C20.7357 17.6414 20.9676 17.0785 20.9676 16.4915V5.42615H16.5657"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M1.15921 1H16.5657V16.4915C16.5657 17.0785 16.7976 17.6414 17.2103 18.0564C17.6231 18.4715 18.1829 18.7046 18.7666 18.7046M12.1638 5.42615H5.56107M12.1638 9.85231H7.76199"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default News;
