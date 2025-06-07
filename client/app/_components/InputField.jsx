export default function InputField({
  id,
  placeholder,
  value,
  onChange,
  error,
  showError,
}) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-2 w-full border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
      />
      {showError && error && <p className="text-red-500 text-base">{error}</p>}
    </div>
  )
}
