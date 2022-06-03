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
        <p id="hv0"></p>
        <p id="hv1"></p>
        <p id="hv2"></p>
        <p id="hv3"></p>
        <p id="hv4"></p>
      </div>
    </>
  )
}
export default App;
//    function handelChange() {
//     let hex = document.getElementById("color").value.substring(1)
//     let mode = document.getElementById("select").value
//     fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
//     .then(res => res.json())
//     .then(data => {
//       for (let i = 0; i<5; i++){
//         document.getElementById(`bgc${[i]}`).style.backgroundColor = `${data.colors[i].hex.value}`;
//         document.getElementById(`hv${i}`).innerHTML = data.colors[i].hex.value
//       }
//     })
// }