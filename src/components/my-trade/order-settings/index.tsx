import { Box, Button, Typography } from "@mui/material";
import styles from "./index.module.scss";
import { useState } from "react";
import LimitOption from "./limit";
import MarketOption from "./market";

export default function OrderSetting() {
  const [selectedOption, setSelectedOption] = useState("limit");

  return (
    <Box className={styles.optionsSettingContainer}>
      <Box className={styles.options}>
        <Button
          className={
            selectedOption === "limit"
              ? styles.selectedButton
              : styles.notSelected
          }
          onClick={() => setSelectedOption("limit")}
        >
          Limit
        </Button>
        <Button
          className={
            selectedOption === "market"
              ? styles.selectedButton
              : styles.notSelected
          }
          onClick={() => setSelectedOption("market")}
        >
          Market
        </Button>
        <Button
          className={
            selectedOption === "conditional"
              ? styles.selectedButton
              : styles.notSelected
          }
          onClick={() => setSelectedOption("conditional")}
        >
          Conditional
        </Button>
      </Box>
      <Box className={styles.optionsSetting}>
        <Box className={styles.availableEquity}>
          <Typography color="#969FAF"> Available Equity </Typography>
          <Typography color="#F4F4F6" fontWeight={600}>
            $0.00
          </Typography>
        </Box>
        
        {selectedOption === "limit" && <LimitOption />}
        {selectedOption === "market" && <MarketOption />}
      </Box>
    </Box>
  );
}
