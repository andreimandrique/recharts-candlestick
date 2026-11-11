import {
  CartesianGrid,
  BarChart,
  Tooltip,
  ErrorBar,
  Rectangle,
  XAxis,
  YAxis,
  Bar,
  DefaultZIndexes,
} from "recharts";

const rawData = [
  {
    symbol: "BTCUSD",
    open: "76714.12000000",
    high: "76714.12000000",
    low: "76587.35000000",
    close: "76587.35000000",
    volume: "0.02109000",
    openTime: 1789660800000,
    closeTime: 1789664399999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "76718.34000000",
    high: "76857.73000000",
    low: "76573.77000000",
    close: "76573.77000000",
    volume: "0.05933000",
    openTime: 1789664400000,
    closeTime: 1789667999999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "76690.22000000",
    high: "76730.17000000",
    low: "76425.83000000",
    close: "76569.53000000",
    volume: "0.00188000",
    openTime: 1789668000000,
    closeTime: 1789671599999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "76568.71000000",
    high: "76601.19000000",
    low: "76568.71000000",
    close: "76601.19000000",
    volume: "0.00764000",
    openTime: 1789671600000,
    closeTime: 1789675199999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "76529.47000000",
    high: "76529.47000000",
    low: "76529.47000000",
    close: "76529.47000000",
    volume: "0.00031000",
    openTime: 1789675200000,
    closeTime: 1789678799999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "76479.01000000",
    high: "76529.87000000",
    low: "76401.27000000",
    close: "76401.27000000",
    volume: "0.01252000",
    openTime: 1789678800000,
    closeTime: 1789682399999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "76337.24000000",
    high: "76372.12000000",
    low: "76237.04000000",
    close: "76292.12000000",
    volume: "0.04868000",
    openTime: 1789682400000,
    closeTime: 1789685999999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "76433.67000000",
    high: "76449.67000000",
    low: "76347.31000000",
    close: "76347.31000000",
    volume: "0.07978000",
    openTime: 1789686000000,
    closeTime: 1789689599999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "76369.02000000",
    high: "76508.95000000",
    low: "76277.96000000",
    close: "76508.95000000",
    volume: "0.08190000",
    openTime: 1789689600000,
    closeTime: 1789693199999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "76589.82000000",
    high: "76644.98000000",
    low: "76484.58000000",
    close: "76644.98000000",
    volume: "0.01751000",
    openTime: 1789693200000,
    closeTime: 1789696799999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "76696.37000000",
    high: "76902.14000000",
    low: "76598.36000000",
    close: "76857.72000000",
    volume: "0.03457000",
    openTime: 1789696800000,
    closeTime: 1789700399999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "77000.00000000",
    high: "77475.59000000",
    low: "77000.00000000",
    close: "77318.30000000",
    volume: "0.04419000",
    openTime: 1789700400000,
    closeTime: 1789703999999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "77252.17000000",
    high: "77395.99000000",
    low: "77252.16000000",
    close: "77395.99000000",
    volume: "0.00447000",
    openTime: 1789704000000,
    closeTime: 1789707599999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "77478.13000000",
    high: "77647.28000000",
    low: "77478.13000000",
    close: "77524.73000000",
    volume: "0.01174000",
    openTime: 1789707600000,
    closeTime: 1789711199999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "77606.47000000",
    high: "77606.47000000",
    low: "77363.80000000",
    close: "77475.59000000",
    volume: "0.00825000",
    openTime: 1789711200000,
    closeTime: 1789714799999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "77605.11000000",
    high: "77750.06000000",
    low: "77574.58000000",
    close: "77668.05000000",
    volume: "0.01893000",
    openTime: 1789714800000,
    closeTime: 1789718399999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "77811.95000000",
    high: "78164.00000000",
    low: "77666.58000000",
    close: "78161.10000000",
    volume: "1.14252000",
    openTime: 1789718400000,
    closeTime: 1789721999999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "78157.15000000",
    high: "78347.11000000",
    low: "77933.49000000",
    close: "78106.99000000",
    volume: "1.70638000",
    openTime: 1789722000000,
    closeTime: 1789725599999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "78104.85000000",
    high: "78286.56000000",
    low: "78052.91000000",
    close: "78225.98000000",
    volume: "0.71859000",
    openTime: 1789725600000,
    closeTime: 1789729199999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "78237.85000000",
    high: "78347.12000000",
    low: "77982.74000000",
    close: "77983.56000000",
    volume: "1.31289000",
    openTime: 1789729200000,
    closeTime: 1789732799999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "77983.72000000",
    high: "78104.86000000",
    low: "77866.77000000",
    close: "78035.12000000",
    volume: "1.58468000",
    openTime: 1789732800000,
    closeTime: 1789736399999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "78035.00000000",
    high: "80487.70000000",
    low: "77983.72000000",
    close: "79907.30000000",
    volume: "5.19464000",
    openTime: 1789736400000,
    closeTime: 1789739999999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "80275.41000000",
    high: "80969.54000000",
    low: "80037.84000000",
    close: "80863.78000000",
    volume: "4.61489000",
    openTime: 1789740000000,
    closeTime: 1789743599999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "80911.10000000",
    high: "81076.26000000",
    low: "80532.85000000",
    close: "80663.36000000",
    volume: "4.37511000",
    openTime: 1789743600000,
    closeTime: 1789747199999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "80725.32000000",
    high: "81177.00000000",
    low: "80663.36000000",
    close: "80828.52000000",
    volume: "8.48883000",
    openTime: 1789747200000,
    closeTime: 1789750799999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "80828.52000000",
    high: "80911.10000000",
    low: "80537.65000000",
    close: "80911.10000000",
    volume: "2.18888000",
    openTime: 1789750800000,
    closeTime: 1789754399999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "80950.29000000",
    high: "81076.26000000",
    low: "80773.61000000",
    close: "80911.10000000",
    volume: "1.40685000",
    openTime: 1789754400000,
    closeTime: 1789757999999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "80911.10000000",
    high: "81323.92000000",
    low: "80911.10000000",
    close: "81160.08000000",
    volume: "2.86345000",
    openTime: 1789758000000,
    closeTime: 1789761599999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "81158.84000000",
    high: "81181.54000000",
    low: "80946.38000000",
    close: "81076.26000000",
    volume: "0.93220000",
    openTime: 1789761600000,
    closeTime: 1789765199999,
    isFinal: true,
  },
  {
    symbol: "BTCUSD",
    open: "81126.30000000",
    high: "81251.89000000",
    low: "81115.43000000",
    close: "81160.00000000",
    volume: "0.67020000",
    openTime: 1789765200000,
    closeTime: 1789768799999,
    isFinal: true,
  },
];

