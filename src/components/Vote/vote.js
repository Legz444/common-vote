import './vote.css';
import React, { useState, useEffect } from 'react';
import {Card, InputGroup, Accordion } from 'react-bootstrap';
import axios from 'axios';




//////Psuedo Code//////

//radio button is clicked, updates the answer state to the value of that radio button, a string of the answer. 

//on submit the total gets set. the question gets set to the the value of the quesiton. the answer gets set to the value of the chosen radiobtn. then in the back end this gets posted to the totals. The answers are kept in an array with each answer and the total of votes it has.

// on submit, the users answer gets set. the question gets set to the value of the question. the answer gets set to the value of the chosen radiobtn. then in the back end this gets posted to the users answers array. 

export default function Vote(props){
//////States//////
const [userState, setUserState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    isRegistered: false, 
    isLoggedIn: false,
    votes: ""
});

useEffect(()=> {
    (async () => {
        try{
            const response = await axios.post("https://commonvote.herokuapp.com/vote", {
                votes: userState.votes,
            });
            console.log(response);
            localStorage.setItem('votes', response.data.votes);
        }catch(err){
            console.error(err);
        }
}) ();
}, [userState]);

const [ answer, setAnswer ] = useState({});

const [ totals, setTotals ] = useState({});

useEffect(()=> {
    (async () => {
        try{
            const response = await axios.post("https://commonvote.herokuapp.com/vote/totals", {
                totals: totals.totals,
            });
            console.log(response);
            localStorage.setItem('totals', response.data.totals);
        }catch(err){
            console.error(err);
        }
}) ();
}, [totals]);


//////Variables//////
    const voterDemographic = props.poll.voterDemographic;
    const currentLeadership = props.poll.currentLeadership;
    const currentSystem = props.poll.currentSystem;
    const economics = props.poll.economics;
    const foreignPolicy = props.poll.foreignPolicy;



//////Voting functionality//////



//set answers chosen radio btn value and display click
const setValue = (e) => {
    setAnswer({
    ...answer,
    ...{[e.target.name] : e.target.value}
    });
    const countVal = () =>{
        let count = 0
        let btn = e.target
        let display = document.getElementsByClassName("display");
        btn.onClick = () => {
            count+=1;
            display.innerHTML = count;
        }
    }
    countVal();
};




const submitVote = async (e) => {
    e.preventDefault();
    setUserState({
        ...userState,
        votes: {...answer}
    });
    setTotals({
        ...totals,
        totals: {...answer}
    });
};

