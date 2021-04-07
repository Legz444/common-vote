import './vote.css';
import React, { useState, useEffect } from 'react';
import {Card, InputGroup, Accordion } from 'react-bootstrap';
import axios from 'axios';

//////Psuedo Code//////

    //I need the userState from app.js. This can be the initial state---useState.
    //I need to store the user's vote for each question in their own userData.
    //I added a empty vote array to store their answer. I need some sort of key to connect the answer with the corresponding question? that way if a user doesn't answer ever consecutive question, the right answers still line up with the question.

    //I need the questions answers to get a chosen value. when the radio button is clicked, the value for that answer is set. It is not yet submitted to the data, but it is set as the current answer.
    // I need to be sure that the radio buttons and chosen value is refreshed for each user.... so maybe this needs to be a useEffect?

    //I need a totals state that will update when the user votes --- useEffect
    //I need to store the total votes from all users for each question.
    //Another model and schema. An array of objects(question answer pairs). Everytime a vote is submitted, a counter function updates the state of total votes for that question. I connect the votes and the questions somehow? Do I just pass in the questions somehow in my counter function? How would it know it is this.question?

export default function Vote(props){
//////States//////

// the initial state of the user is either, empty if they haven't voted on this question already, or whatever previous value they chose.
    const [userState, setUserState] = useState({
        votes: ""
    });

    //this initial state of radio buttons is empty
    const [answer, setAnswer] = useState("");

    //the initial state of the totals is the accumulation of all votes for that question
    //I need the total for each answer for that question. I need to pass in the answers index and total value. do I spread in the poll??s
    const[total, setTotal] = useState({
        question: "",
        answers: [

        ]
    });

    useEffect(() => {
        (async() => {             
        try{
            const response = await axios.post("./http://localhost:3001/vote", {
                votes: userState.votes
            },
            {
                answer: total.answer
            })
            const data = await response.json();

            setUserState(data.userState);
            setTotal(data.total);    
        }catch(e){
            console.log(e);
        }
        }) ()    
    }, [])
//////Variables//////
    const poll = props.poll;
    const voterDemographic = props.poll.voterDemographic;
    const currentLeadership = props.poll.currentLeadership;
    const currentSystem = props.poll.currentSystem;
    const economics = props.poll.economics;
    const foreignPolicy = props.poll.foreignPolicy;

    console.log(poll);

    //Parse out answers array from object to be mapped in.---How to loop this function over all categories??
    //map over the category and return an array of each objects answers
    let parsedAns = voterDemographic.map(item => {
        const grabAnswers =Object.entries(item);
        return (grabAnswers[1]);
    })
    console.log(parsedAns);
    // map over parsedAns array, for every item, return that item's index [1] which is just the answers.
    let a = parsedAns.map(i => {
        return i[1]
    })
    console.log(a);

//////Voting functionality//////

//when a radio button is clicked, update the value for that questions answers to the value of the targeted radio button.
    const setValue = (e) => {
        e.preventdefault();
        setAnswer({...answer, [e.target.name] : e.target.value})
    }

//when submit button is clicked, update the state for the user. Also update the totals data for the charts.
    const submitVote = (e) => {
        e.preventdefault();
        setUserState(...userState, )
        setTotal({...answer, ...total, [e.target.name] : e.target.value});

    }
//Total calculation function//


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

                                        {a.length ? a.map(subarray => {
                                            return subarray.length ? subarray.map(i => {
                                                return(
                                                    <>
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Radio aria-label="Radio-btn" onClick={setValue} ></InputGroup.Radio>
                                                        </InputGroup.Prepend>
                                                        <InputGroup.Text>{i}</InputGroup.Text>
                                                    </InputGroup>
                                                    </>
                                                )}) : ""
                                        }): ""}
                                    <div>
                                        <input type="image" src="https://res.cloudinary.com/legz444/image/upload/v1616790789/Common_2_axarsa.png" name="vote-btn" className="vote-btn" width="35px" height="35px" onClick={submitVote}></input>
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

