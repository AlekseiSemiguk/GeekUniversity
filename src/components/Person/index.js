import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    list: {
        lineHeight: 1.5,
        fontSize: 18,
    },
});

export const Person = ({ personData }) => {
    const classes = useStyles();
    return (
        <div>
            <ul className={classes.list}>
                <img src={personData.picture.large} alt="photo" />
                <li>Gender: <span>{personData.gender}</span></li>
                <li>Name: <span>{personData.name.title}. {personData.name.first} {personData.name.last}</span></li>
                <li>Age: <span>{personData.dob.age}</span></li>
                <li>Address: <span>{personData.location.city}, {personData.location.city}, {personData.location.street.name}, {personData.location.street.number}</span></li>
                <li>Phone: <span>{personData.phone}</span></li>
            </ul>
        </div>
    );
};