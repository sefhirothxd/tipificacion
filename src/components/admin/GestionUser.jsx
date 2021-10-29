import React, { useState } from 'react';
import Modal from '../Modal';
import FormRegister from './FormUsuarioNuevo';
const GestionUser = () => {
	const [usuarios, setUsuarios] = useState([
		{
			name: 'Bryan Vera',
			username: 'bvera',
			email: 'bryan@gmail.com',
			phone: '555-555-5555',
		},
		{
			name: 'Cristina Ruiz',
			username: 'cruiz',
			email: 'cristina@gmail.com',
			phone: '555-555-5555',
		},
		{
			name: 'Carlos Gonzales',
			username: 'cgonzales',
			email: 'carlos@gmail.com',
			phone: '555-555-5555',
		},
		{
			name: 'Juan Tello',
			username: 'jtello',
			email: 'Juan@gmail.com',
			phone: '555-555-5555',
		},
	]);

	const [activo, setactivo] = useState(false);

	const agregarUsuario = (data) => {
		console.log(data);
		setUsuarios([...usuarios, data]);
	};

	const borrarUsuarios = (data) => {
		console.log(data);
		setUsuarios(usuarios.filter((usuario) => usuario.username !== data));
	};

	const cerrarModal = () => {
		setactivo(false);
	};

	return (
		<div className="mx-8 mt-4">
			<div className="flex  justify-between items-center flex-wrap">
				<h1 className="text-4xl text-naranjaEntel font-barlow font-semibold mb-8">
					Lista de usuarios
				</h1>
				<button
					onClick={() => setactivo(true)}
					className="bg-naranjaEntel py-1  px-2 text-center text-base font-bold rounded  text-white mt-8 font-barlow outline-none focus:outline-none"
				>
					Nuevo Usuario
				</button>
			</div>
			{activo ? (
				<Modal cerrarModal={cerrarModal}>
					<FormRegister
						cerrarModal={cerrarModal}
						agregarUsuario={agregarUsuario}
					/>
				</Modal>
			) : null}
			<div>
				<table className="min-w-full border-collapse block md:table font-barlow">
					<thead className="block md:table-header-group">
						<tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
							<th className="bg-azulEntel p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
								Name
							</th>
							<th className="bg-azulEntel p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
								User Name
							</th>
							<th className="bg-azulEntel p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
								Email Address
							</th>
							<th className="bg-azulEntel p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
								Mobile
							</th>
							<th className="bg-azulEntel p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="block md:table-row-group">
						{usuarios.map((user, index) => {
							return (
								<tr
									key={index}
									className="bg-gray-100 border border-grey-500 md:border-none block md:table-row"
								>
									<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
										<span className="inline-block w-1/3 md:hidden font-bold">
											Name
										</span>
										{user.name}
									</td>
									<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
										<span className="inline-block w-1/3 md:hidden font-bold">
											User Name
										</span>
										{user.username}
									</td>
									<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
										<span className="inline-block w-1/3 md:hidden font-bold">
											Email Address
										</span>
										{user.email}
									</td>
									<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
										<span className="inline-block w-1/3 md:hidden font-bold">
											Mobile
										</span>
										{user.phone}
									</td>
									<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
										<span className="inline-block w-1/3 md:hidden font-bold">
											Actions
										</span>
										<button className="bg-azulEntel hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded mr-2">
											Edit
										</button>
										<button
											onClick={() => borrarUsuarios(user.username)}
											className="bg-naranjaEntel hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
										>
											Eliminar
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default GestionUser;
