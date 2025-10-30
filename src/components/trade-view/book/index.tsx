"use client";
import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import BookCard from "./book-card";
import styles from "./index.module.scss";

export default function StockBookDetails() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const middleScroll =
        (container.scrollHeight - container.clientHeight) / 2;
      container.scrollTop = middleScroll;
    }
  }, []);

  // Generate dummy data dynamically
  const sellData = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    type: "sell" as const,
    total: 1200000,
    price: 123456 + i,
    size: 0.2526598,
  }));

  const buyData = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    type: "buy" as const,
    total: 1200000,
    price: 123456 - i,
    size: 0.2526598,
  }));

  return (
    <>
      <Box className={styles.heading}>
        <Typography>Price (USD)</Typography>
        <Typography>Size (BTC)</Typography>
        <Typography>Total (BTC)</Typography>
      </Box>
      <Box ref={containerRef} className={styles.stockBookContainer}>
        {sellData.map((item) => (
          <BookCard key={`sell-${item.id}`} {...item} />
        ))}

        <Box className={styles.currentPrice}>
          <Typography color="red">1243435</Typography>
          <Typography color="#969FAF">434335.76</Typography>
        </Box>

        {buyData.map((item) => (
          <BookCard key={`buy-${item.id}`} {...item} />
        ))}
      </Box>
    </>
  );
}
