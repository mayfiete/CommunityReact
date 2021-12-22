

import react from 'react';
import { Card, CardImg } from 'reactstrap';

const logo = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Card>
                            <CardImg className="col"
                                src="/assets/images/Community Kanban-logos_black.png"
                                alt="Card image cap"
                                style={{
                                    height: '50%',
                                    width: '50%',
                                    alignContent: 'right',

                                }}
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </>

    )
}

export default logo; 