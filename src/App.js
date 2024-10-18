import './App.css';
import { NavBarHeader, CarRentalCardCollection, CarDataModelCreateForm } from './ui-components';
import { useState } from 'react';
import { CarDataModel } from './models';

function App() {
	const navBarOverrides = {
		image: {
			src: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
		},
		navItem: {
			color: 'white',
		},
	};

	const [name, setName] = useState('');
	const [rent, setRent] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState('');

	const saveRentalCar = async () => {
		try {
			const newCar = new CarDataModel({
				name: name,
				rent: parseFloat(rent),
				description: description,
				image: image,
			});
			await newCar.save();
			setName('');
			setRent('');
			setDescription('');
			setImage('');
		} catch (error) {
			console.error('Error saving car', error);
		}
	};

	const addCarOverrides = {
		Name: {
			onChange: (e) => setName(e.target.value),
			value: name,
		},
		Rent: {
			onChange: (e) => setRent(e.target.value),
			value: rent,
		},
		Description: {
			onChange: (e) => setDescription(e.target.value),
			value: description,
		},
		imageURL: {
			onChange: (e) => setImage(e.target.value),
			value: image,
		},
		SubmitButton: {
			onClick: saveRentalCar,
		}
	};

	return (
		<div className="App">
			<NavBarHeader overrides={navBarOverrides} width="100%" />
			<header className="App-header" style={{ backgroundColor: 'white' }}>
				<CarDataModelCreateForm />
			</header>
			<header className="App-header">
				<CarRentalCardCollection overrides={addCarOverrides} />
			</header>
		</div>
	);
}

export default App;
