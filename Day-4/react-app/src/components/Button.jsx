// Props--> Arguments --> html attributes
// props arg ==> as a object
// props properties ==> dot(.)
// propties ==> html attributes ==> component render

const Button = (props) => {
  return <button className={`${props.className}`}>{props.arun}</button>;
};

export default Button;
