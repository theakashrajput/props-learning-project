import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeProvider, { ThemeContext } from "./Context/ThemeContext";
import ThemeToggler from "./components/ThemeToggler";
import { useContext } from "react";

const Navbar = () => {
  const isDarkTheme = true;

  const section = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "👶🏻" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme", label: "Theme Props", icon: "🎨" }
  ];

  return (
    <nav className={`sticky top-0 z-50 shadow-lg bg-zinc-900 text-white`}>
      <div>
        <div
          className="flex items-center justify-center gap-8 py-6"
        >
          {section.map(ele => (
            <div
              key={ele.id}
              className="bg-blue-400 rounded-md px-4 py-2 cursor-pointer hover:bg-blue-500 active:scale-95 ease-in duration-200"
            >
              <span className="mr-1">{ele.icon}</span>
              {ele.label}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

const AppContent = () => {

  const { isDark } = useContext(ThemeContext);

  return (
    <div className='relative min-h-screen bg-zinc-800 text-white'>
      <Navbar />
      <header className="flex items-center flex-col py-10">
        <h1 className='text-5xl mb-8 font-extrabold tracking-wide'>Props Learning Project</h1>
        <p className="text-lg font-bold mb-3">A comprehensive props learning project in react</p>
        <small className="text-sm font-semibold tracking-wide">Built with NPM + Vite + React + Tailwind CSS</small>
      </header>
      <main className="px-3 py-5 space-y-8">
        <BasicProps />
        <ChildrenProps />
        <ComplexProps />
        <RefProps />
        <ThemeToggler />
      </main>
      <footer
        className={`mt-12 text-center pb-8 transition-colors ${isDark ? "text-gray-400" : "text-gray-200"
          }`}
      >
        <p className="text-sm">
          Made with ❤️ using Bun, Vite, React, and Tailwind CSS
        </p>
      </footer>
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
