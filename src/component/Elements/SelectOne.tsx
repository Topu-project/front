"use client";
import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useRef, useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

function getStyles(name: string, personName: string, theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

type IProps = {
  label: string;
  opts: string[];
  onProgressMethodChange: (method: string) => void;
};

export default function SelectOne({
  label,
  opts,
  onProgressMethodChange,
}: IProps) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string>("");
  const selectRef = useRef<HTMLDivElement>(null);
  const [menuWidth, setMenuWidth] = useState<number | undefined>(undefined);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      value
    );
  };

  useEffect(() => {
    if (selectRef.current) {
      setMenuWidth(selectRef.current.offsetWidth);
    }
    onProgressMethodChange(personName);
  }, [personName]);

  return (
    <div>
      <FormControl
        sx={{
          width: "100%",
          "& .MuiFormLabel-root.MuiInputLabel-root": {
            top: "-5px",
          },
        }}
      >
        <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          ref={selectRef}
          sx={{
            width: "100%",
            borderRadius: "30px",
            pl: "10px",
            "& .MuiSelect-select": {
              p: 1,
            },
            "& .MuiSelect-nativeInput": {
              top: 0,
            },
          }}
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
            disableScrollLock: true,
          }}
        >
          {opts.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
