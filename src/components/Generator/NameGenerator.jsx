import {
  Container,
  Typography,
  Divider,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";

const maleFirstNames = [
  "Martin",
  "Liam",
  "Noah",
  "Oliver",
  "Elijah",
  "William",
  "James",
  "Benjamin",
  "Lucas",
  "Henry",
  "Alexander",
  "Sebastian",
  "Matthew",
  "David",
  "Joseph",
  "Jackson",
  "Daniel",
  "Michael",
  "Logan",
  "Andrew",
  "Gabriel",
  "Nicholas",
  "Leo",
  "John",
  "Samuel",
  "Ryan",
  "Nathan",
  "Christopher",
  "Isaac",
  "Jonathan",
  "Caleb",
  "Anthony",
  "Dylan",
  "Brandon",
  "Thomas",
  "Tyler",
  "Jack",
  "Aiden",
  "Owen",
  "Henry",
  "Cameron",
  "Evan",
  "Mason",
  "Adrian",
  "Eli",
  "Colton",
  "Connor",
  "Jordan",
];

const maleLastNames = [
  "Smith",
  "Johnson",
  "Brown",
  "Williams",
  "Jones",
  "Davis",
  "Miller",
  "Wilson",
  "Moore",
  "Taylor",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
  "Harris",
  "Martin",
  "Thompson",
  "Clark",
  "Lewis",
  "Lee",
  "Walker",
  "Allen",
  "Young",
  "King",
  "Wright",
  "Lopez",
  "Hill",
  "Scott",
  "Green",
  "Adams",
  "Baker",
  "Nelson",
  "Carter",
  "Mitchell",
  "Roberts",
  "Turner",
  "Phillips",
  "Parker",
  "Evans",
  "Hall",
  "Murphy",
  "Cook",
  "Morris",
  "Gray",
  "Rogers",
  "James",
  "Reed",
  "Harrison",
  "Morgan",
];

const femaleFirstNames = [
  "Emma",
  "Olivia",
  "Ava",
  "Charlotte",
  "Amelia",
  "Sophia",
  "Isabella",
  "Mia",
  "Harper",
  "Evelyn",
  "Abigail",
  "Emily",
  "Elizabeth",
  "Sofia",
  "Madison",
  "Avery",
  "Ella",
  "Scarlett",
  "Grace",
  "Chloe",
  "Victoria",
  "Riley",
  "Zoe",
  "Natalie",
  "Lily",
  "Lucy",
  "Aria",
  "Hannah",
  "Layla",
  "Penelope",
  "Lillian",
  "Addison",
  "Aubrey",
  "Nora",
  "Stella",
  "Eleanor",
  "Violet",
  "Hazel",
  "Luna",
  "Savannah",
  "Brooklyn",
  "Leah",
  "Zoey",
  "Scarlet",
  "Clara",
  "Sophie",
  "Ellie",
  "Lila",
  "Grace",
];

const femaleLastNames = [
  "Smith",
  "Johnson",
  "Brown",
  "Williams",
  "Jones",
  "Davis",
  "Miller",
  "Wilson",
  "Moore",
  "Taylor",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
  "Harris",
  "Martin",
  "Thompson",
  "Garcia",
  "Martinez",
  "Robinson",
  "Clark",
  "Rodriguez",
  "Lewis",
  "Lee",
  "Walker",
  "Hall",
  "Allen",
  "Young",
  "Hernandez",
  "King",
  "Wright",
  "Lopez",
  "Hill",
  "Scott",
  "Green",
  "Adams",
  "Baker",
  "Nelson",
  "Carter",
  "Mitchell",
  "Perez",
  "Roberts",
  "Turner",
  "Phillips",
  "Campbell",
  "Parker",
  "Evans",
  "Hall",
  "Murphy",
];

export default function NameGenerator() {
  const [characterName, setCharacterName] = useState("");
  const [isMaleChecked, setIsMaleChecked] = useState(false);
  const [isFemaleChecked, setIsFemaleChecked] = useState(false);

  function generateName() {
    let firstName = "";
    let lastName = "";

    if (isMaleChecked) {
      firstName =
        maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)];
      lastName =
        maleLastNames[Math.floor(Math.random() * maleLastNames.length)];
    } else if (isFemaleChecked) {
      firstName =
        femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];
      lastName =
        femaleLastNames[Math.floor(Math.random() * femaleLastNames.length)];
    }

    setCharacterName(`${firstName} ${lastName}`);
  }

  return (
    <Container
      sx={{
        textAlign: "center",
        backgroundColor: "gray",
        height: "150px",
        width: "500px",
        border: "2px solid black",
        padding: 2,
        borderRadius: "5px",
      }}
    >
      <Typography variant="h5">Generate A Random Character Name</Typography>
      <Divider sx={{ color: "red" }} />

      <FormControlLabel
        control={
          <Checkbox
            checked={isMaleChecked}
            onChange={() => {
              setIsMaleChecked(!isMaleChecked);
            }}
            disabled={isFemaleChecked}
          />
        }
        label="Male"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={isFemaleChecked}
            onChange={() => {
              setIsFemaleChecked(!isFemaleChecked);
            }}
            disabled={isMaleChecked}
          />
        }
        label="Female"
      />

      <Button
        variant="contained"
        onClick={() => {
          generateName();
        }}
        sx={{ mt: "10px" }}
      >
        Generate!
      </Button>
      <Typography variant="h6" sx={{ color: "#000dff" }}>
        {characterName || "-"}
      </Typography>
    </Container>
  );
}
