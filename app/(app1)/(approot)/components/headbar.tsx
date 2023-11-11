'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs, inputSchema } from "./zodschema/zodschema";


const Headbar = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(inputSchema),
  } //resolver is to display error message
  );
  
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <>
        <div className="headbar">
            <div>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 17V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M5 15V1m8 18v-4"/>
              </svg>
            </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="myappinput"
              placeholder="Name"
              {...register("name", {required: true})}
            />
              {errors.name?.message && (
                    <span className="span1">{errors.name.message}</span>)}
                    
            <input
              className="myappinput"
              placeholder="Email"
              {...register("email", {required: true})}
            />
            <input
              className="myappinput"
              placeholder="Company"
              {...register("company")}
            />
            <input
              className="myappinput"
              placeholder="Loved song"
              {...register("lovesong")}
            />
            <br />

            <div className="myappinput2">
                
            <div className="radiobox">
                <input
                  {...register("gender", { required: true })}
                  className="r1"
                  type="radio"
                  value="M"
                  id='gender1'
                  defaultChecked
                />
                <div className="lbox"></div>
                <label htmlFor="gender1" className="l1">M </label>
                </div>
       
                <div className="radiobox">
                <input
                  {...register("gender", { required: true })}
                  className="r1"
                  type="radio"
                  value="F"
                  id='gender2'
                  />
                  <div className="lbox"></div>
                  <label htmlFor="gender2" className="l1">F </label>
                </div>
        
                  <div className="radiobox">
                  <input
                    {...register("gender", { required: true })}
                    className="r1"
                    type="radio"
                    value="others"
                    id='gender3'
                  />
                    <div className="lbox"></div>
                    <label htmlFor="gender3" className="l1">Others </label>
                  </div>

                  {errors.gender?.message && (
                    <span className="span1">{errors.gender.message}</span>
                  )}
            </div>

              <input className="b1 " type="submit" value="Submit" />

          </form>
        </div>


    </>
  );
};

export default Headbar;
