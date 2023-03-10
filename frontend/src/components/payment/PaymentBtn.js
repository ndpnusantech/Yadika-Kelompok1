import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";

const PaymentBtn = (props) => {
  const navigate = useNavigate();

  const order = () => {
    localStorage.setItem("isOrder", true);
    navigate("/");
  };

  return (
    <Accordion style={{ marginTop: "10px" }}>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{ width: "500px" }}>
          <img
            src={`./images/logo/${props.logo}`}
            alt=""
            style={{ width: "86px" }}
            className="me-3"
          />
          {props.name}
        </Accordion.Header>
        <Accordion.Body>
          <table className="table-payment">
            <tr>
              <td>1X Ticket ANT-MAN WASP QUANTUMANIA</td>
              <td style={{ paddingLeft: "100px" }}>35.000</td>
            </tr>
          </table>
          <hr />
          <h6 className="text-end">Total : 35.000</h6>
          <button
            className="btn bg-success px-4 text-white w-100"
            onClick={order}
          >
            Order
          </button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default PaymentBtn;
