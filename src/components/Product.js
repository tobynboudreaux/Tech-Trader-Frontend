import React, {useState, useRef} from 'react';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button'
import { Popover, Overlay, ProgressBar } from 'react-bootstrap';

const Product = (props) => {

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = e => {
        setShow(!show)
        setTarget(e.target)
    }

    const average = nums => {
        
        let av = nums.reduce((a, b) => (a+b), 0) / nums.length;
        return Math.round(av * 100) / 100
    }

    const ratings = props.product.reviews.map(rev => rev.rating)
    const product = props.product
    
    return (
            
            <div className='productCard'>
                <Card border='light' className='text-center' style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Img variant='top' style={{ objectFit: 'scale-down', height: 'auto', width: 'auto', maxHeight: 200, maxWidth: 300 }} src={product.image} />
                        <br></br><br></br>
                        <Card.Text>
                        {product.description}
                        </Card.Text>

                        <br></br>
                        <Card.Text>Likes: {product.likes.length}</Card.Text>
                    <Button onClick={() => {
                        let likes = parseInt(product.likes.length)
                        likes++
                        product.likes.length = likes
                        props.addLike(product)
                    }} >Like</Button>
                    <Card.Text >${product.price}</Card.Text>
                    <Button variant='primary' onClick={() => props.addToCart(product)}>Add To Cart</Button>
                    <br></br><br></br>
                    <Card.Text>Average Rating: {average(ratings)}</Card.Text>
                    <ProgressBar animated now={average(ratings) * 10} max={50} min={10} />
                    </Card.Body>
                    <div ref={ref}>
                            <Button block onClick={handleClick}>Product</Button>
                                <Overlay
                                    placement='left'
                                    show={show}
                                    target={target}
                                    container={ref.current}>
                                        
                                    <Popover>
                                        <Popover.Title>{product.name}</Popover.Title>
                                        <Popover.Content>
                                            <Card.Link onClick={() => props.show(product)}>Card Info</Card.Link>
                                            <Card.Link href="#">Go To Top</Card.Link>
                                        </Popover.Content>
                                    </Popover>
                                    
                                </Overlay>
                        </div>
                </Card>
                
                <br></br><br></br>
            </div>
        )
    
}

export default Product