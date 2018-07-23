import React from 'react';

const collapse = (props) => (
    <div>
        <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                {props.innerText}
        </a>
        <div className="collapse mb-3" id="collapseExample">
            <div className="card card-body">
                {props.children}
            </div>
        </div>
    </div>
)

export default collapse;