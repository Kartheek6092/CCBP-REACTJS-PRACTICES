const Box = (props) => {
  const { clsName, content } = props;
  return <div className={clsName}>{content}</div>;
};

const element = (
  <div className="boxContainer">
    <h1>Boxes</h1>
    <div className="boxes">
      <Box clsName="small box" content="Small" />
      <Box clsName="medium box" content="Medium" />
      <Box clsName="large box" content="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
