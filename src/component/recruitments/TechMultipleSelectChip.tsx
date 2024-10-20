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
import CommonButton from "../elements/CommonButton";

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

const frontStacks = [
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Svelt",
  "Nextjs",
];
const backEndStacks = ["Nodejs", "Java", "Spring", "Go"];

function getStyles(
  name: string,
  allStackName: readonly string[],
  theme: Theme
) {
  return {
    fontWeight:
      allStackName.indexOf(name) === -1
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
  onStackChange: (stacks: string[]) => void;
};

export default function TechMultipleSelectChip({
  label,
  onStackChange,
}: IProps) {
  const theme = useTheme();
  const [allStackName, setAllStackName] = React.useState<string[]>([]);
  const [frontStackName, setFrontStackName] = React.useState<string[]>([]);
  const [backStackName, setBackStackName] = React.useState<string[]>([]);
  const selectRef = useRef<HTMLDivElement>(null);
  const [menuWidth, setMenuWidth] = useState<number | undefined>(undefined);
  const [tabValue, setTabValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleAllStackChange = (
    event: React.MouseEvent<HTMLLIElement>,
    value: string
  ) => {
    event.preventDefault();
    setAllStackName((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
    if (frontStacks.includes(value)) {
      setFrontStackName((prev) => {
        if (prev.includes(value)) {
          return prev.filter((item) => item !== value);
        } else {
          return [...prev, value];
        }
      });
    } else if (backEndStacks.includes(value)) {
      setBackStackName((prev) => {
        if (prev.includes(value)) {
          return prev.filter((item) => item !== value);
        } else {
          return [...prev, value];
        }
      });
    }
  };
  const handleAllStackDelete =
    (valueToDelete: string) => (event: React.MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();

      const newValue = allStackName.filter((name) => name !== valueToDelete);
      setAllStackName(newValue);

      if (frontStacks.includes(valueToDelete)) {
        setFrontStackName((prev) =>
          prev.filter((name) => name !== valueToDelete)
        );
      } else if (backEndStacks.includes(valueToDelete)) {
        setBackStackName((prev) =>
          prev.filter((name) => name !== valueToDelete)
        );
      }
    };

  const handleFrontStackChange = (
    event: React.MouseEvent<HTMLLIElement>,
    value: string
  ) => {
    event.preventDefault();
    setFrontStackName((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
    setAllStackName((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };
  const handleFrontStackDelete =
    (valueToDelete: string) => (event: React.MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      const newValue = frontStackName.filter((name) => name !== valueToDelete);

      setFrontStackName(newValue);
      setAllStackName((pre) =>
        [...pre].filter((name) => name !== valueToDelete)
      );
    };

  const handleBackStackChange = (
    event: React.MouseEvent<HTMLLIElement>,
    value: string
  ) => {
    event.preventDefault();
    setBackStackName((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
    setAllStackName((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };
  const handleBackStackDelete =
    (valueToDelete: string) => (event: React.MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      const newValue = backStackName.filter((name) => name !== valueToDelete);

      setBackStackName(newValue);
      setAllStackName((pre) =>
        [...pre].filter((name) => name !== valueToDelete)
      );
    };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // !======= Start 各タブの「全て初期化」処理
  const handleAllStackReset = () => {
    setFrontStackName([]);
    setBackStackName([]);
    setAllStackName([]);
  };

  const handleFrontStackReset = () => {
    setFrontStackName([]);
    setAllStackName((prev) =>
      prev.filter((name) => !frontStacks.includes(name))
    );
  };

  const handleBackStackReset = () => {
    setBackStackName([]);
    setAllStackName((prev) =>
      prev.filter((name) => !backEndStacks.includes(name))
    );
  };
  // !======= End 各タブの「全て初期化」処理

  const handleClose = () => {
    setOpen(false);
    console.log("handleClose!!!");
    onStackChange(allStackName);
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
        value={allStackName}
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
          return allStackName.length < 2 ? (
            <Typography fontSize={"14px"}>{allStackName[0]}</Typography>
          ) : (
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                my: "auto",
                gap: "3px",
              }}
            >
              <Typography fontSize={"14px"}>{allStackName[0]}</Typography>
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
                    {allStackName.length - 1}
                  </Typography>
                }
                sx={{ p: "1px", height: "20px" }}
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
        </Box>
        {"All tab select"}
        {tabValue === 0 && (
          <Stack>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, p: 1 }}>
              {frontStacks.concat(backEndStacks).map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  onClick={(event) => handleAllStackChange(event, name)}
                  style={getStyles(name, allStackName, theme)}
                  sx={{
                    bgcolor: allStackName.includes(name)
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
            {/** chips area */}
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                // gap: "20px",
                paddingInline: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {allStackName.map((name) => (
                  <Chip
                    key={name}
                    label={name}
                    onMouseDown={(event) => {
                      event.stopPropagation();
                    }}
                    onDelete={handleAllStackDelete(name)}
                    sx={{ height: "20px", m: "2px" }}
                  />
                ))}
              </Box>
              <CommonButton
                sx={{ minWidth: "100px" }}
                text={"全て初期化"}
                variant="outlined"
                onClick={handleAllStackReset}
              />
            </Stack>
          </Stack>
        )}
        {"FrontEnd tab select"}
        {tabValue === 1 && (
          <Stack>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, p: 1 }}>
              {frontStacks.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  onClick={(event) => handleFrontStackChange(event, name)}
                  style={getStyles(name, frontStackName, theme)}
                  sx={{
                    bgcolor: frontStackName.includes(name)
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
            {/** chips area */}
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                // gap: "20px",
                paddingInline: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {frontStackName.map((name) => (
                  <Chip
                    key={name}
                    label={name}
                    onMouseDown={(event) => {
                      event.stopPropagation();
                    }}
                    onDelete={handleFrontStackDelete(name)}
                    sx={{ height: "20px", m: "2px" }}
                  />
                ))}
              </Box>
              <CommonButton
                sx={{ minWidth: "100px" }}
                text={"全て初期化"}
                variant="outlined"
                onClick={handleFrontStackReset}
              />
            </Stack>
          </Stack>
        )}
        {"BackEnd tab select"}
        {tabValue === 2 && (
          <Stack>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, p: 1 }}>
              {backEndStacks.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  onClick={(event) => handleBackStackChange(event, name)}
                  style={getStyles(name, backStackName, theme)}
                  sx={{
                    bgcolor: backStackName.includes(name)
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
            {/** chips area */}
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                // gap: "20px",
                paddingInline: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {backStackName.map((name) => (
                  <Chip
                    key={name}
                    label={name}
                    onMouseDown={(event) => {
                      event.stopPropagation();
                    }}
                    onDelete={handleBackStackDelete(name)}
                    sx={{ height: "20px", m: "2px" }}
                  />
                ))}
              </Box>
              <CommonButton
                sx={{ minWidth: "100px" }}
                text={"全て初期化"}
                variant="outlined"
                onClick={handleBackStackReset}
              />
            </Stack>
          </Stack>
        )}
      </Select>
    </FormControl>
  );
}
