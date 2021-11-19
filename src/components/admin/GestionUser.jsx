import React, { useState, forwardRef, useEffect } from 'react';
import Modal from '../Modal';
import axios from 'axios';
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
	const [usuarios, setUsuarios] = useState([]);
	const [editUser, setEditUser] = useState({});
	const [listRol, setListRol] = useState();
	const [activo, setactivo] = useState(false);
	const [edit, setEdit] = useState(false);

	const agregarUsuario = async (data) => {
		console.log(data);
		const res = await axios.post(
			'http://typing-control.herokuapp.com/user/save-user',
			data
		);
		console.log(res);
		axios.get('http://typing-control.herokuapp.com/user/list').then((res) => {
			setUsuarios(res.data);
			console.log(res.data);
		});
	};

	const borrarUsuarios = (data) => {
		console.log(data);
		setUsuarios(usuarios.filter((usuario) => usuario.userName !== data));
	};
	const editarUsuario = (data) => {
		setEditUser(data);
		console.log(editUser);
	};

	const cerrarModal = () => {
		setactivo(false);
	};

	useEffect(() => {
		axios.get('http://typing-control.herokuapp.com/user/list').then((res) => {
			setUsuarios(res.data);
			console.log(res.data);
		});
		axios.get('https://typing-control.herokuapp.com/rol/list').then((res) => {
			console.log(res.data);
			setListRol(res.data.list);
		});
	}, []);

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
					{edit ? (
						<FormRegister
							cerrarModal={cerrarModal}
							editarUsuario={editarUsuario}
							editUser={editUser}
						/>
					) : (
						<FormRegister
							cerrarModal={cerrarModal}
							agregarUsuario={agregarUsuario}
							listRol={listRol}
						/>
					)}
				</Modal>
			) : null}
			<div>
				<MaterialTable
					title=""
					data={usuarios}
					columns={[
						{ title: 'Nombre', field: 'person.name' },
						{ title: 'Apellido', field: 'person.lastName' },
						{ title: 'DNI', field: 'person.numDoc' },
						{ title: 'Rol', field: 'rol.name' },
						{ title: 'Usuario', field: 'userName' },
						{ title: 'Correo', field: 'person.email' },
					]}
					icons={tableIcons}
					actions={[
						(rowData) => ({
							icon: Edit,
							tooltip: 'Editar Usuario',
							onClick: () => editarUsuario(rowData),
						}),

						(rowData) => ({
							icon: DeleteOutline,
							tooltip: 'Dar de baja',
							onClick: () => borrarUsuarios(rowData.userName),
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
