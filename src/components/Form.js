import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Typography,
} from "@mui/material";
import "./../styles/Form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    file: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, file: event.target.files[0] });
  };

  const handleSubmit = () => {
    alert(`Submitted Data:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <Box className="form-container">
      <Typography variant="h4" className="form-title">
        Healthcare Dashboard
      </Typography>
      <form>
        <TextField
          label="Full Name" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Age</InputLabel> <br></br>
          <Select
            name="age"
            value={formData.age}
            onChange={handleChange}
          >
            {[...Array(100).keys()].map((age) => (
              <MenuItem key={age + 1} value={age + 1}>
                {age + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          component="label"
          className="upload-button"
        >
          Upload File
          <input
            type="file"
            hidden
            onChange={handleFileChange}
          />
        </Button>
        <Button
          type="button"
          variant="contained"
          color="primary"
          fullWidth
          className="submit-button"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default Form;
