function Card(props){
    let title = "This is some heading text";
    return (
      <div className="card">
        <h2>{props.h2}</h2>
            <h3>{props.h3}</h3>
        
      </div>
    );
  };

  export default Card;