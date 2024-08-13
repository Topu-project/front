"use client";
import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useRef, useState } from "react";

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

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

type IProps = {
  label: string;
};

export default function MultipleSelectChip({ label }: IProps) {
  const theme = useTheme();
  const [stackName, setStackName] = React.useState<string[]>([]);
  const selectRef = useRef<HTMLDivElement>(null);
  const [menuWidth, setMenuWidth] = useState<number | undefined>(undefined);

  const handleChange = (event: SelectChangeEvent<typeof stackName>) => {
    const {
      target: { value },
    } = event;
    setStackName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleDelete = (valueToDelete: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setStackName((prevStackNames) =>
      prevStackNames.filter((stackName) => stackName !== valueToDelete)
    );
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
        value={stackName}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label={label} />}
        ref={selectRef}
        sx={{
          "& .MuiSelect-select": {
            p: 1,
          },
          "& .MuiSelect-nativeInput": {
            top: 0,
          },
        }}
        renderValue={(selected) => (
          <>
            {selected.map((value) => (
              <Chip
                key={value}
                label={value}
                onMouseDown={(event) => {
                  event.stopPropagation();
                }}
                onDelete={handleDelete(value)}
                sx={{ m: "2px" }}
              />
            ))}
          </>
        )}
        MenuProps={{
          PaperProps: {
            style: {
              width: menuWidth,
              maxHeight: 48 * 4.5 + 8,
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
        }}
      >
        {names.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, stackName, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
