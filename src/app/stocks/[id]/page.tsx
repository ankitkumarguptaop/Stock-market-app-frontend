import { Box } from "@mui/material";
import styles from "./index.module.scss"
import StockDetailHeader from "@/components/stock-details-header";
import Trade from "@/components/my-trade";
import Graph from "@/components/graph";
import TradeView from "@/components/trade-view";


export default function Stock() {
  return <Box className ={styles.stockDashboard}>
    <Box className={styles.graphContainer}>
    <StockDetailHeader/>
    <Box className={styles.detailsContainer}>
      <Graph/>
      <TradeView/>
    </Box>
    </Box>
    <Box className={styles.tradeContainer}>
    <Trade/>
    </Box>

  </Box>;
}
