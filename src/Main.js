import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";

const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

const updateTimes = (state, action) => {
    return fetchAPI(new Date(action.date));
};

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed-booking");
        }
    };

    return ( <
        main >
        <
        Routes >
        <
        Route path = "/"
        element = { <
            BookingForm
            availableTimes = { availableTimes }
            dispatch = { dispatch }
            submitForm = { submitForm }
            />
        }
        />{" "} <
        Route path = "/confirmed-booking"
        element = { < ConfirmedBooking / > }
        />{" "} <
        /Routes>{" "} <
        /main>
    );
}

export default Main;