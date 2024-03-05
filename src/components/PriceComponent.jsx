import { EmptyHeight } from "./EmptyHeight";

export const PriceComponent = ({ mrp, discount, style, price }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <strong style={!style ? { fontSize: 24 } : { style }}>₹{price}</strong>
      <EmptyHeight width={8} />
      <span>
        MRP{" "}
        <span
          style={{
            textDecoration: "line-through",
          }}
        >
          {`₹${mrp}`}
        </span>
      </span>
      <EmptyHeight width={8} />
      <span>{`(${discount}% OFF)`}</span>
    </div>
  );
};
