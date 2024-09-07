import {useState} from "react";


export const Form = () => {
   const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted with:", inputValue)
  }
  return (
    
    <div className="h-screen flex justify-center items-center">
      <form className="flex flex-col space-y-1 " onSubmit={handleSubmit}>
        <h2 className="font-semibold">Teacher sign up.</h2>
        <input
          type="text"
          placeholder="First name*"
          className="border p-2 w-50vw rounded-md"
        />
        <input
          type="text"
          placeholder="Last name*"
          className="border p-2  w-50vw rounded-md"
        />
        <input
          type="email"
          placeholder="School email*"
          className="border p-2 w-50vw rounded-md"
        />
        <label htmlFor="">
          <h1 className="font-semibold">Tell us about your school</h1>
        </label>
        <input
          type="text"
          placeholder="School*"
          className="border p-2  w-50vw rounded-md"
        />
        <input
          type="text"
          placeholder="District*"
          className="border p-2  w-50vw rounded-md"
        />
        <input
          type="text"
          placeholder="City*"
          className="border p-2  w-50vw rounded-md"
        />
        <label htmlFor="detaiol">
          <h1 className="font-semibold">How did you hear about ScratchGPT?</h1>
        </label>
        <select className="border p-2 w-50vw rounded-md">
          <option>Select (optional)</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2  w-50vw rounded-full">
          Sign up
        </button>
      </form>
    </div>
  );
};