import { SvgIcon } from "@mui/material";

type IProps = {
  width?: string;
  height?: string;
};

export default function GoogleIcon({
  width = "20px",
  height = "20px",
}: IProps) {
  return (
    <SvgIcon sx={{ width: width, height: height, borderRadius: "100px" }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="white" />
        {/* <mask
          id="mask0_754_4923"
          style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="3"
          y="3"
          width="18"
          height="18"
        >
          <rect x="3" y="3" width="18" height="18" fill="white" />
        </mask> */}
        <g mask="url(#mask0_754_4923)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.3541 10.5311H18.75V10.5H12V13.5H16.2386C15.6203 15.2464 13.9586 16.5 12 16.5C9.51488 16.5 7.5 14.4851 7.5 12C7.5 9.51488 9.51488 7.5 12 7.5C13.1471 7.5 14.1908 7.93275 14.9854 8.63963L17.1067 6.51825C15.7673 5.26987 13.9755 4.5 12 4.5C7.85813 4.5 4.5 7.85813 4.5 12C4.5 16.1419 7.85813 19.5 12 19.5C16.1419 19.5 19.5 16.1419 19.5 12C19.5 11.4971 19.4482 11.0062 19.3541 10.5311Z"
            fill="#FFC107"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.36475 8.50912L7.82887 10.3162C8.49562 8.6655 10.1104 7.5 12 7.5C13.1471 7.5 14.1907 7.93275 14.9854 8.63962L17.1067 6.51825C15.7672 5.26987 13.9755 4.5 12 4.5C9.11925 4.5 6.621 6.12637 5.36475 8.50912Z"
            fill="#FF3D00"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9999 19.5003C13.9371 19.5003 15.6974 18.7589 17.0282 17.5533L14.707 15.589C13.954 16.1594 13.018 16.5003 11.9999 16.5003C10.0491 16.5003 8.39275 15.2564 7.76875 13.5205L5.323 15.4049C6.56425 17.8338 9.085 19.5003 11.9999 19.5003Z"
            fill="#4CAF50"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.3541 10.5311H18.75V10.5H12V13.5H16.2386C15.9416 14.3389 15.402 15.0623 14.706 15.5891C14.7064 15.5888 14.7068 15.5887 14.7071 15.5884L17.0284 17.5526C16.8641 17.7019 19.5 15.75 19.5 12C19.5 11.4971 19.4482 11.0063 19.3541 10.5311Z"
            fill="#1976D2"
          />
        </g>
      </svg>
    </SvgIcon>
  );
}
