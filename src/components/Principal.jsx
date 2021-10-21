import React from 'react';
import Header from '../components/Header';

const principal = () => {
	return (
		<div className="bg-gray-100 w-full min-h-screen">
			<Header />
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
							<option value="1">Contesta</option>
							<option value="2">No contesta</option>
						</select>
					</div>
				</form>
			</div>
		</div>
	);
};

export default principal;
