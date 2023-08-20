const Card= (props) => {
    let badgeText
    if(props.openSpots===0)
    badgeText="SOLD OUT";
    else if(props.location==="Online")
    badgeText="ONLINE";

    return ( 
        <div className="card">
            {(props.openSpots===0 || props.location==="Online") && <div className="badge">{badgeText}</div>}
            <img className="card--image" src={`/Image/${props.coverImg}`} alt={props.id} />
            <div className="card--stats">
                <img className="card--star" src="/Image/Star 1.png" alt="" />
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount}) . </span>
                <span>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span>/person</p>
        </div>
     );
}
 
export default Card;