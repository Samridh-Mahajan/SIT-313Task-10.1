
import './App.css';
import EmailBanner from './Component/EmailBanner'
import NavigationBar from './Component/Navigationbar'
import Card from './Component/Card'
import FooterBanner from './Component/FooterBanner'
import CardList from './Component/Cardlist'

function App() {
  const imageUrls = [
    'https://webneel.com/wallpaper/sites/default/files/images/07-2013/5%20lamborghini%20gallardo%20car%20wallpaper.jpg',
    'https://wallpaperaccess.com/full/297903.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAT0a2ZHLTsg3AkzPrmFZ8JlZR1nZif0N0g&usqp=CAU'
  ];
  const titles = ['Article 1', 'Article 2', 'Article 3'];
  const descriptions = [
    'Description for Article 1.',
    'Description for Article 2.',
    'Description for Article 3.'
  ];
  const authors = ['Author 1', 'Author 2', 'Author 3'];
  const ratings = [4.5, 3.8, 5.0];

  const imageUrl = [
    'https://webneel.com/wallpaper/sites/default/files/images/07-2013/5%20lamborghini%20gallardo%20car%20wallpaper.jpg',
    'https://wallpaperaccess.com/full/297903.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAT0a2ZHLTsg3AkzPrmFZ8JlZR1nZif0N0g&usqp=CAU'
  ];
  const title = ['Article 1', 'Article 2', 'Article 3'];
  const description = [
    'Description for Article 1.',
    'Description for Article 2.',
    'Description for Article 3.'
  ];
  const author = ['Author 1', 'Author 2', 'Author 3'];
  const rating = [4.5, 3.8, 5.0];
  return (
    <div className="App">
      <NavigationBar/>
   
      <EmailBanner/>
      <FooterBanner/>
      </div>
  );
}

export default App;
