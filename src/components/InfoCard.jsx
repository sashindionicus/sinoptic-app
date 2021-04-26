import { Card } from "react-bootstrap"

function InfoCard() {    
    return(
        <Card className="card shadow-lg rounded" style={{ width: '20.5rem' }}>
        <Card.Img src="https://via.placeholder.com/400x300" className="time card-img-top"/>
        <Card.Body>
            <div class="icon bg-light mx-auto text-center">
                <img src="" alt=""/>
            </div>   
            <div class="text-muted text-uppercase text-center details">
                <h5 class="my-3">Kharkiv</h5>
                <div class="my-3">Sunny</div>
                <div class="display-4 my-4">
                    <span>13.9</span>
                    <span>&deg;C</span>
                </div>
            </div>
        </Card.Body>
        </Card>
    )}

export default InfoCard;