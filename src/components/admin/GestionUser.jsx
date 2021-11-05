import React, { useState, forwardRef } from 'react';
import Modal from '../Modal';
import FormRegister from './FormUsuarioNuevo';
import MaterialTable from 'material-table';
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
const GestionUser = () => {
	const [usuarios, setUsuarios] = useState([
		{
			name: 'Bryan',
			lastname: 'Vera',
			dni: '11111111',
			username: 'bvera',
			email: 'bryan@gmail.com',
			phone: '555-555-5555',
		},
		{
			name: 'Cristina',
			lastname: 'Ruiz',
			dni: '22222222',
			username: 'cruiz',
			email: 'cristina@gmail.com',
			phone: '555-555-5555',
		},
		{
			name: 'Carlos',
			lastname: 'Gonzales',
			dni: '33333333',
			username: 'cgonzales',
			email: 'carlos@gmail.com',
			phone: '555-555-5555',
		},
		{
			name: 'Juan ',
			lastname: 'Tello',
			dni: '44444444',
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
		<div className="mx-2 md:mx-8 mt-4 ">
			<div className="flex  justify-between items-center flex-wrap">
				<h1 className="text-2xl md:text-4xl text-naranjaEntel font-barlow font-semibold mb-8">
					Gestion de usuarios
				</h1>
				<button
					onClick={() => setactivo(true)}
					className="bg-naranjaEntel py-1  px-2 text-center text-base font-bold rounded  text-white mb-4 md:my-8 font-barlow outline-none focus:outline-none"
				>
					Crear Usuario
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
				<MaterialTable
					title=""
					data={usuarios}
					columns={[
						{ title: 'Nombre', field: 'name' },
						{ title: 'Apellido', field: 'lastname' },
						{ title: 'DNI', field: 'dni' },
						{ title: 'Usuario', field: 'username' },
						{ title: 'Correo', field: 'email' },
					]}
					icons={tableIcons}
					actions={[
						{
							icon: Edit,
							tooltip: 'Editar Usuario',
						},
						(rowData) => ({
							icon: DeleteOutline,
							tooltip: 'Dar de baja',
							onClick: () => borrarUsuarios(rowData.username),
						}),
					]}
					options={{
						actionsColumnIndex: -1,
					}}
				/>
			</div>
		</div>
	);
};

export default GestionUser;
