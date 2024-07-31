import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        checkFormValidity();
    }, [name, email, date, time, guests]);

    const checkFormValidity = () => {
        const isValid =
            name.trim() !== "" &&
            email.trim() !== "" &&
            date.trim() !== "" &&
            time.trim() !== "" &&
            guests > 0;
        setIsFormValid(isValid);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm({ name, email, date, time, guests });
    };

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({ type: "UPDATE_TIMES", date: newDate });
    };
    const handleTimeChange = (e) => setTime(e.target.value);
    const handleGuestsChange = (e) => setGuests(e.target.value);

    return ( <
            form onSubmit = { handleSubmit } >
            <
            label htmlFor = "name" > Name: < /label> <
            input type = "text"
            id = "name"
            aria - label = "Enter your name"
            value = { name }
            onChange = { handleNameChange }
            required /
            >

            <
            label htmlFor = "email" > Email: < /label> <
            input type = "email"
            id = "email"
            aria - label = "Enter your email address"
            value = { email }
            onChange = { handleEmailChange }
            required /
            >

            <
            label htmlFor = "date" > Date: < /label> <
            input type = "date"
            id = "date"
            aria - label = "Select a date"
            value = { date }
            onChange = { handleDateChange }
            required /
            >

            <
            label htmlFor = "time" > Time: < /label> <
            select id = "time"
            aria - label = "Select a time"
            value = { time }
            onChange = { handleTimeChange }
            required >
            <
            option value = "" > Select a time < /option> {
            availableTimes.map((t, index) => ( <
                option key = { index }
                value = { t } > { t } <
                /option>
            ))
        } <
        /select>

    <
    label htmlFor = "guests" > Number of Guests: < /label> <
    input type = "number"
    id = "guests"
    aria - label = "Enter number of guests"
    value = { guests }
    onChange = { handleGuestsChange }
    min = "1"
    required /
        >

        <
        button type = "submit"
    disabled = {!isFormValid }
    aria - label = "Submit booking form" >
        Book <
        /button> < /
        form >
);
}

export default BookingForm;