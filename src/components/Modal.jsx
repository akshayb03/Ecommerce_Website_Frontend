export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div
      onClick={onClose}
      onKeyDown={() => {}}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        background: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onKeyDown={() => {}}
        style={{
          padding: 40,
          height: "60%",
          width: "60%",
          backgroundColor: "white",
        }}
      >
        {children}
      </div>
    </div>
  );
};
