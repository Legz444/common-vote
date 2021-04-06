import './vote.css';
import React, { useState, useEffect } from 'react';
import {Card, InputGroup, Accordion } from 'react-bootstrap';



export default function Vote(props){
    // const[userVote, setUserVote] = useState({});
    // const[answer, setAnswer] = useState({});
    // const[data, setData] = useEffect({});

    const poll = props.poll;
    const voterDemographic = props.poll.voterDemographic;
    const currentLeadership = props.poll.currentLeadership;
    const currentSystem = props.poll.currentSystem;
    const economics = props.poll.economics;
    const foreignPolicy = props.poll.foreignPolicy;

    console.log(poll);

    //map over the category and return an array of each objects answers
    let parsedAns = voterDemographic.map(item => {
        const grabAnswers =Object.entries(item);
        return (grabAnswers[1]);
    })
    console.log(parsedAns);

// (8) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
//      0: Array(2)
//      0: "answers"
//      1: (7) ["Democrat", "Green Party", "Independant", "Libertarian", "Other", "Republican", "Unaffiliated"]

    console.log(parsedAns[0][1]);
//   ["Democrat", "Green Party", "Independant", "Libertarian", "Other", "Republican", "Unaffiliated"]
    
// map over parsedAns array, for every item, return that item's index [1]
    let a = parsedAns.map(i => {
        return [i][1]
    })
    console.log(a);
    //why is this undefined???


//when a radio button is clicked, update the value for that questions answers to the value of the targeted radio button.
    // const setValue = (e) => {
    //     setAnswer(e.target.value)
    // }

//when submit button is clicked, update the data for the user. Also update the totals data for the charts.
    // const submitVote = (e) => {
    //     setUserVote();
    //     setData();

    // }


    return(
        <>
            <Accordion className="voteAccordion" defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey= "0" >Basic Voter Information</Accordion.Toggle>
                        {voterDemographic.length ? voterDemographic.map(item => {
                            return(
                                <>
                                <Accordion.Collapse eventKey="0">
                                <Card>
                                    <h3 className="question">{item.question}</h3>

                                        {parsedAns.length ? parsedAns.map(answer => {
                                            return(
                                                <>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Radio aria-label="Radio-btn" ></InputGroup.Radio>
                                                    </InputGroup.Prepend>
                                                    <InputGroup.Text>{answer}</InputGroup.Text>
                                                </InputGroup>
                                                </>
                                            )}): ""}
                                    <div>
                                        <input type="image" src="https://res.cloudinary.com/legz444/image/upload/v1616790789/Common_2_axarsa.png" name="vote-btn" className="vote-btn" width="35px" height="35px" ></input>
                                        <p>Vote</p>
                                    </div>
                                </Card>
                                </Accordion.Collapse>
                                </>
                            ) }): ""}
                </Card>
                <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">Current Leadership</Accordion.Toggle>
                {currentLeadership.length ? currentLeadership.map(item => {
                    return(
                        <>
                        <Accordion.Collapse eventKey="1">
                        <Card>
                        <h3 className="question">{item.question}</h3>
                            <div>
                                <input type="image" src="https://res.cloudinary.com/legz444/image/upload/v1616790789/Common_2_axarsa.png" name="vote-btn" className="vote-btn" width="35px" height="35px"></input>
                                <p>Vote</p>
                            </div>
                        </Card>
                        </Accordion.Collapse>
                    </>
                ) }): ""}
                </Card>
                <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">Current System</Accordion.Toggle>
                {currentSystem.length ? currentSystem.map(item => {
                    return(
                        <>
                        <Accordion.Collapse eventKey="2">
                        <Card>
                        <h3 className="question">{item.question}</h3>
                            <div>
                                <input type="image" src="https://res.cloudinary.com/legz444/image/upload/v1616790789/Common_2_axarsa.png" name="vote-btn" className="vote-btn" width="35px" height="35px"></input>
                                <p>Vote</p>
                            </div>
                        </Card>
                        </Accordion.Collapse>
                    </>
                ) }): ""}
                </Card>
                <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">Economics</Accordion.Toggle>
                {economics.length ? economics.map(item => {
                    return(
                        <>
                        <Accordion.Collapse eventKey="3">
                        <Card>
                        <h3 className="question">{item.question}</h3>
                            <div>
                                <input type="image" src="https://res.cloudinary.com/legz444/image/upload/v1616790789/Common_2_axarsa.png" name="vote-btn" className="vote-btn" width="35px" height="35px"></input>
                                <p>Vote</p>
                            </div>
                        </Card>
                        </Accordion.Collapse>
                    </>
                ) }): ""}
                </Card>
                <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">Foreign Policy</Accordion.Toggle>
                {foreignPolicy.length ? foreignPolicy.map(item => {
                    return(
                        <>
                        <Accordion.Collapse eventKey="4">
                        <Card>
                        <h3 className="question">{item.question}</h3>
                            <div>
                                <input type="image" src="https://res.cloudinary.com/legz444/image/upload/v1616790789/Common_2_axarsa.png" name="vote-btn" className="vote-btn" width="35px" height="35px"></input>
                                <p>Vote</p>
                            </div>
                        </Card>
                        </Accordion.Collapse>
                    </>
                ) }): ""}
                </Card>
            </Accordion>
        </>
    )
}


// /*I want to display the answers for each object within each category as radio buttons. I can map over each object and display the question, because it is a single string within the item in which I am mapping(array of objects). The answers are arrays within the item object(array within an object within an array). If I pass item.answers, It gives me all the answers in one block. I need to map over the array of answers and display each of them in a radio button. When trying to map this array it didn't work, becasue it is an array within an object. I can map over the answers when I put them in a variable, but then because I am mapping each item, every question has the same answers from the first question. How do I display each answer for the corresponding question as a radio button without hard coding everything?*/