//Function to count occurances//
//function passes an array and the values within it. Return back the reduced array passing in an accumulator and an item(single index of arr).
//return back to me, if the value is the same as the item, accumulate that items occurance by 1. if not, show me the item. Start at 0.
// const countTotals = function(arr, val) {
//     return arr.reduce((acc, item) => {
//         return (val === item ? acc +1 : acc)
//     }, 0);
// };
//Function to map over the totals state variable and seperate out the keys. We need these so we can count the totals instances of each answer.
// const x = item.question
// const createDataKeys = function(x){
//     {props.totals.length ? props.totals.map(key => {
//         if(key === x){
//             Object.values(key);
//         }
//     }): ""};
// };

    return(
        <>
            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
            <div className="vote page">
            <Accordion className="voteAccordion" defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey= "0" >Basic Voter Information</Accordion.Toggle>
                        {voterDemographic.length ? voterDemographic.map(item => {
                            // const dataKeys = createDataKeys(item.question);
                            // console.log(dataKeys);
                            return(
                                <>
                                <Accordion.Collapse eventKey="0">
                                <Card className="container">
                                    <div className="left-side">
                                    <h3 className="question">{item.question}</h3>
                                    
                                        {item.answers && item.answers.length ? item.answers.map(i => {
                                            // let data = countTotals(dataKeys, i)
                                            // console.log(data);
                                            return(
                                                    <>
                                                    <h5>Total votes = <span className="display">0</span></h5>
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Radio type="radio" name={item.question} aria-label="Radio-btn" value={i} onClick={setValue} ></InputGroup.Radio>
                                                        </InputGroup.Prepend>
                                                        <InputGroup.Text>{i}</InputGroup.Text>
                                                    </InputGroup>
                                                </>
                                            )
                                        }): ""}
                                    
                                    <div>
                                        <input type="image" src="https://res.cloudinary.com/legz444/image/upload/v1616790789/Common_2_axarsa.png" name="vote-btn" className="vote-btn" width="50px" height="50px" onClick={submitVote}></input>
                                        <p>Vote</p>
                                    </div>
                                    </div>
                                    <div className="right-side" width="250px" height="250px"><img src="https://res.cloudinary.com/legz444/image/upload/v1618038018/chartjs_liybbp.png" width="250px" height="250px"/></div>   
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
                        <div className="left-side">
                        <h3 className="question">{item.question}</h3>
                        {item.answers && item.answers.length ? item.answers.map(i => {
                                            return(
                                                    <>
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Radio type="radio" name={item.question} aria-label="Radio-btn" value={i} onClick={setValue} ></InputGroup.Radio>
                                                        </InputGroup.Prepend>
                                                        <InputGroup.Text>{i}</InputGroup.Text>
                                                    </InputGroup>
                                                    
                                                    </>
                                            )
                                        }): ""}
                                    <div>
                                        <input type="image" src="https://res.cloudinary.com/legz444/image/upload/v1616790789/Common_2_axarsa.png" name="vote-btn" className="vote-btn" width="35px" height="35px" onClick={submitVote}></input>
                                        <p>Vote</p>
                                    </div>
                                    </div>
                                    <div className="right-side" width="250px" height="250px"><img src="https://res.cloudinary.com/legz444/image/upload/v1618038018/chartjs_liybbp.png" width="250px" height="250px"/></div>
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
                        <div className="left-side">
                        <h3 className="question">{item.question}</h3>
                        {item.answers && item.answers.length ? item.answers.map(i => {
                                            return(
                                                    <>
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Radio type="radio" name={item.question} aria-label="Radio-btn" value={i} onClick={setValue} ></InputGroup.Radio>
                                                        </InputGroup.Prepend>
                                                        <InputGroup.Text>{i}</InputGroup.Text>
                                                    </InputGroup>
                                                    </>
                                            )
                                        }): ""}
                                    <div>
                                        <input type="image" src="https://res.cloudinary.com/legz444/image/upload/v1616790789/Common_2_axarsa.png" name="vote-btn" className="vote-btn" width="35px" height="35px" onClick={submitVote}></input>
                                        <p>Vote</p>
                                    </div>
                                    </div>
                                    <div className="right-side" width="250px" height="250px"><img src="https://res.cloudinary.com/legz444/image/upload/v1618038018/chartjs_liybbp.png" width="250px" height="250px"/></div>
                                    
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
                        <div className="left-side">
                        <h3 className="question">{item.question}</h3>
                        {item.answers && item.answers.length ? item.answers.map(i => {
                                            return(
                                                    <>
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Radio type="radio" name={item.question} aria-label="Radio-btn" value={i} onClick={setValue} ></InputGroup.Radio>
                                                        </InputGroup.Prepend>
                                                        <InputGroup.Text>{i}</InputGroup.Text>
                                                    </InputGroup>
                                                    </>
                                            )
                                        }): ""}
                                    <div>
                                        <input type="image" src="https://res.cloudinary.com/legz444/image/upload/v1616790789/Common_2_axarsa.png" name="vote-btn" className="vote-btn" width="35px" height="35px" onClick={submitVote}></input>
                                        <p>Vote</p>
                                    </div>
                                    </div>
                                    <div className="right-side" width="250px" height="250px"><img src="https://res.cloudinary.com/legz444/image/upload/v1618038018/chartjs_liybbp.png" width="250px" height="250px"/></div>
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
                        <div className="left-side">
                        <h3 className="question">{item.question}</h3>
                        {item.answers && item.answers.length ? item.answers.map(i => {
                                            return(
                                                    <>
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Radio type="radio" name={item.question} aria-label="Radio-btn" value={i} onClick={setValue} ></InputGroup.Radio>
                                                        </InputGroup.Prepend>
                                                        <InputGroup.Text>{i}</InputGroup.Text>
                                                    </InputGroup>
                                                    </>
                                            )
                                        }): ""}
                                    <div>
                                        <input type="image" src="https://res.cloudinary.com/legz444/image/upload/v1616790789/Common_2_axarsa.png" name="vote-btn" className="vote-btn" width="35px" height="35px" onClick={submitVote}></input>
                                        <p>Vote</p>
                                    </div>
                                    </div>
                                    <div className="right-side" width="250px" height="250px"><img src="https://res.cloudinary.com/legz444/image/upload/v1618038018/chartjs_liybbp.png" width="250px" height="250px"/></div>
                        </Card>
                        </Accordion.Collapse>
                    </>
                ) }): ""}
                </Card>
            </Accordion>
            </div>
        </>
    )
}


    // // //Parse out answers array from object to be mapped in.---How to loop this function over all categories??
    // // //map over the category and return an array of each objects answers
    // let parsedAns = voterDemographic.map(item => {
    //     const grabAnswers =Object.entries(item);
    //     return (grabAnswers[1]);
    // })
    // console.log(parsedAns);
    // // // map over parsedAns array, for every item, return that item's index [1] which is just the answers.
    // let a = parsedAns.map(i => {
    //     return i[1]
    // })
    // console.log(a);