// short story about Common Vote and the dream to create an unbiased platform for governmental and political change in America
import React from "react";
import {Card} from 'react-bootstrap';

const About = () =>{
    return(
        <Card className="mx-auto" style={{ width: '40%' }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/legz444/image/upload/v1618246976/Common_4_grcsxp.png" />
            <Card.Body>
                <Card.Title>Why CommonVote?</Card.Title>
                <Card.Subtitle>The following reflects the dream for CommonVote, not all of these features are currently available:</Card.Subtitle>
                <Card.Text>
                The purpose of CommonVote is to create an unbiased platform to collect data on what the people of America truly want in their government. With a growing distrust in our current system, it is time to create an alternative platform. Voting needs to be accessable, safe, and provide an accurate representation of the population. By putting voting capabilities right into the palm of registered voters, we can say goodbye to long lines and long processing times. No more need to recount votes. The results are available, free, for all to see. CommonVote understands the importance of security and privacy so all users information is passed through a blockchain, decentralized sytem making it virtually impossible for anyone to know who voted and on what. But by making the results fully accessable, there is no more wondering what the people truly want. There is no more room for personal agendas and political corruption. Everyone can see what everyone wants.
                <br></br>
                <br></br>
                At CommonVote, we value your data. Without your contribution none of this would be possible and our government would never evolve. That is why we pay you directly for your data. Using the secure and immediate CVUSA crypto currency, you will be paid quarterly for your votes. This can then be used anywhere within the United States of America. We believe in creating a closed loop system where the government is the people, and the government supports the people, so the people can support the economy. 
                </Card.Text>
                
            </Card.Body>
        </Card>
    )
}

export default About;