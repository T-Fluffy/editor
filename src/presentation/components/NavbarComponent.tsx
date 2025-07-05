const NavbarComponent = () => {
  return (
    <header className="flex items-center justify-between bg-black px-4 py-2 border-b">
      <h2 className="text-xl font-semibold text-white">My Document</h2>
      <div className="flex space-x-2">
        <button
          style={{ backgroundColor: 'pink' }}
          className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Share
        </button>
        <button
          style={{ backgroundColor: 'pink' }}
          className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Save
        </button>
      </div>
    </header>
  );
};

export default NavbarComponent;