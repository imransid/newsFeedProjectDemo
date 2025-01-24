import * as React from "react";
import Svg, { Mask, Path, Defs, LinearGradient, Stop } from "react-native-svg";
const BGComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={236}
        height={95}
        viewBox="0 0 236 95"
        fill="none"
        {...props}
    >
        <Mask id="path-1-inside-1_1_1513" fill="white">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M215.881 0H11.1189C4.9781 0 0 6.99617 0 15.6264V78.0056C0 86.6359 4.9781 93.632 11.1189 93.632H215.881C218.383 93.632 220.692 92.4705 222.55 90.5102C225.715 93.2874 229.996 95.4517 235.464 94.9191C229.828 90.4144 226.657 82.649 227.304 74.9339L227 75.0891V15.6264C227 6.99617 222.022 0 215.881 0Z"
            />
        </Mask>
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M215.881 0H11.1189C4.9781 0 0 6.99617 0 15.6264V78.0056C0 86.6359 4.9781 93.632 11.1189 93.632H215.881C218.383 93.632 220.692 92.4705 222.55 90.5102C225.715 93.2874 229.996 95.4517 235.464 94.9191C229.828 90.4144 226.657 82.649 227.304 74.9339L227 75.0891V15.6264C227 6.99617 222.022 0 215.881 0Z"
            fill="url(#paint0_linear_1_1513)"
        />
        <Path
            d="M222.55 90.5102L221.824 89.8223L222.486 89.1238L223.21 89.7586L222.55 90.5102ZM235.464 94.9191L236.088 94.138L238.012 95.6756L235.561 95.9144L235.464 94.9191ZM227.304 74.9339L226.849 74.0434L228.45 73.2249L228.3 75.0174L227.304 74.9339ZM227 75.0891L227.455 75.9796L226 76.7231V75.0891H227ZM11.1189 -1H215.881V1H11.1189V-1ZM-1 15.6264C-1 11.1277 0.295929 7.01298 2.44186 3.9971C4.58627 0.983368 7.64001 -1 11.1189 -1V1C8.45699 1 5.95128 2.51472 4.07144 5.15662C2.19313 7.79639 1 11.4948 1 15.6264H-1ZM-1 78.0056V15.6264H1V78.0056H-1ZM11.1189 94.632C7.64 94.632 4.58627 92.6487 2.44186 89.6349C0.295929 86.619 -1 82.5043 -1 78.0056H1C1 82.1372 2.19313 85.8356 4.07144 88.4754C5.95128 91.1173 8.457 92.632 11.1189 92.632V94.632ZM215.881 94.632H11.1189V92.632H215.881V94.632ZM223.276 91.1981C221.27 93.3147 218.712 94.632 215.881 94.632V92.632C218.055 92.632 220.115 91.6264 221.824 89.8223L223.276 91.1981ZM223.21 89.7586C226.229 92.408 230.247 94.4225 235.367 93.9238L235.561 95.9144C229.746 96.4808 225.201 94.1668 221.891 91.2619L223.21 89.7586ZM234.84 95.7003C228.921 90.9699 225.635 82.8689 226.307 74.8504L228.3 75.0174C227.679 82.4291 230.734 89.8588 236.088 94.138L234.84 95.7003ZM227.759 75.8244L227.455 75.9796L226.545 74.1986L226.849 74.0434L227.759 75.8244ZM228 15.6264V75.0891H226V15.6264H228ZM215.881 -1C219.36 -1 222.414 0.983369 224.558 3.9971C226.704 7.01298 228 11.1277 228 15.6264H226C226 11.4948 224.807 7.79639 222.929 5.15662C221.049 2.51472 218.543 1 215.881 1V-1Z"
            fill="#EEEEEE"
            mask="url(#path-1-inside-1_1_1513)"
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_1_1513"
                x1={-0.00000126792}
                y1={47.5001}
                x2={235.464}
                y2={47.5001}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#34506D" />
                <Stop offset={1} stopColor="#3498DB" />
            </LinearGradient>
        </Defs>
    </Svg>
);
export default BGComponent;
