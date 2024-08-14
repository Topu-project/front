"use client";
import * as React from "react";
import { styled, Theme, useTheme } from "@mui/material/styles";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Box,
  Stack,
  Typography,
  OutlinedInput,
  Tab,
  Tabs,
} from "@mui/material";
import { useRef, useState } from "react";
import { AddCircle } from "@mui/icons-material";
import CommonButton from "./CommonButton";
import { white } from "@/lib/colorConfig";
import topuColors from "@/lib/colors";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Svelt",
  "Nextjs",
  "Nodejs",
  "Java",
  "Spring",
  "Go",
];
const names2 = ["JavaScript", "TypeScript", "React", "Vue", "Svelt", "Nextjs"];
const names3 = ["Nodejs", "Java", "Spring", "Go"];

function getStyles(name: string, stackName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      stackName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff",
  },
});

const AntTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  minWidth: 0,
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: "rgba(0, 0, 0, 0.85)",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    color: "#40a9ff",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "#1890ff",
    fontWeight: theme.typography.fontWeightMedium,
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
}));

interface StyledTabProps {
  label: string;
}

type IProps = {
  label: string;
};

export default function MultipleSelectChip({ label }: IProps) {
  const theme = useTheme();
  const [stackName, setStackName] = React.useState<string[]>([]);
  const selectRef = useRef<HTMLDivElement>(null);
  const [menuWidth, setMenuWidth] = useState<number | undefined>(undefined);
  const [tabValue, setTabValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleChange = (
    event: React.MouseEvent<HTMLLIElement>,
    value: string
  ) => {
    event.preventDefault();
    setStackName((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };
  const handleDelete = (valueToDelete: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const newValue = stackName.filter((name) => name !== valueToDelete);
    setStackName(newValue);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  // width: "-webkit-fill-available"
  React.useEffect(() => {
    if (selectRef.current) {
      setMenuWidth(selectRef.current.offsetWidth);
    }
  }, []);

  return (
    <FormControl
      sx={{
        width: "100%",
        "& .MuiFormLabel-root.MuiInputLabel-root": {
          top: "-5px",
        },
      }}
    >
      <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={stackName}
        input={<OutlinedInput id="select-multiple-chip" label={label} />}
        ref={selectRef}
        sx={{
          borderRadius: "30px",
          pl: "10px",
          "& .MuiSelect-select": {
            // display: "flex",
            // flexWrap: "wrap",
            p: 1,
          },
          "& .MuiSelect-nativeInput": {
            top: 0,
          },
        }}
        renderValue={(selected) => {
          return stackName.length < 2 ? (
            <Typography fontSize={"14px"}>{stackName[0]}</Typography>
          ) : (
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                my: "auto",
                gap: "6px",
              }}
            >
              <Typography fontSize={"14px"}>{stackName[0]}</Typography>
              <Chip
                icon={
                  <AddCircle
                    sx={{
                      fontSize: "14px",
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: "12px",
                      ml: "-3px",
                      mr: "-4px",
                    }}
                  >
                    {stackName.length - 1}
                  </Typography>
                }
                sx={{ p: "3px", height: "20px" }}
              />
            </Stack>
          );
        }}
        MenuProps={{
          PaperProps: {
            style: {
              width: "600px",
              maxHeight: "300px",
            },
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          disableScrollLock: true,
        }}
      >
        <Box
          sx={{
            width: "100%",
            bgcolor: "#fff",
            display: "flex",
            justifyContent: "space-between",
            paddingInline: "10px",
            alignItems: "center",
          }}
        >
          <AntTabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="ant example"
          >
            <AntTab label="All" />
            <AntTab label="フロントエンド" />
            <AntTab label="バッグエンド" />
            {/* <AntTab label="Tab 3" /> */}
          </AntTabs>
          <CommonButton
            text={"検索"}
            href=""
            sx={{
              backgroundColor: topuColors.pointColor.purpleMain,
              color: white,
              // border: `1px solid ${topuColors.pointColor.purpleMain}`,
              fontSize: "14px",
              width: "100%",
              height: "24px",
              borderRadius: 40,
              ":hover": {
                backgroundColor: "rgba(155, 39, 176, 0.6) !important",
                boxShadow: "none !important",
                border: `1px solid rgba(155, 39, 176, 0.6) !important`,
              },
              "&:active": {
                backgroundColor: "rgba(0, 0, 0, 0) !important",
                boxShadow: "none !important",
                border: `1px solid rgba(155, 39, 176, 0.6) !important`,
              },
            }}
          />
        </Box>
        {tabValue === 0 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, p: 1 }}>
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                onClick={(event) => handleChange(event, name)}
                style={getStyles(name, stackName, theme)}
                sx={{
                  bgcolor: stackName.includes(name)
                    ? "action.selected"
                    : "transparent",
                  "&:hover": {
                    bgcolor: "action.hover",
                  },
                  padding: "4px 8px", // 패딩 줄이기
                  minHeight: "auto", // 최소 높이 제거
                }}
              >
                {name}
              </MenuItem>
            ))}
          </Box>
        )}
        {tabValue === 2 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, p: 1 }}>
            {names3.map((name) => (
              <MenuItem
                key={name}
                value={name}
                onClick={(event) => handleChange(event, name)}
                style={getStyles(name, stackName, theme)}
                sx={{
                  bgcolor: stackName.includes(name)
                    ? "action.selected"
                    : "transparent",
                  "&:hover": {
                    bgcolor: "action.hover",
                  },
                }}
              >
                {name}
              </MenuItem>
            ))}
          </Box>
        )}
        {tabValue === 1 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, p: 1 }}>
            {names2.map((name) => (
              <MenuItem
                key={name}
                value={name}
                onClick={(event) => handleChange(event, name)}
                style={getStyles(name, stackName, theme)}
                sx={{
                  bgcolor: stackName.includes(name)
                    ? "action.selected"
                    : "transparent",
                  "&:hover": {
                    bgcolor: "action.hover",
                  },
                }}
              >
                {name}
              </MenuItem>
            ))}
          </Box>
        )}
        {/** chips area */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0.5,
            m: "10px",
            mb: "4px",
          }}
        >
          {stackName.map((name) => (
            <Chip
              key={name}
              label={name}
              onMouseDown={(event) => {
                event.stopPropagation();
              }}
              onDelete={handleDelete(name)}
              sx={{ height: "20px", m: "2px" }}
            />
          ))}
        </Box>
      </Select>
    </FormControl>
  );
}
