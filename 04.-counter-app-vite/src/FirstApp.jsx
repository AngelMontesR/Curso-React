import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle = 'No hay subtítulo' }) => {
    console.log(title);
    return (
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
};