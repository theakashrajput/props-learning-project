import { forwardRef, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'; // Recommended for merging classes safely
import Button from './Button';


const CustomInput = forwardRef(({
  label,
  containerClasses = "",
  inputClasses = "",
  labelClasses = "",
  id,
  ...props
}, ref) => {

  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-') || 'custom-input';

  return (
    <div className={twMerge("w-full", containerClasses)}>
      <div className="relative">
        <input
          {...props}
          id={inputId}
          ref={ref}
          className={twMerge(
            // Base styles
            "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none",
            // Focus & Peer states
            "focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            // Disabled state
            "disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed",
            inputClasses
          )}
          placeholder=" " // Required for the peer-placeholder-shown logic
        />
        <label
          htmlFor={inputId}
          className={twMerge(
            // Base position (floating logic)
            "absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white px-2 left-1",
            // Interaction logic
            "peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4",
            labelClasses
          )}
        >
          {label}
        </label>
      </div>
    </div>
  );
});

const RefProps = () => {

  const [message, setMessage] = useState("");

  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

  
  const focusOnInput = (ref) => {
    ref.current?.focus();
  }
  
  const getInputText = (ref) => {
    setMessage(ref.current?.value);
  }
  
  const clearInputText = (ref) => {
    ref.current.value = "";
    setMessage("");
  }

  return (
    <section id='ref' className='bg-white text-black rounded-xl shadow-lg py-6 px-8'>

      <h2 className='text-3xl font-bold mb-2 text-gray-800'>Ref Props</h2>
      <p
        className='mb-6 mt-4 text-gray-600'
      >Refs provide a way to access DOM nodes or React elements directly. Use <span className='bg-gray-200 px-2 py-1 rounded-sm text-black'>forwardRef</span> to pass refs to child components.</p>

      <div className='bg-blue-50 rounded-xl py-6 px-10'>
        <h4 className='text-gray-800 font-semibold text-2xl mb-5'>Try it now</h4>

        {message && (
          <div className="my-6 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-800 rounded">
            {message}
          </div>
        )}

        <div className='flex flex-col gap-5'>
          <div>
            <p className='text-gray-700 mb-3'>First Input</p>
            <CustomInput
              label="First Input"
              labelClasses="bg-blue-50"
              ref={firstInputRef}
            />
          </div>

          <div>
            <p className='text-gray-700 mb-3'>Second Input</p>
            <CustomInput
              label="Second Input"
              labelClasses="bg-blue-50"
              ref={secondInputRef}
            />
          </div>
        </div>

        <div className='mt-5 flex gap-5'>
          <Button
            onClick={() => focusOnInput(firstInputRef)}
            text="Focus on first input"
            color='primary'
          />

          <Button
            onClick={() => focusOnInput(secondInputRef)}
            text="Focus on second input"
            color='primary'
          />

          <Button
            onClick={() => getInputText(firstInputRef)}
            text="Get first input value"
            color='secondary'
          />

          <Button
            onClick={() => getInputText(secondInputRef)}
            text="Get second input value"
            color='secondary'
          />

          <Button
            onClick={() => clearInputText(firstInputRef)}
            text="Clear first input value"
            color='danger'
          />

          <Button
            onClick={() => clearInputText(secondInputRef)}
            text="Clear second input value"
            color='danger'
          />
        </div>
      </div>

    </section>
  )
}

export default RefProps