import './App.css';
import Fruit from './Fruit'

const data = [
  {id: 1, img: 'https://5.imimg.com/data5/NL/FU/MY-48841722/apple-fruit-500x500.jpeg', title: 'Apple', uom: '02', size: '02', unit: '$8.99', total: '$17.89'},
  {id: 2, img: 'https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-apricot.jpg', title: 'Apricot', uom: '02', size: '02', unit: '$8.99', total: '$17.89'},
  {id: 3, img: 'https://www.thedailymeal.com/img/gallery/13-delicious-things-you-can-make-with-bananas/intro-1673458653.jpg', title: 'Banana', uom: '02', size: '02', unit: '$8.99', total: '$17.89'},
  {id: 4, img: 'https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg', title: 'Kiwi', uom: '02', size: '02', unit: '$8.99', total: '$17.89'},
  {id: 5, img: 'https://hips.hearstapps.com/hmg-prod/images/766/pomegranates-main-1515525122.jpg?crop=0.636xw:1.00xh;0.181xw,0&resize=1200:*', title: 'Pomogrenate', uom: '02', size: '02', unit: '$8.99', total: '$17.89'},
  {id: 6, img: 'https://vimafoods.com/wp-content/uploads/2020/05/fresas-frescas.jpg', title: 'Strawbarry', uom: '02', size: '02', unit: '$8.99', total: '$17.89'},
  {id: 7, img: 'https://w7.pngwing.com/pngs/9/79/png-transparent-pineapple-fruit-pineapple-pineapple-fruit-pineapple-clipart-thumbnail.png', title: 'Pineapple', uom: '02', size: '02', unit: '$8.99', total: '$17.89'},
  {id: 8, img: 'https://www.greendna.in/cdn/shop/products/cucumberslice3_760x.jpg?v=1596718910', title: 'Cucumber', uom: '02', size: '02', unit: '$8.99', total: '$17.89'}
]

function App() {
  return (
    <div className="container">
      {
        data.map((value, index) =>{
          return (
              <div><Fruit d = {value} /></div>
          )
        })
      }
    </div>
  );
}

export default App;
