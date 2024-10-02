
export default function InlineStyledComponent() {
  const divStyle = {
    backgroundColor: "lightblue",
    padding: "20px",
    borderRadius: "5px",
  };

  return (
    <div style={divStyle}>
      <h1 style={{ color: "white" }}>Inline Styled Component</h1>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        This is an example of inline styling in React.
      </p>
    </div>
  );
}
