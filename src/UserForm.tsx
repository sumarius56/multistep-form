import React from "react";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) => {
  return (
    <div className="flex  flex-col my-10 justify-center items-center ">
      <label  className="font-bold m-2">First Name</label>
      <input className="py-1 px-1 text-center rounded-lg bg-black text-green-400 font-bold"
        type="text"
        autoFocus
        required
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label  className="font-bold m-2">Last Name</label>
      <input
       className="py-1 px-1 text-center rounded-lg bg-black text-green-400 font-bold"
        type="text"
        required
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label className="font-bold m-2">Age</label>
      <input className="py-1 px-1 text-center rounded-lg bg-black text-green-400 font-bold"
        type="number"
        required
        min={18}
        value={age} 
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </div>
  );
};

export default UserForm;
