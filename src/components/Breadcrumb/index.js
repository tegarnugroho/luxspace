import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Breadcrumb(List) {
    return (
        <section className="bg-gray-100 py-8 px-4">
            <div className="container mx-auto">
                <ul className="breadcrumb">
                    {
                        List?.map?.((item, index) => {
                            const arias = index === List?.length ? { "aria-lable": "current-page" } : {}
                            return (
                                <li key={item.url}>
                                    <Link to={item.url} {...arias}>{item.name}</Link>
                                </li>
                            );
                        })
                    }
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Office Room</Link>
                    </li>
                    <li>
                        <Link to="/" aria-label="current-page">Details</Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}

Breadcrumb.propTypes = {
    list: PropTypes.array.isRequired,
}
