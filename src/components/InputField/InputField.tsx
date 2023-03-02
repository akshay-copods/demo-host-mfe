import { Input } from "antd";
import React from "react";

export const InputField = ({ value, onChange }) => {
  return (
    <label className="flex flex-col gap-2" htmlFor="email">
      Enter Email
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id="email"
        placeholder="name@company.com"
        className="rounded-sm"
      />
    </label>
  );
};
