// BackToLoginButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const VolverAlLogin: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between mt-4">
      <button
        className="text-sm text-teal-600 hover:underline"
        onClick={() => navigate("/")}
      >
        Volver al login
      </button>
    </div>
  );
};

export default VolverAlLogin;
