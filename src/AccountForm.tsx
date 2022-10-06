import React from "react";

type AccountData = {
  email: string;
  password: string;
};

type AdressFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

const AccountForm = ({ email, password, updateFields }: AdressFormProps) => {
  return (
    <div className="flex  flex-col my-10 justify-center items-center ">
      <label className="font-bold m-2">Email</label>
      <input
        className="py-1 px-1 text-center rounded-lg bg-black text-green-400 font-bold"
        type="email"
        autoFocus
        required
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label className="font-bold m-2">Password</label>
      <input
        className="py-1 px-1 text-center rounded-lg bg-black text-green-400 font-bold"
        type="password"
        required
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </div>
  );
};

export default AccountForm;
