/** @flow */

import React from "react";

function SVG() {
    return (
        <React.Fragment>
            <path d="M1 1h10v10H1V1zm2 2v6h6V3H3z" fill-rule="nonzero" />
            <path d="M5 5h2v2H5z" fill-rule="evenodd" />
            <path d="M13 1h10v10H13V1zm2 2v6h6V3h-6z" fill-rule="nonzero" />
            <path d="M17 5h2v2h-2z" fill-rule="evenodd" />
            <path d="M1 13h10v10H1V13zm2 2v6h6v-6H3z" fill-rule="nonzero" />
            <path d="M5 17h2v2H5z" fill-rule="evenodd" />
            <path
                d="M23 19h-4v4h-6V13h1-1v6h2v2h2v-6h-2v-2h-1 3v2h2v2h2v-4h2v6zm0 2v2h-2v-2h2z"
                fill-rule="nonzero"
            />
        </React.Fragment>
    );
}

export default SVG;