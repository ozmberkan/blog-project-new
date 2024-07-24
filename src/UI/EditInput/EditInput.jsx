import React from "react";

const EditInput = (props) => {
  const { label, type, placeholder, name, handleEditChange, value, options } =
    props;

  return (
    <div className="flex flex-col gap-y-2 font-lato">
      <label className="font-semibold text-zinc-500 dark:text-zinc-700">
        {label}
      </label>
      {type === "text" || type === "date" || type === "email" ? (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handleEditChange}
          className="p-3 text-zinc-500 w-full rounded-md border bg-transparent dark:border-zinc-600 border-zinc-700"
        />
      ) : type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={handleEditChange}
          className="p-3 text-zinc-500 w-full rounded-md border bg-transparent dark:border-zinc-600 border-zinc-700"
        >
          <option value="">Kategori Seçiniz</option>
          {options &&
            options.map((option, idx) => (
              <option key={idx} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleEditChange}
          className="p-3 text-zinc-500 bg-transparent dark:border-zinc-600 border-zinc-700 rounded-md border placeholder:text-zinc-500"
          maxLength={250}
        />
      ) : null}
    </div>
  );
};

export default EditInput;
