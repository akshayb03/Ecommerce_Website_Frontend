import { EmptyHeight } from "./EmptyHeight";

export const PriceComponent = ({ mrp, discount, style }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <strong style={!style ? { fontSize: 24 } : { style }}>₹{mrp}</strong>
      <EmptyHeight width={8} />
      <span>
        MRP{" "}
        <span
          style={{
            textDecoration: "line-through",
          }}
        >
          {`₹${discount !== 0 && Math.floor(mrp / (1 - discount / 100))}`}
        </span>
      </span>
      <EmptyHeight width={8} />
      <span>{`(${discount}% OFF)`}</span>
    </div>
  );
};
