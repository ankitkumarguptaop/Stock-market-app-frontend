import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "./index.module.scss"

export default function ButtonAppBar() {
  return (
    <Box >
      <AppBar position="static" className={styles.navbarContainer}>
        <Toolbar sx={{ minHeight: "56px !important" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BackPack
          </Typography>
          <Button className={styles.loginButton} color="inherit">
            Login
          </Button>
          <Button className={styles.signUpButton} color="inherit">
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
