import React from 'react'
import { Card } from 'react-bootstrap'

export default class Profile extends React.Component {
    render() {
        return (
            <div className='text-center'>
            <Card border='light' className='text-center' style={{ width: '80rem' }} > 
                <Card.Body>
                <Card.Img variant='top' style={{ objectFit: 'scale-down', height: 'auto', width: 'auto', maxHeight: 200, maxWidth: 300 }} src='https://www.w3schools.com/w3images/team2.jpg'></Card.Img>
                <br></br><br></br>
                <Card.Title>John Doe</Card.Title>
                <br></br>
                <Card.Text>CEO & Founder</Card.Text>
                <br></br>
                <Card.Text>Harvard University</Card.Text>
                


                </Card.Body>
            </Card>
            </div>
        )
    }
}