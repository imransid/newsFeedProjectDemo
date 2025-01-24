import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Ball = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={21}
        viewBox="0 0 21 21"
        fill="none"
        {...props}
    >
        <Path
            d="M10.1133 19.5477C15.2061 19.5477 19.3344 15.3958 19.3344 10.2738C19.3344 5.1519 15.2061 1 10.1133 1C5.02042 1 0.892105 5.1519 0.892105 10.2738C0.892105 15.3958 5.02042 19.5477 10.1133 19.5477Z"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M16.1736 3.28296C13.7143 7.48401 13.7143 12.2999 16.1736 17.2642M4.05327 3.28296C6.51255 7.48401 6.51255 12.2999 4.05327 17.2642"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default Ball;
