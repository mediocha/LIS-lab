import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PageTemplate: React.FC = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default PageTemplate;