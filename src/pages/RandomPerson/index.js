import React, { useEffect } from 'react';
import { Person } from "../../components/Person";
import { useDispatch, useSelector } from "react-redux";
import { randomPersonSelectors, getRandomPersonAction } from "../../store/person";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        maxWidth: 980,
        margin: 'auto',
        lineHeight: 2
    }
});

export const RandomPerson = () => {

    const classes = useStyles();

    const personData = useSelector(randomPersonSelectors.getPersonData)
    const error = useSelector(randomPersonSelectors.getPersonError)
    const isLoading = useSelector(randomPersonSelectors.getPersonLoading)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getRandomPersonAction());
    }, [])

    const getNewPerson = () => {
        dispatch(getRandomPersonAction());
    }


    console.log(personData);

    return (
        <div className={classes.container}>
            <h1>Найти случайного человека</h1>
            <Button variant="contained" color="primary" type="button" onClick={getNewPerson}>найти</Button>

            {
                isLoading && <div>
                    ищем...
                </div>
            }

            {
                error && <div>
                    error: {error}
                </div>
            }

            {
                personData &&
                <Person personData={personData.results[0]} />
            }
        </div>
    );
};