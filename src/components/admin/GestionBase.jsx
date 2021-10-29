import React, { useState, forwardRef } from 'react';
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
import XLSX from 'xlsx';
const EXTENSIONS = ['xlsx', 'xls', 'csv'];
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
const GestionBase = () => {
	const [colDefs, setColDefs] = useState();
	const [data, setData] = useState();

	const getExention = (file) => {
		const parts = file.name.split('.');
		const extension = parts[parts.length - 1];
		return EXTENSIONS.includes(extension);
	};

	const convertToJson = (headers, data) => {
		const rows = [];
		data.forEach((row) => {
			let rowData = {};
			row.forEach((element, index) => {
				rowData[headers[index]] = element;
			});
			rows.push(rowData);
		});
		return rows;
	};

	const importExcel = (e) => {
		const file = e.target.files[0];

		const reader = new FileReader();
		reader.onload = (event) => {
			const bstr = event.target.result;
			const workBook = XLSX.read(bstr, { type: 'binary' });

			const workSheetName = workBook.SheetNames[0];
			const workSheet = workBook.Sheets[workSheetName];

			const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });

			const headers = fileData[0];
			const heads = headers.map((head) => ({ title: head, field: head }));
			setColDefs(heads);

			fileData.splice(0, 1);

			setData(convertToJson(headers, fileData));
		};

		if (file) {
			if (getExention(file)) {
				reader.readAsBinaryString(file);
			} else {
				alert('Invalid file input, Select Excel, CSV file');
			}
		} else {
			setData([]);
			setColDefs([]);
		}
	};

	return (
		<div>
			<h1>GestionBase</h1>
			<div>
				<input type="file" onChange={importExcel} />
				<MaterialTable
					title="Importar EXcel"
					data={data}
					columns={colDefs}
					icons={tableIcons}
				/>
			</div>
		</div>
	);
};

export default GestionBase;
