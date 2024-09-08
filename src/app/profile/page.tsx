
'use client';

import { Typography, Box, Grid, Avatar, FormControl, TextField, RadioGroup, FormControlLabel, Radio, InputLabel, MenuItem, Select, SelectChangeEvent, Chip, Theme, Button, IconButton } from '@mui/material';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import EmptyTextarea from '@/component/Elements/EmptyTextarea';
import DeleteIcon from '@mui/icons-material/Delete';

const name = "かわいい猫"

// Define Each mini component
export function RedDot() {
  return (
    <Typography component="span" sx={{ color: "red" }}>*</Typography>
  )
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    sx: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      minWidth: "100%",
    },
  },
};

const names = [
  'Java',
  'Spring',
  'React',
  'Angular',
  'Vuejs',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function erofilePExpYear() {
  const [expYear, eetExpYear] = React.useState<string>('1');
  const handleChangeForExpYear = (event: SelectChangeEvent) => {
    eetExpYear(event.target.value as string);
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChangeForStacks = (event: SelectChangeEvent<typeof personName>) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };


  return (
    <Box>
      {/* 탑(사진+아이디) */}
      <Grid container direction="column"
        sx={{
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "20px"
        }}
      >
        <Avatar
          src="https://img.freepik.com/free-photo/close-up-portrait-beautiful-cat_23-2149214373.jpg?t=st=1725283120~exp=1725286720~hmac=4d17977f8375ef4f15970816549ea362a2584fae72dcfe14f050aab5b666baa9&w=1380"
          sx={{ height: '150px', width: '150px' }}
        />
        <Typography sx={{ m: '20px' }}>{name}様 ようこそ</Typography>
      </Grid>

      <Grid container direction="row"
        sx={{
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {/* 닉네임 */}
        <Grid item xs={12}>ニックネーム <RedDot /></Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ my: 1 }}>
            <TextField placeholder={'Chris.P.Bacon'} id="nickName" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>　</Grid>

        {/* 직종 */}
        <Grid item xs={12}>職種 <RedDot /></Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ my: 1 }}>
            <TextField placeholder={'フロントエンド'} id="jobKind" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>　</Grid>

        {/* 소속 */}
        <Grid item xs={8}>所属</Grid>
        <Grid item xs={4}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{ justifyContent: "flex-end" }}
          >
            <FormControlLabel value="private" control={<Radio />} label="非公開" />
            <FormControlLabel value="public" control={<Radio />} label="公開" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ my: 1 }}>
            <TextField placeholder={'マイクロンソフト'} id="jobKind" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>　</Grid>

        {/* 경력 */}
        <Grid item xs={12}>経歴 <RedDot /></Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ my: 1 }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={expYear}
              onChange={handleChangeForExpYear}
              MenuProps={MenuProps}
            >
              <MenuItem value={1}>1年未満</MenuItem>
              <MenuItem value={2}>3年未満</MenuItem>
              <MenuItem value={3}>5年未満</MenuItem>
              <MenuItem value={4}>10年以上</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>　</Grid>

      </Grid>

      {/* 자기소개 */ }
      <Grid item xs={12}>自己紹介</Grid>
      <Grid item xs={12}>
        <FormControl fullWidth sx={{ my: 1 }}>
          <EmptyTextarea aria-label="minimum height" />
        </FormControl>
      </Grid>
      <Grid item xs={12}>　</Grid>

      {/* 관심Stack */ }
      <Grid item xs={12}>関心Stack <RedDot /></Grid>
      <Grid item xs={12}>
        <FormControl fullWidth sx={{ my: 1 }}>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleChangeForStacks}
            // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
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
      </Grid>
      <Grid item xs={12}>　</Grid>

      {/* 링크 - List */ }
      <Grid item xs={12}>Link <RedDot /></Grid>
      <Grid item xs={12}> 
        <Grid container spacing={2}>
          <Grid item xs={7}>
          <FormControl fullWidth sx={{ my: 1 }}>
              <TextField placeholder={'Chris.P.Bacon'} id="nickName" />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
          <FormControl fullWidth sx={{ my: 1 }}>
              <TextField placeholder={'Chris.P.Bacon'} id="nickName" />
            </FormControl>
          </Grid>
          <Grid item xs={1} sx={{display: 'flex', justifyContent: 'center'}}>
          <IconButton aria-label="delete" >
            <DeleteIcon />
          </IconButton>
          </Grid>
        </Grid>
      </Grid>

      {/* 추가버튼 */ }
      <Grid item xs={12} sx={{ my: 1 }}>
        <Box>追加 +</Box>
      </Grid>

      {/* 보존버튼 */ }
      <Grid item xs={12} sx={{ my: 5, display: 'flex', justifyContent: 'center' }}>
        <Button
          sx={{
            width: '80%', // 버튼 너비를 80%로 설정
            padding: 2,
            backgroundColor: 'purple', // 보라색 배경
            color: 'white', // 흰색 글자
            '&:hover': {
              backgroundColor: 'darkviolet', // hover 시 진한 보라색
            },
          }}
        >
          PROFILE保存
        </Button>
      </Grid>

    </Box >

  );
}
