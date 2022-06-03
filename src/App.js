import React, { useState } from "react"

function App() {
  const [hexState, setHexState] = useState("793592")
  const [modeState, setModeState] = useState("monochrome")
  fetch(`https://www.thecolorapi.com/scheme?hex=${hexState}&mode=${modeState}&count=5`)
    .then(response => response.json())
    .then(data2 => {
      for (let y = 0; y < 5; y++) {
        document.getElementById(`bgc${[y]}`).style.backgroundColor = `${data2.colors[y].hex.value}`;
        document.getElementById(`hv${y}`).innerHTML = data2.colors[y].hex.value
      }
    })
  function handelHexChange() {
    return (
      setHexState(document.getElementById("color").value.substring(1))
    )
  }
  function handelModeChange() {
    return (
      setModeState(document.getElementById("select").value)
    )
  }
  function copyToClipboard(e) {
    navigator.clipboard.writeText(document.getElementById(`hv${e}`).innerText)
  };
  return (
    <>
      <div className="header">
        <input id="color" type="color" defaultValue="#793592" onChange={handelHexChange}></input>
        <select onChange={handelModeChange} id="select">
          <option value="monochrome">Monochrome</option>
          <option value="monochrome-dark">Monochrome-dark</option>
          <option value="monochrome-light">Monochrome-light</option>
          <option value="analogic">Analogic</option>
          <option value="complement">Complement</option>
          <option value="analogic-complement">Analogic-complement</option>
          <option value="triad">triad</option>
        </select>
        <button onClick={handelModeChange}>Get color scheme</button>
      </div>
      <div className="main">
        <div id="bgc0" className="first"></div>
        <div id="bgc1" className="second"></div>
        <div id="bgc2" className="third"></div>
        <div id="bgc3" className="fourth"></div>
        <div id="bgc4" className="fifth"></div>
      </div>
      <div className="footer">
        <p onClick={(e) => copyToClipboard(0)} id="hv0"></p>
        <p onClick={(e) => copyToClipboard(1)} id="hv1"></p>
        <p onClick={(e) => copyToClipboard(2)} id="hv2"></p>
        <p onClick={(e) => copyToClipboard(3)} id="hv3"></p>
        <p onClick={(e) => copyToClipboard(4)} id="hv4"></p>
      </div>
    </>
  )
}
export default App;