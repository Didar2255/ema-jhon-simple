import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { user } = useAuth()
    return (
        <div >
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />

                {errors.email && <span className='error'>This field is required</span>}
                <input placeholder='Phone number' {...register("phone Number")} />
                <input placeholder='Your address' {...register("address")} />
                <input placeholder='Your city' {...register("city")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;