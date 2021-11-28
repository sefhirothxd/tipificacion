import React from 'react';

const Modal = ({ cerrarModal, children }) => {
	return (
		<div className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-60 z-50">
			<div className="bg-white rounded-lg w-80 ">
				<div className="flex flex-col items-start p-4">
					<div className="flex items-center w-full">
						{/* <h2 className="text-gray-900 font-medium text-lg"></h2> */}
						<svg
							onClick={cerrarModal}
							className="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 18 18"
						>
							<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
						</svg>
					</div>
					<hr className="mb-3" />
					<div className="">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
