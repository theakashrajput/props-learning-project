import { useState } from "react";


const ProfileCard = ({ user, theme, actions }) => {
  const { name, email, avatar, role, status, stats } = user;

  return (
    <div className={`${theme.backgroundColor} ${theme.textColor} rounded-xl shadow-md py-4 px-6`}>
      <div className="flex gap-3 items-start border-b border-zinc-300 pb-5">
        <div
          className={`${theme.avatarBg} rounded-full w-16 aspect-square flex items-center justify-center text-xl`}
          aria-hidden="true"
        >
          {avatar}
        </div>
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm opacity-80">{email}</p>
          <div className="flex items-center gap-3 mt-3">
            {[role, status].map((text) => (
              <span key={text} className={`${theme.badgeBg} px-4 rounded-full py-1 text-sm font-medium`}>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-3">
        {stats && (
          <div className="grid grid-cols-3 gap-3 border-b border-zinc-200 pb-4">
            {Object.entries(stats).map(([key, value]) => (
              <div className="text-center" key={key}>
                <div className="text-lg font-bold leading-tight">{value}</div>
                <div className="text-xs uppercase tracking-wider opacity-70">{key}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {actions && Object.entries(actions).map(([key, action]) => (
            <button
              key={key}
              type="button"
              onClick={action.onClick}
              className={`${action.className} w-full py-2 text-sm font-bold rounded-lg transition-all active:scale-95 cursor-pointer`}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};


const ComplexProps = () => {
  const [message, setMessage] = useState("")

  const users = [
    {
      user: {
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "👩‍💼",
        role: "Admin",
        status: "Active",
        stats: {
          posts: 145,
          followers: 2834,
          following: 421,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-300",
        badgeBg: "bg-purple-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Alice's profile"),
          className: "bg-purple-500 text-white hover:bg-purple-600",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message to Alice"),
          className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        }
      },
    },
    {
      user: {
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "👨‍💻",
        role: "Developer",
        status: "Online",
        stats: {
          projects: 28,
          commits: 1523,
          reviews: 89,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-green-100 to-teal-100",
        textColor: "text-gray-800",
        avatarBg: "bg-green-300",
        badgeBg: "bg-green-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Bob's profile"),
          className: "bg-green-500 text-white hover:bg-green-600",
        },
        secondary: {
          label: "Collaborate",
          onClick: () => setMessage("Starting collaboration with Bob"),
          className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        },
      },
    },
  ];


  return (
    <section id="children" className='bg-white text-black rounded-xl shadow-lg py-6 px-8'>
      <h2 className='text-3xl font-bold mb-3 text-gray-800'>
        Complex/Nested Props
      </h2>
      <p className='text-gray-600'>
        Complex props allow you to pass nested objects and functions, enabling sophisticated component and interactions.
      </p>

      {message && (
        <div className="my-6 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-800 rounded">
          {message}
        </div>
      )}

      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-5">
          User Profile Cards (Nested User, Theme, and Actions):
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {users.map((userData, idx) =>
            <ProfileCard
              key={idx} {...userData} />
          )}
        </div>
      </div>
    </section>
  )
}

export default ComplexProps