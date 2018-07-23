import React from 'react';

const collapse = (props) => (
    <div>
        <a className={"btn " + props.classCollapse } data-toggle="collapse" href={"#" + props.collapseId} role="button" aria-expanded="false" aria-controls={props.collapseId}>
                {props.innerText}
        </a>
        <div className="collapse mb-3" id={props.collapseId}>
            <div className="card card-body">
                {props.children}
            </div>
        </div>
    </div>
)

export default collapse;