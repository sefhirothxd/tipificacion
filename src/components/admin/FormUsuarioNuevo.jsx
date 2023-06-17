import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const FormUsuarioNuevo = ({ cerrarModal, agregarUsuario, listRol }) => {
	const { register, handleSubmit } = useForm();

	// const [list, setList] = useState();

	const onSubmit = (data) => {
		console.log(data);
		const usuario = {
			userName: data.userName,
			person: {
				name: data.name,
				lastName: data.lastName,
				email: data.email,
				telephone: data.telephone,
				numDoc: data.numDoc,
				direction: data.direction,
			},
			rol: {
				rol_id: parseInt(data.rol),
			},
			seguridad: {
				password: data.password,
			},
		};
		console.log('objeto creado ', usuario);
		agregarUsuario(usuario);
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
					{/* <p className="text-red-500 text-xs italic">
						Todos los datos debe de ser ingresados.
					</p> */}
				</div>
				<div className="w-full  px-3  mb-2">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="grid-last-name"
					>
						Usuario
					</label>
					<input
						{...register('userName', {
							required: true,
							pattern: /[^0-9]/,
						})}
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-last-name"
						type="text"
						placeholder="Doe"
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
				<div className="w-1/2  px-3">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="grid-last-name"
					>
						Rol
					</label>
					<select
						{...register('rol')}
						className="appearance-none block w-full mb-3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					>
						{listRol &&
							listRol.map((item) => {
								return (
									<option key={item.rol_id} value={item.rol_id}>
										{item.name}
									</option>
								);
							})}
					</select>
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
				<div className="w-1/2 px-3">
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
						placeholder="av. pablo 351"
					/>
				</div>
				<div className="w-full px-3">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="grid-password"
					>
						Password
					</label>
					<input
						{...register('password')}
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-password"
						type="password"
						placeholder="******************"
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
