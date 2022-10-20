import React from 'react'
import { useParams } from 'react-router-dom'
import './Page.css'

const PageNotFound = () => {

    const { error } = useParams();

    return (
        <div>
            <div className="page-box">
                <div className="page-box2">
                    <div className="page-box3">
                        <div className="page-box4">
                            <div className="page-box5">

                                <div className="page-box6">
                                    <h1 className="home-p4">
                                        404
                                    </h1>
                                    <p className="page-p3">
                                        Page Not Found
                                    </p>

                                    <p className="page-p2">
                                        {error} under construction
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PageNotFound
