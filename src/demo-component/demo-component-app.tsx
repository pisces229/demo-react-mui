/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
  Button,
  Checkbox,
  MenuItem,
  Radio,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export function DemoComponentApp() {
  return (
    <>
      <h1>Demo Component App</h1>
      <DemoAutocomplete />
      <DemoButton />
      <DemoCheckbox />
      <DemoRadio />
      <DemoSelect />
      <DemoSwitch />
      <DemoTextField />
    </>
  );
}

const DemoAutocomplete = () => {
  // const [inputOption, setInputOption] = useState<{id: number, label: string} | null>(null);
  const [inputOption, setInputOption] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  // const options = [
  //   { id: 0, label: 'A' },
  //   { id: 1, label: 'B' },
  //   { id: 2, label: 'C' },
  //   { id: 3, label: 'D' },
  //   { id: 4, label: 'E' },
  //   { id: 5, label: 'F' },
  //   { id: 6, label: 'G' },
  //   { id: 7, label: 'H' },
  //   { id: 8, label: 'I' },
  //   { id: 9, label: 'J' },
  // ];
  const options = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const onChangeOption = (
    event: React.SyntheticEvent<Element, Event>,
    value: string | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<string>
  ) => {
    console.log("onChange", value);
    console.log("onChange", reason);
    console.log("onChange", details);
    setInputOption(value);
  };
  const onInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => {
    console.log("onInputChange", event);
    console.log("onInputChange", value);
    console.log("onInputChange", reason);
    setInputValue(value);
  };
  return (
    <>
      <Autocomplete
        disablePortal
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} />}
        value={inputOption}
        onChange={onChangeOption}
        inputValue={inputValue}
        onInputChange={onInputChange}
      />
    </>
  );
};

const DemoButton = () => {
  const onClick = () => console.log("Button");
  return (
    <Button name="Button" variant="contained" color="success" onClick={onClick}>
      Button
    </Button>
  );
};

const DemoCheckbox = () => {
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    console.log(event.target.name, checked);
  };
  return (
    <>
      <Checkbox color="secondary" name="secondary" onChange={onChange} />
      <Checkbox color="success" name="success" onChange={onChange} />
      <Checkbox color="default" name="default" onChange={onChange} />
    </>
  );
};

const DemoRadio = () => {
  const [value, setValue] = useState<string>("");
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    console.log(event.target.name, checked);
    setValue(event.target.value);
  };
  return (
    <>
      <Radio
        name="Radio"
        value="a"
        checked={value === "a"}
        onChange={onChange}
      />
      <Radio
        name="Radio"
        value="b"
        checked={value === "b"}
        onChange={onChange}
      />
    </>
  );
};

const DemoSelect = () => {
  // const [value, setValue] = useState<string>('');
  const [value, setValue] = useState<string[]>(["1", "2"]);
  const onChange = (event: SelectChangeEvent<string[]>) => {
    console.log(event.target.name, event.target.value);
    setValue(event.target.value as string[]);
  };
  return (
    <>
      <Select
        name="Select"
        multiple
        value={value}
        onChange={onChange}
        autoWidth
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="1">A</MenuItem>
        <MenuItem value="2">B</MenuItem>
        <MenuItem value="3">C</MenuItem>
      </Select>
    </>
  );
};

const DemoSwitch = () => {
  const [value, setValue] = useState<boolean>(false);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name, event.target.checked);
    setValue(event.target.checked);
  };
  return (
    <>
      <Switch name="Switch" checked={value} onChange={onChange} />
    </>
  );
};

const DemoTextField = () => {
  const [value, setValue] = useState<string>("");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name, event.target.value);
    setValue(event.target.value);
  };
  return (
    <>
      <TextField
        name="TextField"
        // multiline
        // maxRows={4}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
