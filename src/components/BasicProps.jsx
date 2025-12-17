import React, { useState } from 'react'
import Button from './Button'

const BasicProps = () => {
    const [count, setCount] = useState(0)
    return (
        <section id='basic' className='bg-white text-black rounded-xl shadow-lg py-6 px-8'>
            <h3 className='text-3xl font-bold mb-2 text-gray-800'>Basic Props</h3>
            <p className='text-sm text-gray-400 font-semibold tracking-wide'>Props are argument passed to React components. They allow you to pass data to child components.</p>

            <div className='mt-6'>
                <h4 className='text-lg font-bold'>Deferent Colors</h4>
                <div className='flex gap-5 mt-1'>
                    <Button
                        text="Primary Button"
                        onClick={() => setCount(prev => prev + 1)}
                        color="primary"
                    />
                    <Button
                        text="Secondary Button"
                        onClick={() => setCount(prev => prev + 1)}
                        color="secondary"
                    />
                    <Button
                        text="Danger Button"
                        onClick={() => setCount(0)}
                        color="danger"
                    />
                    <Button
                        text="Success Button"
                        onClick={() => setCount(prev => prev + 1)}
                        color="success"
                    />
                </div>
            </div>
            <div className='mt-6'>
                <h4 className='text-lg font-bold'>Deferent Sizes</h4>
                <div className='flex gap-5 mt-1 items-center'>
                    <Button
                        text="Small"
                        onClick={() => setCount(prev => prev + 1)}
                        color="primary"
                        size='small'
                    />
                    <Button
                        text="Medium (default)"
                        onClick={() => setCount(prev => prev + 1)}
                        color="primary"
                        size='default'
                    />
                    <Button
                        text="Large"
                        onClick={() => setCount(prev => prev + 1)}
                        color="primary"
                        size='large'
                    />
                </div>
            </div>
            <div className='mt-6'>
                <h4 className='text-lg font-bold'>Disabled State</h4>
                <div className='flex gap-5 mt-1'>
                    <Button
                        text="Primary Button"
                        onClick={() => setCount(prev => prev + 1)}
                        color="primary"
                        disabled={false}
                    />
                    <Button
                        text="Disabled Button"
                        onClick={() => setCount(prev => prev + 1)}
                        color="primary"
                        disabled={true}
                    />
                </div>
            </div>
            <div className='mt-6 p-4 bg-blue-50 rounded-lg'>
                <p
                    className='text-lg text-gray-700'
                >Click count:
                    <span className='text-blue-600 font-bold ml-1'>{count}</span></p>
            </div>
        </section>
    )
}

export default BasicProps