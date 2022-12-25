import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";

interface FormInput {
  movieName: string;
}

function SearchBar() {
  const { register, handleSubmit } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("movieName")} />
    </form>
  );
}

export default SearchBar;
