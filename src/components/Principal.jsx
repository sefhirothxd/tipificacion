import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Principal = () => {
	const [lista, setLista] = useState();

	useEffect(() => {
		axios
			.get('https://typing-control.herokuapp.com/index/typificaciones')
			.then((response) => {
				console.log(response.data);
				setLista(response.data.list);
			});
	}, []);

	return (
		<div className="bg-gray-100 w-full min-h-screen">
			<div className="flex justify-center items-center h-full">
				<form className=" py-9 px-9 rounded-lg shadow-lg font-barlow flex justify-between items-center w-1200 mt-8 bg-white">
					<div className="">
						<h1>Informacion del cliente</h1>
						<p>Nombre: Bryan Vera</p>
						<p>Rut: 45778801</p>
						<p>Telefono: 955448844</p>
						<p>motivo: Plan muy caro</p>
					</div>
					<div>
						<select name="select" id="">
							{lista ? (
								lista.map((item, index) => {
									return (
										<option key={index} value={item.name}>
											{item.name}
										</option>
									);
								})
							) : (
								<option value="0">No hay data</option>
							)}
						</select>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Principal;
