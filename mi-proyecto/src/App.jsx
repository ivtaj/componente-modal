import React, { useState } from 'react';
import Modal from './components/modal/modal';

const App = () => {
  const [openModal, setOpenModal] = useState(null); // 'simple', 'form', 'image' o null

  const closeModal = () => setOpenModal(null);

  return (
    <div className="p-8">
      <div className="space-x-4 mb-8">
        <button
          onClick={() => setOpenModal('simple')}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Modal Simple
        </button>
        <button
          onClick={() => setOpenModal('form')}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Modal con Formulario
        </button>
        <button
          onClick={() => setOpenModal('image')}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Modal con Imagen
        </button>
      </div>

      {/* Modal Simple */}
      <Modal isOpen={openModal === 'simple'} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">Título del Modal Simple</h2>
        <p className="mb-4">Este es un modal simple que muestra un párrafo de texto.</p>
        <button
          onClick={closeModal}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Aceptar
        </button>
      </Modal>

      {/* Modal con Formulario */}
      <Modal isOpen={openModal === 'form'} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">Modal con Formulario</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Nombre:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email:</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Enviar
          </button>
        </form>
      </Modal>

      {/* Modal con Imagen */}
      <Modal isOpen={openModal === 'image'} onClose={closeModal}>
        <img
          src="https://via.placeholder.com/300"
          alt="Placeholder"
          className="w-full rounded mb-4"
        />
        <p className="text-center text-gray-700">Pie de foto descriptivo</p>
      </Modal>
    </div>
  );
};

export default App;
