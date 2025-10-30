"use client"
import { Box, Button, Typography } from '@mui/material'
import styles from "./index.module.scss"
import StockBookDetails from './book'
import { useState } from 'react';
import StockTradeDetails from './trade';

export default function TradeView() {
  const [alignment, setAlignment] = useState<string | null>("left");

  return (
    <>
   
    <Box className={styles.TradeViewContainer}>
       <Box className={styles.toggleButtonContainer}>
        <Button
          className={
            alignment === "left" ? styles.selectedButton : styles.notSelected
          }
          onClick={() => setAlignment("left")}
        >
         Book
        </Button>

        <Button
          className={
            alignment === "right" ? styles.selectedButton : styles.notSelected
          }
          onClick={() => setAlignment("right")}
        >
         Trades
        </Button>
      </Box>
     {alignment==="left" && <StockBookDetails/>}
     {alignment==="right" && <StockTradeDetails/>}
    </Box>
    </>
  )
}
