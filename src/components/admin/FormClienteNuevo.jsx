import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const FormUsuarioNuevo = ({ cerrarModal, agregarCliente, listRol }) => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		const cliente = {
			fecha_registro: '10-10-2021',
			person: {
				name: data.name,
				lastName: data.lastName,
				numDoc: data.numDoc,
				direction: data.direction,
				telephone: data.telephone,
				email: data.email,
			},
		};
		console.log('objeto creado ', cliente);
		agregarCliente(cliente);
		cerrarModal();
	};

	return (
		<form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-wrap -mx-3 ">
				<div className="w-1/2 px-3 mb-0 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="grid-first-name"
					>
						Nombres
					</label>
					<input
						{...register('name', {
							required: true,
							pattern: /[^0-9]/,
						})}
						className="appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-azulEntel focus:border-4 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="Jane"
					/>
					{/* <p className="text-red-500 text-xs italic">
						Todos los datos debe de ser ingresados.
					</p> */}
				</div>
				<div className="w-1/2 px-3 mb-0 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="grid-first-name"
					>
						Apellidos
					</label>
					<input
						{...register('lastName', {
							required: true,
							pattern: /[^0-9]/,
						})}
						className="appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-azulEntel focus:border-4 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="Rosales"
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-1/2 px-3">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="grid-password"
					>
						DNI
					</label>

					<input
						{...register('numDoc', {
							required: true,
							pattern: /^[0-9]{8}$/,
						})}
						minLength="7"
						maxLength="9"
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-telefono"
						type="tel"
						placeholder="08888880"
					/>
				</div>
				<div className="w-1/2 px-3">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="grid-password"
					>
						Telefono
					</label>

					<input
						{...register('telephone', {
							required: true,
							pattern: /^[0-9]{9}$/,
						})}
						minLength="7"
						maxLength="9"
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-telefono"
						type="tel"
						placeholder="555-555-555"
					/>
				</div>
				<div className="w-full px-3">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="grid-correo"
					>
						Correo
					</label>
					<input
						{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-correo"
						type="email"
						placeholder="juan@gmail.com"
					/>
				</div>
				<div className="w-full px-3">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="grid-correo"
					>
						Direccion
					</label>
					<input
						{...register('direction', {
							required: true,
							pattern: /[^0-9]/,
						})}
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-correo"
						type="text"
						placeholder="av. san pablo 351"
					/>
				</div>
				<hr />
				<div className="ml-auto mr-4">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3">
						Agregar
					</button>
					<button
						onClick={cerrarModal}
						className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
					>
						Cancelar
					</button>
				</div>
			</div>
		</form>
	);
};

export default FormUsuarioNuevo;
