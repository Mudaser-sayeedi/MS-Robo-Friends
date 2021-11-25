// import the dependencies you need
import './Card.css';

// main card component function
const Card = ({ robots }) => {
    return (
        <div className="card-area">
            {
                // maping trough the robots array which cames from the prop of the parent component
                robots.map((robot, i) => {
                    return (
                        <div className='card-container' key={i}>
                            <img src={`https://robohash.org/${robot.id}?200x200`} alt="robot" />
                            <div className="card-info">
                                <h2>{robot.name}</h2>
                                <p>{robot.email}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Card;