const data = rawData.map((item) => {
  const open = parseFloat(item.open);
  const close = parseFloat(item.close);
  const high = parseFloat(item.high);
  const low = parseFloat(item.low);
  return {
    ...item,
    open,
    close,
    high,
    low,
    time: new Date(item.openTime).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
});

const Candlestick = (props) => {
  const color =
    props.payload.open < props.payload.close ? "#22c55e" : "#ef4444";
  return <Rectangle {...props} fill={color} stroke="none" />;
};

const barDataKey = (entry) => [
  Math.min(entry.close, entry.open),
  Math.max(entry.close, entry.open),
];

const whiskerDataKey = (entry) => {
  const highEnd = Math.max(entry.close, entry.open);
  return [highEnd - entry.low, entry.high - highEnd];
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const item = payload[0].payload;
    return (
      <div
        style={{
          background: "#ffffff",
          color: "#0f172a",
          padding: "12px 14px",
          borderRadius: "8px",
          fontSize: "12px",
          fontFamily: "monospace",
          border: "1px solid #e2e8f0",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          minWidth: "140px",
        }}
      >
        <p style={{ margin: "0 0 5px 0" }}>
          <strong>Time: {item.time}</strong>
        </p>
        <p style={{ margin: 0 }}>Open: ${item.open.toFixed(2)}</p>
        <p style={{ margin: 0 }}>High: ${item.high.toFixed(2)}</p>
        <p style={{ margin: 0 }}>Low: ${item.low.toFixed(2)}</p>
        <p style={{ margin: 0 }}>Close: ${item.close.toFixed(2)}</p>
      </div>
    );
  }
};

function App() {
  return (
    <>
      <BarChart
        style={{ width: "100%", aspectRatio: 1.618, maxWidth: 600 }}
        data={data}
        responsive
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="time" />
        <YAxis domain={["dataMin - 1", "dataMax + 1"]} orientation="right" />
        <Bar dataKey={barDataKey} shape={Candlestick}>
          <ErrorBar
            dataKey={whiskerDataKey}
            width={0}
            zIndex={DefaultZIndexes.bar - 1}
          />
        </Bar>
        <Tooltip content={<CustomTooltip />} />
      </BarChart>
    </>
  );
}

export default App;
