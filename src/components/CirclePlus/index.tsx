import * as React from "react";
import Svg, { Circle, Line, Defs, ClipPath, Rect } from "react-native-svg";
const CircleComponent = (props: any) => (
    <Svg width={57} height={57} xmlns="http://www.w3.org/2000/svg" {...props}>
        <Circle
            cx={28.5}
            cy={28.5}
            r={28}
            stroke="#145E94"
            strokeDasharray="2 2"
            fill="none"
        />
        <Line
            x1={18.5}
            y1={28.5}
            x2={38.5}
            y2={28.5}
            stroke="#145E94"
            strokeWidth={2}
        />
        <Line
            x1={28.5}
            y1={18.5}
            x2={28.5}
            y2={38.5}
            stroke="#145E94"
            strokeWidth={2}
        />
        <Defs>
            <ClipPath id="clip0_3_1909">
                <Rect width={20} height={20} x={18.5} y={18.5} fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default CircleComponent;
