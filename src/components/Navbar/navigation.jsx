import { Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";
import logo from "../../assets/crown.svg";
import "./navigation.style.scss";

const Navigation = () => {
  return (
    <Menu className="nav">
      <Menu.Item as={Link} to="/" name="california_flooring">
        {<Image src={logo} size="tiny" spaced alt="california flooring" />}
      </Menu.Item>
    </Menu>
  );
};
export default Navigation;
