import React from "react";
import { useForm } from "react-hook-form";

export default function ContactPage() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h1>Contact ContactPage</h1>
            <div className="c-form">
            <form onSubmit={handleSubmit(onSubmit)} >
                <label htmlfor="name" >
                    <span>Name</span>
                    <input type="text" name="name" id="name" ref={register({ required: true })}/>
                </label>
                <label htmlfor="email">
                    <span>Email</span>
                    <input type="email" name="name" id="email" ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
                    {errors.email && <span>This field is required and need to be an email</span>}
                </label>
                <label htmlfor="favChar">
                    <span>Favorite Amiibo</span>
                    <select name="favChar" id="favChar" ref={register}>
                        <option value="mario">Mario</option>
                        <option value="zelda">Zelda</option>
                        <option value="yoshi">Yoshi</option>
                    </select>
                </label>
                <label htmlfor="message">
                    <span>Message</span>
                    <input type="textarea" name="message" id="message" ref={register({ required: true, minLenght: 8, maxLenght: 255 })} pattern></input>
                </label>
                <input type="submit" value="submit" />
            </form>
            </div>
        </div>
    );
}
