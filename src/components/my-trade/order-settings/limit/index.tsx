import { Box, Divider, Typography } from "@mui/material";
import styles from "./index.module.scss";

export default function LimitOption() {
  return (
    <Box className={styles.limitOptionContainer}>
      <Box className={styles.price}>
        <Typography>Price</Typography>
        <Box className ={styles.midBboText}>
          <Typography>Mid</Typography>
           <Divider orientation="vertical"   sx={{ mx: 1, borderColor: "#75798A", height: "1.2rem" }}  color="#fff" />
          <Typography>BBO</Typography>
        </Box>
        
      </Box>
    </Box>
  );
}
