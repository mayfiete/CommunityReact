import react from 'react';
import { Card, CardImg } from 'reactstrap';

import { useEffect, useState, isSticky } from 'react';

// Sticky Header that 


const Hero = () => {

    return (
        <>
            <div className="container"
                style={{
                    position: 'relative',
                    left: '0',
                    top: '400px',
                    bottom: '0',
                    width: '100%'
                }}>
                <div className="row"
                >
                    <div className="col">
                        <Card>
                            <CardImg className="col"
                                src="/assets/images/woman-smiling-glasses.jpg"
                                alt="Card image cap"
                                style={{
                                    position: 'fixed',
                                    left: '0',
                                    width: '100vw',
                                    overflow: 'hidden'
                                }}
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Hero; 
