import { Col, Row } from "react-bootstrap";
import "./_home.css";
import UserManage from "../UserManage";

function Home() {
    return (
        <div className="">
        <Row>
            <h2>Home Page</h2>
            {[...new Array(10)].map(()=>(
                <Col lg={3} md={4}>
                    <UserManage/>
                </Col>
            ))}
        </Row>
        </div>
    );
}

export default Home;
