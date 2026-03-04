function Card(props) {
  return (
    <div className="card">
      <h1>This card value is {props.num}</h1>
      <p>This card is : {props.num > 50 ? "high" : "low"}</p>
 
    </div>
  )
}

export default Card