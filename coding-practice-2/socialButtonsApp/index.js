const Button = (props) => {
  const { classname, name } = props;
  return <button className={classname}>{name}</button>;
};

const element = (
  <div className="socialCard">
    <h1>Social Buttons</h1>
    <div className="buttons">
      <Button classname="like" name="Like" />
      <Button classname="comment" name="Comment" />
      <Button classname="share" name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
