import React from "react";
import ReactDOM from "react-dom";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

function handlechange() {
  console.log("holaa");
}
function Form() {
  var [location, setLocation] = useState("");
  var [name, setName] = useState("");
  var [lastname, setLastname] = useState("");
  var [adresse, setAdresse] = useState();
  var [birthday, setBirthday] = useState();
  return (
    <div>
      <div className="input">
        <TextField
          id="standard-basic"
          label="Nom"
          variant="standard"
          onChange={(event) => setLastname(event.target.value)}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Prenom"
          variant="standard"
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Adresse"
          variant="standard"
          onChange={(event) => setAdresse(event.target.value)}
        />
      </div>
      <div className="select">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Pays</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={location}
            label="Location"
            onChange={(event) => setLocation(event.target.value)}
          >
            <MenuItem value={"Tunisie"}>Tunisie</MenuItem>
            <MenuItem value={"France"}>France</MenuItem>
            <MenuItem value={"Allemagne"}>Allemagne</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="stack">
        <Stack component="form" noValidate spacing={3}>
          <TextField
            id="date"
            label="Date de naissance"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => setBirthday(event.target.value)}
          />
        </Stack>
      </div>

      <Button
        id="submit"
        variant="contained"
        onClick={() =>
          console.log(
            "Nom : ",
            lastname,
            "Prenom : ",
            name,
            "Adresse :",
            adresse,
            "Pays : ",
            location,
            "Date de naissance :",
            birthday
          )
        }
      >
        Submit
      </Button>
    </div>
  );
}
export default Form;
