import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [date, setDate] = useState();

    const getYear = () => setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])

    return (
        <footer style={{ display: "flex", justifyContent: "center", bottom: '0' }}>
            <p><small>Copyright @ {date}</small></p>
        </footer>
    );
};

export default Footer;