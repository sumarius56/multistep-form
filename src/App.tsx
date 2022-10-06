import { FormEvent, useState } from "react";
import "./App.css";
import { useMultistepForm } from "./useMultistepForm";
import UserForm from "./UserForm";
import AdressForm from "./AdressForm";
import AccountForm from "./AccountForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [formData, setFormData] = useState(INITIAL_DATA);

  function updateFields(fileds: Partial<FormData>) {
    setFormData((prev) => ({ ...prev, ...fileds }));
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Success!");
  };

  const { steps, currentStepIndex, step, next, back, isFirstStep, isLastStep } =
    useMultistepForm([
      <UserForm {...formData} updateFields={updateFields} />,
      <AdressForm {...formData} updateFields={updateFields} />,
      <AccountForm {...formData} updateFields={updateFields} />,
    ]);

  return (
    <div className="relative bg-green-400 border-[3px] border-black rounded-md ">
      <form onSubmit={onSubmit}>
        <div className="absolute top-[.5rem] right-[.5rem] font-bold">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="flex justify-end p-2 space-x-3 mt-4 font-bold">
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Submit" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
