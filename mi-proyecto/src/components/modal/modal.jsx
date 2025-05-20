import React, { useState, useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, children, contentClassName = "" }) => {
  const [show, setShow] = useState(isOpen);
  const [animate, setAnimate] = useState(false);
  const closeButtonRef = useRef(null);

  // Manejo de entrada y salida con animación
  useEffect(() => {
    if (isOpen) {
      setShow(true);
      // Permitir que se monte el componente antes de iniciar la animación
      setTimeout(() => {
        setAnimate(true);
        // Enfocar el botón de cierre para accesibilidad
        closeButtonRef.current?.focus();
      }, 10);

      // Agregar event listener para la tecla ESC
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    } else {
      setAnimate(false);
      // Esperar a que termine la animación antes de desmontar
      setTimeout(() => setShow(false), 300);
    }
  }, [isOpen, onClose]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out ${animate ? 'opacity-100' : 'opacity-0'}`}
    >
      <div
        role="dialog"
        aria-modal="true"
        className={`relative bg-white rounded p-6 w-full max-w-md transition-all duration-300 ease-in-out transform ${animate ? 'scale-100' : 'scale-95'} ${contentClassName}`}
      >
        <button
          ref={closeButtonRef}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;