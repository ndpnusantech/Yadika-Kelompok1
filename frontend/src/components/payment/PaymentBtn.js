const PaymentBtn = (props) => {
  return (
    <div className="mt-2">
      <button
        className="d-flex justify-content-between"
        style={{ width: "420px", padding: "10px 20px", borderRadius: "10px" }}
      >
        <img
          src="./images/logo/logo-indomaret.png"
          alt=""
          style={{ width: "86px" }}
        />
        Total : {props.name}
      </button>
    </div>
  );
};

export default PaymentBtn;
