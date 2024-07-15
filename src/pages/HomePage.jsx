import React, { useState } from "react";
import { Card, Col, Row } from "antd";
import axios from "axios";
import { useEffect } from "react";
const { Meta } = Card;
export default function HomePage() {
  const [ListShoes, setListShoes] = useState([]);
  useEffect(() => {
    handleFetchListShoes();
  }, []);
  const handleFetchListShoes = async () => {
    try {
      const response = await axios({
        url: "https://66532115813d78e6d6d74b82.mockapi.io/shoes",
        method: "GET",
      });
      if (response.status === 200) {
        const data = response.data;
        setListShoes(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(ListShoes);

  // VIET ham render list shoe thong qua state
  const handleRenderListShoes = () => {
    return ListShoes.map((ele, index) => {
      return (
        <Col key={index} span={12} xl={6}>
          <Card
            hoverable
            style={{
              width: "100%",
            }}
            cover={
              <img
                alt="example"
                src={ele.image}
              />
            }
          >
            <Meta
              title={ele.name}
              description={
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>Type: {ele.type}</span>
                    <span>Size:{ele.size}</span>
                  </div>
                  <p>{ele.price}</p>
                  <p>{ele.description}</p>
                </div>
              }
            />
          </Card>
        </Col>
      );
    });
  };

  return (
    <div className="container wrapper">
      <Row gutter={[20, 20]}>
        {handleRenderListShoes()}
      </Row>
    </div>
  );
}
