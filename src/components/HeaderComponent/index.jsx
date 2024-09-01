import { Layout, theme, Row, Col, Typography, Button } from "antd";
const { Header } = Layout;
const { Text } = Typography;

const HeaderComponent = ({ title, onButtonClick }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <Row align="center">
        <Col span={10}>
          <Text strong style={{ fontSize: "20px", marginLeft: "20px" }}>
            {title}
          </Text>
        </Col>
        <Col offset={10} span={4}>
          <Button type="primary" onClick={onButtonClick}>
            Log Out
          </Button>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderComponent;
