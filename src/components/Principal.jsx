import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import user from '../asset/img/user.png';
import call from '../asset/icon/call.svg';
import callOut from '../asset/icon/callOut.svg';
import callPlus from '../asset/icon/callPlus.svg';
import mute from '../asset/icon/mute.svg';
import dial from '../asset/icon/dial.svg';
import pause from '../asset/icon/pause.svg';
import sonido from '../asset/mp3/audioChile.mp3';

const Principal = () => {
	const [lista, setLista] = useState();
	const [num, setNum] = useState(0);
	const [cliente, setCliente] = useState();
	const [estado, setEstado] = useState(false);
	const { register, handleSubmit, reset } = useForm();
	const [seconds, setSeconds] = useState(0);

	const siguienteCliente = (e) => {
		// e.preventDefault();
		console.log(e);
		// console.table(cliente);
		let tipi = {
			typing_id: {
				nivel_id: parseInt(e.typing_id),
			},
			cliente_id: {
				id_cliente: parseInt(cliente[num].id_cliente),
			},
			description: e.descripcion,
		};

		console.log('tipificacion', tipi);
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
			axios
				.post(
					'https://control-backend-production.up.railway.app/call/save',
					tipi
				)
				.then((response) => {
					console.log(response.data);
				});
			setNum(num + 1);
			Toastify({
				text: 'Se registro la informacion',
				duration: 5000,
				destination: '',
				newWindow: true,
				close: true,
				gravity: 'top', // `top` or `bottom`
				position: 'right', // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					background: 'green',
				},
				onClick: function () {}, // Callback after click
			}).showToast();
		}
		console.log('acumulador: ', num + 1);
		console.log('tamaño Array: ', cliente.length - 1);
		reset();
		playSound();
		setSeconds(0);
	};
	const playSound = () => {
		const audio = new Audio(sonido);
		audio.play();
	  };

	useEffect(() => {
		playSound();
	  }, []);

	useEffect(() => {
		const timerID = setInterval(() => {
			setSeconds((prevSeconds) => prevSeconds + 1);
		}, 1000);

		return () => {
			clearInterval(timerID);
		};
	}, []);
	const formatTime = (time) => {
		const hours = Math.floor(time / 3600);
		const minutes = Math.floor((time % 3600) / 60);
		const seconds = time % 60;

		const formattedHours = String(hours).padStart(2, '0');
		const formattedMinutes = String(minutes).padStart(2, '0');
		const formattedSeconds = String(seconds).padStart(2, '0');

		return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
	};
	useEffect(() => {
		axios
			.get('https://control-backend-production.up.railway.app/customer/list')
			.then((response) => {
				console.log(response.data);
				setCliente(response.data);
			});
		axios
			.get('https://control-backend-production.up.railway.app/nivel/list')
			.then((response) => {
				console.log('combo: ', response.data.list);
				setLista(response.data.list);
			});
	}, []);

	return (
		<div className="bg-gray-100 p-2 w-full content-container flex justify-center items-start">
			<div className="flex justify-between items-center w-full flex-wrap lg:flex-nowrap">
				<div className='mr-0 md:mr-5 px-3 py-5 bg-white rounded-lg shadow-lg mt-8 w-full lg:w-1/2'>
				<h1 className="text-2xl md:text-4xl text-naranjaEntel text-center font-barlow font-semibold mb-8">
						Tipificacion de llamadas
					</h1>
					<div>
						<div className="mb-10 ">
							<div className="rounded-full bg-black w-40 h-40 border-2 relative  border-black mx-auto overflow-hidden">
								<img className="absolute top-3" src={user} alt="" srcset="" />
							</div>
							<div className="gap-2 bg-gray-200 w-64 h-12 mx-auto mt-5 flex justify-between">
								{/* //button for icons */}
								<button className="bg-gray-200 hover:bg-gray-400 p-2">
									<img className="w-8" src={call} alt="call" />
								</button>
								<button className="bg-gray-200 hover:bg-gray-400 p-2">
									<img className="w-8" src={pause} alt="call pause" />
								</button>
								<button className="bg-gray-200 hover:bg-gray-400 p-2">
									<img className="w-8" src={mute} alt="mute" />
								</button>
								<button className="bg-gray-200 hover:bg-gray-400 p-2">
									<img className="w-8" src={callOut} alt="call out" />
								</button>

								<button className="bg-gray-200 hover:bg-gray-400 p-2">
									<img className="w-8" src={dial} alt="dial" />
								</button>
								<button className="bg-gray-200 hover:bg-gray-400 p-2">
									<img className="w-8" src={callPlus} alt="call plus" />
								</button>
							</div>
						</div>
						<div className="flex justify-between items-center">
							<h1>Tiempo de llamada:</h1>
							<div className="flex justify-between items-center gap-2">
								<p>{formatTime(seconds)}</p>
							</div>
						</div>
					</div>
					<div>
						<div className="flex justify-between items-center">
							<h1>Estado de la llamada:</h1>
							<div className="flex justify-between items-center gap-2">
								<p>En llamada</p>
								<p className="rounded-md bg-red-400 w-3 h-3 "></p>
							</div>
						</div>
					</div>
				</div>
				<form
					className=" sm:px-9 py-3 px-3 rounded-lg shadow-lg font-barlow flex flex-col justify-between flex-wrap  w-1200 mt-8 bg-white"
					onSubmit={handleSubmit(siguienteCliente)}
				>
				
					<div className="flex justify-between w-full mb-5 items-center">
						<div className="">
							<h1>Informacion del cliente</h1>
							<p>Nombre: {cliente && cliente[num]?.person.name}</p>
							<p>Apellido: {cliente && cliente[num]?.person.lastName}</p>
							<p>Rut: {cliente && cliente[num]?.person.numDoc}</p>
							<p>Telefono: {cliente && cliente[num]?.person.telephone}</p>
							<p>Correo: {cliente && cliente[num]?.person.email}</p>
						</div>
						<div className="flex flex-col mt-10 sm:mt-0">
							<select name="select" className="w-30" id="">
								{lista ? (
									lista.map((item, index) => {
										return (
											item.nivel === 1 && (
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
							<select name="select" className="w-30 mt-3" id="">
								{lista ? (
									lista.map((item, index) => {
										return (
											item.nivel === 2 && (
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
							<select name="select" className="w-30 mt-3" id="">
								{lista ? (
									lista.map((item, index) => {
										return (
											item.nivel === 3 && (
												<option
													{...register('typing_id', {})}
													key={index}
													value={item.nivel_id}
												>
													{item.titulo}
												</option>
											)
										);
									})
								) : (
									<option value="0">No hay data</option>
								)}
							</select>
						</div>
					</div>
					<textarea
						{...register('descripcion', {})}
						className="border-black border-2 w-full h-40 p-2"
					/>
					<div className="w-full flex justify-end">
						<button
							className="bg-naranjaEntel py-2  top-500 px-4
								text-center text-2xl font-bold rounded text-white  mt-8
								font-barlow outline-none focus:outline-none"
							// onClick={(e) => siguienteCliente(e)}
						>
							Guardar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Principal;
