import React, { useState } from "react";
import { API_BASE_URL } from "../../utils/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const sendOtp = async () => {
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}/send-otp`, { phone });
      navigate("/verify-otp", { state: { phone } });
    } catch (error) {
      alert("Failed to send OTP");
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h2>Signup / Login</h2>

      <input
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={styles.input}
      />

      <button onClick={sendOtp} style={styles.button} disabled={loading}>
        {loading ? "Sending OTP..." : "Send OTP"}
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

export default Signup;
