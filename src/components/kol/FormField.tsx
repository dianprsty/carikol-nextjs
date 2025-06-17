import React from 'react';

type SelectOption = {
  value: string;
  label: string;
};

type FormFieldProps = {
  id: string;
  label: string;
  type: 'text' | 'select';
  options?: SelectOption[];
  placeholder?: string;
};

const FormField = ({ id, label, type, options, placeholder }: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      {type === 'select' ? (
        <div className="relative">
          <select
            id={id}
            name={id}
            className="block w-full px-4 py-3 mt-1 text-sm bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="">{placeholder || `Select ${label}`}</option>
            {options?.map((option) => (
              <option key={option.value} value={option.value} className="flex items-center">
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      ) : (
        <input
          type="text"
          id={id}
          name={id}
          placeholder={placeholder}
          className="block w-full px-4 py-3 mt-1 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
        />
      )}
    </div>
  );
};

export default FormField;