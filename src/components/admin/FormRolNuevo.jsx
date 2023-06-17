import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const FormUsuarioNuevo = ({ cerrarModal, agregarRol, listRol }) => {
	const { register, handleSubmit } = useForm();

	// const [list, setList] = useState();

	const onSubmit = (data) => {
		console.log(data);
		const rol = {
			name: data.name,
			descripcion: data.descripcion,
			state: data.state == 'true' ? true : false,
		};
		console.log('objeto rol ', rol);
		agregarRol(rol);
		cerrarModal();
	};

	// useEffect(() => {
	// 	axios.get('https://control-backend-production.up.railway.app/rol/list').then((res) => {
	// 		console.log(res.data);
	// 		setListRol(res.data.list);
	// 	});
	// }, []);

	return (
		<form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-wrap -mx-3 ">
				<div className="w-full px-3 mb-0 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="grid-first-name"
					>
						Nombre del Rol
					</label>
					<input
						{...register('name', {
							required: true,
							pattern: /[^0-9]/,
						})}
						className="appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-azulEntel focus:border-4 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="Administrador"
					/>
					{/* <p className="text-red-500 text-xs italic">
						Todos los datos debe de ser ingresados.
					</p> */}
				</div>
				<div className="w-full  px-3  mb-2">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="grid-last-name"
					>
						Descripcion
					</label>
					<input
						{...register('descripcion', {
							required: true,
							pattern: /[^0-9]/,
						})}
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-last-name"
						type="text"
						placeholder="Agregar base"
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full px-3">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="grid-password"
					>
						Estado
					</label>

					<select
						{...register('state')}
						className="appearance-none block w-full mb-3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					>
						<option value="true">Activo</option>
						<option value="false">Inactivo</option>
					</select>
				</div>
				<hr />
				<div className="ml-auto mr-4 mt-4">
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
