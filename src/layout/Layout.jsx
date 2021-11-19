import React, { useState } from 'react';
import Header from '../components/Header';

const Layout = (props) => {
	return (
		<>
			<Header />
			<div className="max-w-screen-xl mx-auto">{props.children}</div>
		</>
	);
};

export default Layout;
