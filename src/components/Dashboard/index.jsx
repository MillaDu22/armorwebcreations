import React from 'react';
import { Link } from 'react-router-dom';

import './dashboard.css';

function Dashboard() {
    return(
        <ul className="dashboard-list">
            <li className="dashboard-item">
                <Link to="/business" className="dashboard-link">
                    <h2>Entreprises</h2>
                    <p>Création de votre site pour booster votre activité.</p>
                    <p className="voir"><i className="fa fa-eye"></i></p>
                </Link>
            </li>
            <li className="dashboard-item">
                <Link to="/asso" className="dashboard-link">
                    <h2>Associations</h2>
                    <p>Solutions web pour votre cause.</p>
                    <p className="voir"><i className="fa fa-eye"></i></p>
                </Link>
            </li>
            <li className="dashboard-item">
                <Link to="/club" className="dashboard-link">
                    <h2>Clubs</h2>
                    <p>Sites sur mesure pour promouvoir votre passion.</p>
                    <p className="voir"><i className="fa fa-eye"></i></p>
                </Link>
            </li>
            <li className="dashboard-item">
                <Link to="/agency" className="dashboard-link">
                    <h2>Agences du digital</h2>
                    <p>Collaborons sur vos projets digitaux.</p>
                    <p className="voir"><i className="fa fa-eye"></i></p>
                </Link>
            </li>
        </ul>
    );
};

export default Dashboard;