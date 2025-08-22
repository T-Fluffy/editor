import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between bg-black px-4 py-2 border-b">
      <h2 className="text-xl font-semibold text-white" onClick={() => navigate('/')}>EDITOR</h2>
    </header>
  );
};

export default NavbarComponent;