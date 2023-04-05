import { ListGroup, ListGroupItem, Container, Row, Col, Button } from "reactstrap";

export default function ItemsList ({todos, markAsDone}) {
    return(

        
        <Container>
            <Row xs="2">
                <Col className="bg-light border">
                    <h3>Todo List</h3>
                <ListGroup>
                    
                    {todos
                    .filter((value) => value.isCompleted === false)
                    .map((value, index) => {
                        return(
                        <ListGroupItem key={index}>
                            {value.todo}
                            <Button color='success' onClick={()=>markAsDone(value.id)}>Completed</Button></ListGroupItem>
                        )
                    })}
                
                </ListGroup>
                </Col>
                <Col className="bg-light border"><h3>Completed List</h3>
                <ListGroup>
                    
                    {todos
                    .filter((value) => value.isCompleted === true)
                    .map((value, index) => {
                        return<ListGroupItem key={index}>{value.todo}</ListGroupItem>;
                    })}
                    
                
                </ListGroup>
                </Col>
            </Row>
            
        </Container>
    );
}