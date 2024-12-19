import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Убедитесь, что у вас установлены react-icons

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-1 z-20">
      <button
        className="md:hidden p-2 text-gray-600 hover:text-gray-800"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div className={`absolute top-full left-0 w-[340px]   bg-white shadow-lg ${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <nav className="flex flex-col p-4">
          <Link to="/Contact" className="py-2 border-b">Контакты</Link>
          <Link to="/Assemble" className="py-2 border-b">Собрать набор</Link>
          <Link to="/giftSet" className="py-2 border-b">Популярные наборы</Link>
          <Link to="/garant" className="py-2 border-b">Гарантия свежести</Link>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
