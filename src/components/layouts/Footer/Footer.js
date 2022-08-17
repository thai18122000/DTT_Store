import { Link } from "react-router-dom";
import cx from "clsx";
import Container from "../../atoms/Container/Container";
import Row from "../../atoms/Row/Row";
import Col from "../../atoms/Col/Col";
import commonStyle from "../../../styles/commonStyle.module.css";
import styles from "./Footer.module.css";


const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className={commonStyle.col12}>
            <div className={cx(styles.innerContent, commonStyle.textCenter)}>
              <p className={cx(commonStyle.uppercase, commonStyle.p)}>
                Bản quyền thuộc về DTT Store © 2020  - Design by: Duy Thái{" "}
                <Link to="/" className={commonStyle.cTemplateRed}> DTT Store</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
