import React from "react";
import ReactDOM from "react-dom";
import "../../App.css";

class ProdiTI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#FFFFFF",
    };
  }
  colorChange = () => {
    setTimeout(() => {
      this.setState({ color: "#E02401" })
    }, 80);
  };

  render() {
    const StyleMapel = {
      backgroundColor: "#A6A6A6",
      padding: "20px",
      borderRadius: "2vh",
    };

    return (
      <div>
        <div className="App-Header">
          <h1>Menu Kolon</h1>
        </div>
        <div className="body">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <div>
                <h2 style={StyleMapel}>Riwayat</h2>
              </div>
            </li>
            <li>
              <div>
                <h2 style={StyleMapel}>Booking</h2>
              </div>
            </li>
            <li>
              <div>
                <h2 style={StyleMapel}>Jadwal</h2>
              </div>
            </li>
            <li>
              <div>
                <h2 style={StyleMapel}>Consulting</h2>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProdiTI;
