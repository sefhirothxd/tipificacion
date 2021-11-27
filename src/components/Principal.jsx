import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const Principal = () => {
	const [lista, setLista] = useState();
	const [num, setNum] = useState(0);
	const [cliente, setCliente] = useState();
	const [estado, setEstado] = useState(false);

	const siguienteCliente = (e) => {
		e.preventDefault();
		if (cliente.length - 1 === num) {
			Toastify({
				text: num === cliente.length - 1 && 'No hay mas Clientes',
				duration: 5000,
				destination: '',
				newWindow: true,
				close: true,
				gravity: 'top', // `top` or `bottom`
				position: 'right', // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					background: 'red',
				},
				onClick: function () {}, // Callback after click
			}).showToast();
		} else {
			setNum(num + 1);
		}
		console.log('acumulador: ', num + 1);
		console.log('tamaño Array: ', cliente.length - 1);
	};

	useEffect(() => {
		axios
			.get('https://typing-control.herokuapp.com/customer/list')
			.then((response) => {
				console.log(response.data);
				setCliente(response.data);
			});
		axios
			.get('https://typing-control.herokuapp.com/nivel/list')
			.then((response) => {
				console.log('combo: ', response.data.list);
				setLista(response.data.list);
			});
	}, []);

	return (
		<div className="bg-gray-100 w-full content-container flex justify-center items-start">
			<div className="flex justify-center items-center   w-full">
				{estado ? (
					<form className=" py-9 px-9 rounded-lg shadow-lg font-barlow flex justify-between flex-wrap items-center w-1200 mt-8 bg-white">
						<div className="">
							<h1>Informacion del cliente</h1>
							<p>Nombre: {cliente && cliente[num]?.person.name}</p>
							<p>Apellido: {cliente && cliente[num]?.person.lastname}</p>
							<p>Rut: {cliente && cliente[num]?.person.numDoc}</p>
							<p>Telefono: {cliente && cliente[num]?.person.telephone}</p>
							<p>Correo: {cliente && cliente[num]?.person.email}</p>
						</div>
						<div className="flex flex-col mt-10 sm:mt-0">
							<select name="select" className="w-60" id="">
								{lista ? (
									lista.map((item, index) => {
										return (
											item.nivel == 1 && (
												<option key={index} value={item.titulo}>
													{item.titulo}
												</option>
											)
										);
									})
								) : (
									<option value="0">No hay data</option>
								)}
							</select>
							<select name="select" className="w-60" id="">
								{lista ? (
									lista.map((item, index) => {
										return (
											item.nivel == 2 && (
												<option key={index} value={item.titulo}>
													{item.titulo}
												</option>
											)
										);
									})
								) : (
									<option value="0">No hay data</option>
								)}
							</select>
							<select name="select" className="w-60" id="">
								{lista ? (
									lista.map((item, index) => {
										return (
											item.nivel == 3 && (
												<option key={index} value={item.titulo}>
													{item.titulo}
												</option>
											)
										);
									})
								) : (
									<option value="0">No hay data</option>
								)}
							</select>
							<div>
								<button
									className="bg-naranjaEntel py-2 absolute top-500 px-4
								text-center text-2xl font-bold rounded text-white mb-4 md:my-8
								font-barlow outline-none focus:outline-none"
									onClick={(e) => siguienteCliente(e)}
								>
									Guardar
								</button>
							</div>
						</div>
					</form>
				) : (
					<div className="flex justify-center items-center h-full relative">
						<button
							className="bg-naranjaEntel py-2 absolute top-500 px-4 text-center text-2xl font-bold rounded  text-white mb-4 md:my-8 font-barlow outline-none focus:outline-none"
							onClick={() => setEstado(true)}
						>
							Iniciar
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Principal;
