import Header from '../Header/index';
import Footer from '../Footer/index'
import Contact from '../Contact/index'

const Wrapper = ({children}) => {
	return (
<>
<Header />
<div>
	{children}
	</div>
	<Footer />
</>
	);
}


export default Wrapper;