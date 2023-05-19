import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const layout = ({children}) => {
    return ( 
        <>
          <Header />
            <main className="container max-w-xl bg-white rounded-lg text-slate-800 p-3 my-20">
              {children}
              </main>
          <Footer />
        </>
     );
}
 
export default layout;
