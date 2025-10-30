"use client";
import { Box, Button } from "@mui/material";
import styles from "./index.module.scss";
import { useState } from "react";
import OrderSetting from "./order-settings";

export default function Trade() {
  const [isBuy, setIsBuy] = useState(true);
  return (
    <Box className={styles.tradeContainer}>
      <Box className={styles.buttonContainer}>
        <Button
          onClick={() => setIsBuy(true)}
          className={isBuy ? styles.selectedBuy : styles.notSelectedBuy}
        >
          Buy / Long
        </Button>
        <Button
          onClick={() => setIsBuy(false)}
          className={isBuy ? styles.notSelectedSell : styles.selectedSell}
        >
          Sell / Short
        </Button>
      </Box>
      <OrderSetting />
    </Box>
  );
}
