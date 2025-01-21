

import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MessageComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={13}
        height={13}
        viewBox="0 0 13 13"
        fill="none"
        {...props}
    >
        <Path
            d="M6.525 12.05C7.61774 12.05 8.68594 11.726 9.59452 11.1189C10.5031 10.5118 11.2113 9.64889 11.6294 8.63933C12.0476 7.62976 12.157 6.51887 11.9438 5.44713C11.7307 4.37538 11.2044 3.39092 10.4318 2.61824C9.65908 1.84555 8.67462 1.31935 7.60287 1.10616C6.53113 0.892981 5.42023 1.00239 4.41067 1.42057C3.40111 1.83874 2.53822 2.5469 1.93113 3.45548C1.32404 4.36406 1 5.43226 1 6.525C1 7.43847 1.221 8.29914 1.61389 9.05852L1 12.05L3.99148 11.4361C4.75025 11.8284 5.61215 12.05 6.525 12.05Z"
            stroke="#145E94"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default MessageComponent;
