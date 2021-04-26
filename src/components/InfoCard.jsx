import { Card } from "react-bootstrap"

function InfoCard() {    
    return(
        <Card className="card shadow-lg rounded" style={{ width: '20.5rem' }}>
        <Card.Img src="https://via.placeholder.com/400x300" className="time card-img-top"/>
        <Card.Body>
            <div className="icon bg-light mx-auto text-center">
                <img src="" alt=""/>
            </div>   
            <div className="text-muted text-uppercase text-center details">
                <h5 className="my-3">Kharkiv</h5>
                <div className="my-3">Sunny</div>
                <div className="display-4 my-4">
                    <span>13.9</span>
                    <span>&deg;C</span>
                </div>
            </div>
        </Card.Body>
        </Card>
    )}

export default InfoCard;