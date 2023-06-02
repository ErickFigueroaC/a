    import { createTheme } from "@mui/material";
    import { blueGrey } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: blueGrey[800],
        },
        secondary: {
            main: blueGrey[900],
        },
    }
});

export default theme;

