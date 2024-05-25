import React, { useState } from "react";
import type { QuizOptionType, QuizType } from "../types";

export const Quiz: React.FC<{
  value: QuizType;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData | null>>;
}> = ({ value, formData, setFormData }) => {
  const [selectedValue, setSelectedValue] = useState("");

  void selectedValue;

  return (
    <>
      <span>
        {value.id}. {value.question}
      </span>

      <div className="options-area">
        {value.options.map((opt: QuizOptionType, index) => {
          return (
            <div className="option" key={index}>
              <input
                type="radio"
                name={`${value.id}`}
                id={`${value.id}-${opt.id}`}
                checked={formData?.has(`${value.id}-${opt.id}`)}
                onChange={(e: React.FormEvent) => {
                  const target = e.currentTarget as HTMLInputElement;
                  if (!target.checked) {
                    return;
                  }
                  const newFormData = new FormData();
                  for (const [key, val] of formData.entries()) {
                    if (key.startsWith(value.id)) {
                      continue;
                    }
                    newFormData.append(key, val);
                  }
                  newFormData.append(`${value.id}-${opt.id}`, target.value);
                  setSelectedValue("on");
                  setFormData(newFormData);
                }}
              />
              <label htmlFor={`${value.id}-${opt.id}`}>{opt.text}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};
