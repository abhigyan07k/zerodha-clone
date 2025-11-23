import React, { useState } from "react";
import { API_BASE_URL } from "../../utils/api";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const LoginOtp = () => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const phone = location.state?.phone;

  const verifyOtp = async () => {
    if (!otp) {
      alert("Enter the OTP");
      return;
    }

    try {
      const res = await axios.post(`${API_BASE_URL}/verify-otp`, {
        phone,
        otp,
      });

      localStorage.setItem("token", res.data.token); // save JWT
      navigate("/dashboard"); // redirect to dashboard
    } catch (error) {
      alert("Invalid OTP");
      console.log(error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Enter OTP</h2>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        style={styles.input}
      />

      <button onClick={verifyOtp} style={styles.button}>
        Verify OTP
      </button>
    </div>
  );
};

const styles = {
  container: { width: "300px", margin: "50px auto", textAlign: "center" },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "15px",
    border: "none",
    background: "#387ed1",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default LoginOtp;
