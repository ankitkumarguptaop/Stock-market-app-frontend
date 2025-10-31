import {
  Box,
  Button,
  Divider,
  InputAdornment,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import styles from "./index.module.scss";

export default function LimitOption() {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orderValue, setOrderValue] = useState("");

  // Format number with commas but preserve typing (leading/trailing dot)
 const formatNumber = (value: any) => {
  if (value === "" || value === null || value === undefined) return "";

  const strValue = value.toString();

  // handle starting with dot
  if (strValue.startsWith(".")) return `0${strValue}`;

  const [intPart, decimalPart] = strValue.split(".");

  // handle invalid intPart
  const cleanInt = intPart.replace(/\D/g, "");
  const formattedInt = cleanInt ? Number(cleanInt).toLocaleString("en-US", {maximumFractionDigits: 5}) : "0";

  if (strValue.endsWith(".")) return `${formattedInt}.`;
  if (decimalPart !== undefined) return `${formattedInt}.${decimalPart}`;

  return formattedInt;
};

// ✅ This ensures proper parsing for any comma/format situation
const parseNumber = (value: any) => {
  if (!value) return 0;
  const clean = value.toString().replace(/,/g, "");
  const num = parseFloat(clean);
  return isNaN(num) ? 0 : num;
};

const handlePriceChange = (e: any) => {
  let val = e.target.value.replace(/,/g, "");
  if (!/^\d*\.?\d*$/.test(val)) return;

  const formatted = formatNumber(val);
  setPrice(formatted);

  const numPrice = parseNumber(val);
  const numQty = parseNumber(quantity);
  if (numPrice && numQty) {
    setOrderValue(formatNumber((numPrice * numQty).toFixed(2)));
  } else {
    setOrderValue("");
  }
};

const handleQuantityChange = (e: any) => {
  let val = e.target.value.replace(/,/g, "");
  if (!/^\d*\.?\d*$/.test(val)) return;

  const formatted = formatNumber(val);
  setQuantity(formatted);

  const numPrice = parseNumber(price);
  const numQty = parseNumber(val);
  if (numPrice && numQty) {
    setOrderValue(formatNumber((numPrice * numQty).toFixed(2)));
  } else {
    setOrderValue("");
  }
};

const handleTotalChange = (e: any) => {
  let val = e.target.value.replace(/,/g, "");
  if (!/^\d*\.?\d*$/.test(val)) return;

  const formatted = formatNumber(val);
  setOrderValue(formatted);

  const numPrice = parseNumber(price);
  const numTotal = parseNumber(val);
  if (numPrice) {
    const newQty = numTotal / numPrice;
    if (!isNaN(newQty)) {
      setQuantity(formatNumber(newQty.toFixed(6).replace(/\.?0+$/, "")));
    }
  }
};


  return (
    <Box className={styles.limitOptionContainer}>
      <Box className={styles.price}>
        <Typography>Price</Typography>
        <Box className={styles.midBboText}>
          <Typography>Mid</Typography>
          <Divider
            orientation="vertical"
            sx={{ mx: 1, borderColor: "#75798A", height: "1rem" }}
            color="#fff"
          />
          <Typography>BBO</Typography>
        </Box>
      </Box>

      <TextField
        value={price}
        onChange={handlePriceChange}
        onBlur={() => setPrice(formatNumber(price))}
        sx={{
          height: 48,
          borderRadius: "8px",
          "& .MuiInputBase-root": { height: 48 },
          "& .MuiInputBase-input": {
            color: "white",
            fontSize: 24,
            height: 48,
            padding: "0 14px",
            boxSizing: "border-box",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <img
                src="https://backpack.exchange/coins/usd.svg"
                alt="USD"
                width="24"
                height="24"
                style={{ marginRight: 4 }}
              />
            </InputAdornment>
          ),
        }}
        className={styles.priceInput}
        variant="outlined"
        size="small"
      />

  
      <Box className={styles.quantity}>
        <Typography>Quantity</Typography>
        <TextField
          value={quantity}
          onChange={handleQuantityChange}
          onBlur={() => setQuantity(formatNumber(quantity))}
          sx={{
            height: 48,
            borderRadius: "8px",
            "& .MuiInputBase-root": { height: 48 },
            "& .MuiInputBase-input": {
              color: "white",
              fontSize: 24,
              height: 48,
              padding: "0 14px",
              boxSizing: "border-box",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <img
                  src="https://backpack.exchange/_next/image?url=%2Fcoins%2Fbtc.png&w=48&q=95"
                  alt="BTC"
                  width="24"
                  height="24"
                  style={{ marginRight: 4 }}
                />
              </InputAdornment>
            ),
          }}
          className={styles.priceInput}
          variant="outlined"
          size="small"
        />
      </Box>

      <Box sx={{ width: "100%" }}>
        <Slider
          aria-label="Quantity Percentage"
          defaultValue={30}
          valueLabelDisplay="auto"
          step={25}
          marks
          min={0}
          max={100}
        />
        <Box className={styles.rangeText}>
          <Typography>0</Typography>
          <Typography>100%</Typography>
        </Box>
      </Box>

      <Box className={styles.orderValue}>
        <Typography>Order Value</Typography>
        <TextField
          value={orderValue}
          onChange={handleTotalChange}
          onBlur={() => setOrderValue(formatNumber(orderValue))}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <img
                  src="https://backpack.exchange/coins/usd.svg"
                  alt="USD"
                  width="24"
                  height="24"
                  style={{ marginRight: 4 }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            height: 48,
            borderRadius: "8px",
            "& .MuiInputBase-root": { height: 48 },
            "& .MuiInputBase-input": {
              color: "white",
              fontSize: 24,
              height: 48,
              padding: "0 14px",
              boxSizing: "border-box",
            },
          }}
          className={styles.priceInput}
          variant="outlined"
          size="small"
        />
      </Box>

      <Button className={styles.placeOrder}>Place Order</Button>
    </Box>
  );
}
