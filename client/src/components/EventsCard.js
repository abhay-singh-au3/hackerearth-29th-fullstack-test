import React, { Fragment } from 'react';

const EventsCard = props => {
    return (
        <Fragment>
            {
                props.data.map((obj, idx) =>
                    <div className="col-sm-12 col-md-6" key={idx}>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{obj.title}</h5>
                                <p className="lead text-danger"><small className="text-muted">by </small>{obj.main_speaker}</p>
                                <p className="card-text">{obj.description}</p>
                                <span className="badge badge-danger">{obj.views} views</span>
                                <p className="card-text"><small className="text-muted">{obj.event}</small></p>
                                <p className="card-text"><small className="text-muted"><a href={obj.url}>Read more..</a></small></p>
                            </div>
                        </div>
                    </div>
                )
            }
        </Fragment>
    );
}

export default EventsCard;