import React from "react";
import { useNavigate } from "react-router-dom";
import { useCreateCategory } from "../service/mutation/useCreateCategory";
import { CreateForm } from "../components/Create-form";

export const CreateCategory = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useCreateCategory();

  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate(-1); // Navigate back after successful creation
      },
    });
  };

  return (
    <div>
      {!isLoading && <CreateForm submit={submit} />}
    </div>
  );
};
