import React, { useState, forwardRef, useEffect } from 'react';
import Modal from '../Modal';
import axios from 'axios';
import FormClienteReg from './FormClienteNuevo';
import MaterialTable from 'material-table';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import ExportExcel from 'react-export-excel';
//icon
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { assertAnyTypeAnnotation } from '@babel/types';

const tableIcons = {
	Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
	Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
	Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
	DetailPanel: forwardRef((props, ref) => (
		<ChevronRight {...props} ref={ref} />
	)),
	Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
	Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
	Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
	FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
	LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
	NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
	PreviousPage: forwardRef((props, ref) => (
		<ChevronLeft {...props} ref={ref} />
	)),
	ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
	SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
	ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
	ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};
const Reporte = () => {
	const [username, setUsername] = useState('Pedro Castillo');
	const [usuarios, setUsuarios] = useState([]);
	const [fecha1, setFecha1] = useState();
	const [fecha2, setFecha2] = useState();
	const [excel, setExcel] = useState();

	const ExcelFile = ExportExcel.ExcelFile;
	const ExcelSheet = ExportExcel.ExcelSheet;
	const ExcelColumn = ExportExcel.ExcelColumn;

	const filtrarFecha = () => {
		console.log(fecha1);
		console.log(fecha2);
		const fecha = usuarios.filter(
			(item) => item.cliente_id.fecha_registro !== fecha1
		);
		console.log(fecha);
	};
	const exportExcel = (data) => {
		let arrayCliente = [];
		data.map((item) => {
			arrayCliente.push({
				nombre: item.cliente.person.name,
				apellido: item.cliente.person.lastName,
				dni: item.cliente.person.numDoc,
				direccion: item.cliente.person.direction,
				telefono: item.cliente.person.telephone,
				fecha: item.cliente.fecha_registro,
				descripcion: item.description,
				// estado: item.typing_id.titulo,
				usuario: username,
			});
		});
		console.log('export :', arrayCliente);
		setExcel(arrayCliente);
	};

	useEffect(() => {
		const probando = async () => {
			await axios
				.get('https://control-backend-production.up.railway.app/call/list')
				.then((res) => {
					console.log('clientes: ', res.data);
					setUsuarios(res.data);
					exportExcel(res.data);
				});
		};
		probando();
	}, []);

	return (
		<div className="mx-2 md:mx-8 mt-4 ">
			<div className="flex justify-between sm:justify-between items-start flex-col sm:flex-row">
				<h1 className="text-2xl md:text-4xl text-naranjaEntel font-barlow font-semibold mb-8">
					Reporte
				</h1>
			</div>
			<div>
				<input
					type="date"
					onChange={(e) => setFecha1({ fecha: e.target.value })}
				/>
				<input
					type="date"
					onChange={(e) => setFecha2({ fecha: e.target.value })}
				/>
				<MaterialTable
					title=""
					data={usuarios}
					columns={[
						{ title: 'Nombre', field: 'cliente.person.name' },
						{ title: 'Apellido', field: 'cliente.person.lastName' },
						{ title: 'DNI', field: 'cliente.person.numDoc' },
						{ title: 'Telefono', field: 'cliente.person.telephone' },
						{ title: 'Correo', field: 'cliente.person.email' },
						{ title: 'Fecha Registro', field: 'cliente.fecha_registro' },
						{ title: 'Descripcion', field: 'description' },
						// { title: 'Estado', field: 'typing_id.titulo' },
					]}
					icons={tableIcons}
					actions={[
						(rowData) => ({
							icon: DeleteOutline,
							tooltip: 'Dar de baja',
							onClick: () => filtrarFecha(),
						}),
					]}
					options={{
						actionsColumnIndex: -1,
						exportButton: true,
					}}
					localization={{
						pagination: {
							labelRowsSelect: 'Siguiente',
							labelDisplayedRows: '{count} de {from}-{to}',
							firstTooltip: 'Primera página',
							previousTooltip: 'Página anterior',
							nextTooltip: 'Próxima página',
							lastTooltip: 'Última página',
						},
					}}
				/>
				<ExcelFile
					element={
						<button className="bg-naranjaEntel py-1  px-2 text-center text-base font-bold rounded  text-white mb-4 md:my-8 font-barlow outline-none focus:outline-none">
							Exportar
						</button>
					}
					filename="Reporte"
				>
					<ExcelSheet data={excel} name="Leaves">
						<ExcelColumn label="nombre" value="nombre" />
						<ExcelColumn label="apellido" value="apellido" />
						<ExcelColumn label="dni" value="dni" />
						<ExcelColumn label="direccion" value="direccion" />
						<ExcelColumn label="telefono" value="telefono" />
						<ExcelColumn label="fecha" value="fecha" />
						<ExcelColumn label="descripcion" value="descripcion" />
						<ExcelColumn label="estado" value="estado" />
						<ExcelColumn label="usuario" value="usuario" />
					</ExcelSheet>
				</ExcelFile>
			</div>
		</div>
	);
};

export default Reporte;
