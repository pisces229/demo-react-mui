/* eslint-disable @typescript-eslint/no-unused-vars */
import { Autocomplete, AutocompleteChangeDetails, AutocompleteChangeReason, AutocompleteInputChangeReason, Button, Checkbox, Radio, TextField } from '@mui/material';
import { useState } from 'react';

export function DemoComponentApp() {
return (
  <>
    {/* <DemoAutocomplete /> */}
    {/* <DemoButton /> */}
    {/* <DemoCheckbox /> */}
    <DemoRadio />
  </>
  );
}

const DemoAutocomplete = () => {
  const [inputOption, setInputOption] = useState<{id: number, label: string} | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const options = [
    { id: 1, label: 'The Godfather' },
    { id: 2, label: 'Pulp Fiction' },
  ];
  const onChangeOption = (
    event: React.SyntheticEvent<Element, Event>,
    value: { id: number; label: string; } | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<{ id: number; label: string; }> | undefined) => {
      console.log('onChange', event);
      console.log('onChange', value);
      console.log('onChange', reason);
      console.log('onChange', details);
      setInputOption(value);
    };
  const onInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason) => {
      console.log('onInputChange', event);
      console.log('onInputChange', value);
      console.log('onInputChange', reason);
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
}

const DemoButton = () => {
  const onClick = () => console.log('Button');
  return (
  <Button variant='contained' color='success' onClick={onClick}>Button</Button>
  );
}

const DemoCheckbox = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    console.log(event.target.name, checked);
  };
  return (
  <>
    <Checkbox color='secondary' name='secondary' onChange={onChange} />
    <Checkbox color='success' name='success' onChange={onChange} />
    <Checkbox color='default' name='default' onChange={onChange} />
  </>
  );
};

const DemoRadio = () => {
  const [value, setValue] = useState<string>('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    console.log(event.target.name, checked);
    setValue(event.target.value);
  };
  return (
  <>
    <Radio name='radio' value='a' checked={value === 'a'} onChange={onChange} />
    <Radio name='radio' value='b' checked={value === 'b'} onChange={onChange} />
  </>
  );
};
