

function Spinner() {
  return (
    
<svg
  className="container"
  viewBox="0 0 35 35"
  height="35"
  width="35"
>
  <rect 
    className="track"
    x="2.5" 
    y="2.5" 
    fill="none" 
    stroke-width="5px" 
    width="32.5" 
    height="32.5"
  />
  <rect 
    className="car"
    x="2.5" 
    y="2.5" 
    fill="none" 
    stroke-width="5px" 
    width="32.5" 
    height="32.5"
    pathLength="100"
  />
</svg>
  )
}

export default Spinner;


