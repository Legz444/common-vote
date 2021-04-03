import React from 'react';
import {Card, Row, Container, InputGroup} from 'react-bootstrap';


export default function Vote(props){
    const voterDemographic = props.poll.voterDemographic;
    const voterDemographicAns = props.poll.voterDemographic[0].answers;
    console.log(voterDemographic);
    console.log(voterDemographicAns);
    return(
        <>
        <Container>
            <Row>
                <Card>
                <h5>Basic Voter Information</h5>

                {voterDemographic.length ? voterDemographic.map(item => {
                    return(
                        <>
                        <Card>
                        <h3>{item.question}</h3>
                        {voterDemographicAns.length ? voterDemographicAns.map(answer => {
                            return(
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Radio aria-label="Radio-btn" ></InputGroup.Radio>
                                    </InputGroup.Prepend>
                                    <InputGroup.Text>{answer}</InputGroup.Text>
                                </InputGroup>
                            )}): ""}
                            <div>
                                <input type="image" src="https://res.cloudinary.com/legz444/image/upload/v1616790789/Common_2_axarsa.png" name="vote-btn" className="vote-btn" width="35px" height="35px"></input>
                                <p>Vote</p>
                            </div>
                        </Card>
                    </>
                ) }): ""}
                </Card>
            </Row>
        </Container>
    </>
    )
}


//I want to display the array of questions on cards.
//The user will click the question and view the options to vote on and a corresponding charts displaying the total votes from all users.

//Do I:
//Hard code an array and map over the array of questions in the front end on this voter page? I will have a model and schema in the back end so the question and the users answer are stored in the database. Then I can access that data to create the charts I want to display.
//The original questions are untouched, only the database of answers is updated.

//OR

//Store the questions and answers in the database by making a model and schema and using postman to upload each question and answer. Then I have a useEffect that updates that database and corresponding charts. 
//How do I make it so that every user can still vote and see the update total votes in the charts? If a user changes the datbase, then how does another user still get to vote?