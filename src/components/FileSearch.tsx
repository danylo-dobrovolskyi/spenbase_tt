import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { observer } from 'mobx-react';

export const FileSearch: React.FC = observer(() => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
});