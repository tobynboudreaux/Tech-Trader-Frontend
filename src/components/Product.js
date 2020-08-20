import React, {useState, useRef} from 'react';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button'
import { Popover, Overlay } from 'react-bootstrap';

const Product = (props) => {

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = e => {
        setShow(!show)
        setTarget(e.target)
    }
    const product = props.product
    
    return (
            
            <div className='productCard'>
                <Card border='light' className='text-center' style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Img variant='top' style={{ objectFit: 'scale-down', height: 'auto', width: 'auto' }} src={product.image} />
                        <br></br><br></br>
                        <Card.Text>
                        {product.description}
                        </Card.Text>

                        <br></br>
                    <Button onClick={() => props.addLike(product)} >Like</Button>
                    <Card.Text >${product.price}</Card.Text>
                    <Button variant='primary' onClick={() => props.addToCart(product)}>Add To Cart</Button>
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