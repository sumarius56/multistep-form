import React from "react";

type AdressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AdressFormProps = AdressData & {
  updateFields: (fields: Partial<AdressData>) => void;
};

const AdressForm = ({
  street,
  city,
  state,
  zip,
  updateFields,
}: AdressFormProps) => {
  return (
    <div className="flex  flex-col my-10 justify-center items-center ">
      <label className="font-bold m-2">Street</label>
      <input
        className="py-1 px-1 text-center rounded-lg bg-black text-green-400 font-bold"
        type="text"
        autoFocus
        required
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label className="font-bold m-2">City</label>
      <input
        className="py-1 px-1 text-center rounded-lg bg-black text-green-400 font-bold"
        type="text"
        required
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label className="font-bold m-2">State</label>
      <input
        className="py-1 px-1 text-center rounded-lg bg-black text-green-400 font-bold"
        type="text"
        required
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label className="font-bold m-2">Zip</label>
      <input
        className="py-1 px-1 text-center rounded-lg bg-black text-green-400 font-bold"
        type="text"
        required
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </div>
  );
};

export default AdressForm;
