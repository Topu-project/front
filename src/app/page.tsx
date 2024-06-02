"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Icon, Pagination, Stack } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import styles from "./page.module.css";
import PopularCard from "@/component/PopularCard";
import dummy from "../app/dummy";
import textColors from "@/lib/colors";

export default function Home() {
  const [products, setProducts] = React.useState(dummy);
  //  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(
  //   null
  // );
  // const open = Boolean(anchorEl);
  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const iconRight = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="#F5F5F5" />
      <g id="Desktop - 1">
        <rect
          width="1440"
          height="2590"
          transform="translate(-1258 -480)"
          fill="white"
        />
        <g id="popularCardGroup">
          <g id="play_circle_outline" clip-path="url(#clip0_13_1807)">
            <path
              id="Vector"
              d="M10 16.5L16 12L10 7.5V16.5ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
              fill="#BDBDBD"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_13_1807">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  const iconLeft = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="play_circle_outline">
        <path
          id="Vector"
          d="M14 7.5L8 12L14 16.5L14 7.5ZM12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4Z"
          fill="#BDBDBD"
        />
      </g>
    </svg>
  );

  return (
    <div
      style={{
        overflow: "hidden",
        width: "90%",
        marginInline: "auto",
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          backgroundColor: "#d9d9d9",
          width: "100%",
          height: "306px",
          marginInline: "auto",
          borderRadius: "36px",
          background: "#d9d9d9",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "42px",
          paddingRight: "30px",
        }}
      >
        {/** heder part */}
        <div>
          <div
            style={{
              font: "24px bold",
              color: textColors.pointColor.purpleMain,
            }}
          >
            今週の話題
          </div>
          <div>
            <Icon>{iconLeft()}</Icon>
            <Icon>{iconRight()}</Icon>
          </div>
          {/** contents part */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              // overflowX: "scroll",
              // display: "grid",
              // gridTemplateRows: "1fr ",
              // gridTemplateColumns: "1fr 1fr 1fr 1fr",
            }}
          >
            {dummy.map(() => {
              return (
                <div>
                  <PopularCard />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Pagination
        count={10}
        variant="outlined"
        color="secondary"
        sx={{ marginInline: "auto" }}
      />
      {/* <Stack>
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          style={{ maxWidth: "100px" }}
        >
          Options
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <EditIcon />
            Edit
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <FileCopyIcon />
            Duplicate
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            <ArchiveIcon />
            Archive
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <MoreHorizIcon />
            More
          </MenuItem>
        </StyledMenu>
      </Stack>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button
              variant="contained"
              {...bindTrigger(popupState)}
              sx={{ maxWidth: "200px" }}
            >
              Dashboard
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>Profile</MenuItem>
              <MenuItem onClick={popupState.close}>My account</MenuItem>
              <MenuItem onClick={popupState.close}>Logout</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState> */}
    </div>
  );
}

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
