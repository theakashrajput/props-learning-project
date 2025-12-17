const Container = ({ children, layout = "grid" }) => {
    const layoutClasses = {
        vertical: "flex flex-col space-y-6",
        horizontal: "flex flex-wrap gap-4",
        grid: "grid grid-cols-1 md: grid-cols-2 gap-4"
    }

    return (
        <div className={layoutClasses[layout]}>
            {children}
        </div>
    )
}

const Card = ({ children, title, color }) => {
    const colorClasses = {
        blue: "border-l-4 border-blue-500 bg-blue-50",
        purple: "border-l-4 border-purple-500 bg-purple-50",
        green: "border-l-4 border-green-500 bg-green-50",
        red: "border-l-4 border-red-500 bg-red-50"
    };

    return (
        <div
            className={`
            ${colorClasses[color]}
            p-6 rounded-xl shadow-md  
        `}>
            <h4 className="text-xl font-bold mb-5 text-gray-800">{title}</h4>
            {children}
        </div>
    )
}

const ChildrenProps = () => {
    return (
        <section id="children" className='bg-white text-black rounded-xl shadow-lg py-6 px-8'>
            <p className="mb-6">The {" "}
                <code className="bg-gray-200 px-2 py-1 rounded-sm">children</code>
                {" "}prop allow you to pass JSX elements or components as children to other components, enabling components composition.
            </p>

            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Card Components with Children:
                </h3>
                <Container layout="grid">
                    <Card color="blue" title="User Profile">
                        <div className="flex flex-col gap-2 text-gray-700">
                            <span><strong>Name: </strong>John Doe</span>
                            <span><strong>Email: </strong>john@example.com</span>
                            <span><strong>Role: </strong>Developer</span>
                        </div>
                    </Card>
                    <Card color="green" title="Statistics">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-end text-gray-800">
                                <span>
                                    Total Users:
                                </span>
                                <span className="font-extrabold">
                                    1,234
                                </span>
                            </div>
                            <div className="flex justify-between items-end text-gray-800">
                                <span>
                                    Active Users:
                                </span>
                                <span className="font-extrabold">
                                    567
                                </span>
                            </div>
                            <div className="flex justify-between items-end text-gray-800">
                                <span>
                                    Revenue:
                                </span>
                                <span className="font-extrabold">
                                    $89,000
                                </span>
                            </div>
                        </div>
                    </Card>
                    <Card color="purple" title="Quick Actions">
                        <div className="flex flex-col gap-3">
                            <button className="w-full py-2 font-semibold rounded-sm text-white bg-purple-500 hover:bg-purple-600 cursor-pointer active:scale-95 duration-200 ease-in">
                                Create New
                            </button>
                            <button className="w-full py-2 font-semibold rounded-sm text-white bg-gray-500 hover:bg-gray-600 cursor-pointer active:scale-95 duration-200 ease-in">
                                View All
                            </button>
                        </div>
                    </Card>
                    <Card color="red" title="Warning">
                        <p className="text-lg">
                            Your trial period ends in 5 days. please upgrade your account to continue using all features.
                        </p>
                    </Card>
                </Container>
            </div>


        </section>
    )
}

export default ChildrenProps