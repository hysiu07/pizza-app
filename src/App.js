import './App.css';
import MainView from './views/MainView';

function App() {
	const pizzas = [
		{
			name: 'Spicy Chicken',
			price: 18,
			discount: false,
			ingredients:
				'Grillowany kurczak, jalapeño, mozzarella, ziołowy sos pomidorowy',
			img: '../img/spicy-chicken',
		},
		{
			name: 'Pepperoni',
			price: 20,
			discount: false,
			ingredients: 'Pepperoni, kukurydza, mozzarella, sos czosnkowy',
			img: '../img/pepperoni',
		},
		{
			name: 'El Clasico',
			price: 16,
			discount: false,
			ingredients: 'Szynka, pieczarki, ser mozzarella, ziołowy sos pomidorowy',
			img: '../img/el-clasico',
		},
		{
			name: 'Margherita',
			price: 15,
			discount: true,
			ingredients: 'Mozzarella, ziołowy sos pomidorowy',
			img: '../img/margherita',
		},{
      name: 'Kebab',
      price: 22,
      discount: true,
      ingredients: 'Kurczak kebab, czerwona cebula, mozzarella, sos czosnkowy',
      img: '../img/kebab',
    },{
      name: 'Americana',
      price: 25,
      discount: true,
      ingredients: 'Pieczarki, pomidory, ser mozzarella, ziołowy sos pomidorowy',
      img: '../img/americana',
    }
	];

	let pizza = {
		name: 'Americana',
		price: 25,
		discount: true,
		ingredients: 'Pieczarki, pomidory, ser mozzarella, ziołowy sos pomidorowy',
		img: '../img/americana',
	};

	return (
		<div className='App'>
			<MainView pizzas={pizzas}/>
		</div>
	);
}

export default App;
