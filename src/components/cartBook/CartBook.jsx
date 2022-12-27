import React from 'react'
import "./style.css"
import Close from '../../assets/imgs/close.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserService from '../../service/UserService';
import bookService from '../../service/bookService';
import Pagination from './pagination';
// function CartBook() {
//     return (
//         <div>CartBook</div>
//     )
// }

// export default CartBook


import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutBook from '../aboutBook/AboutBook';
import DescribeContent from '../content/DescribeContent';
import { updateBook } from '../store/action';
import { useStore } from '../store/hook';
// export const StoreContext = React.createContext(null);

const url = 'https://ebook4u-server.onrender.com/api/book/all'





const deleteFavorite = () => {
    alert("delete");
}

// Start App
class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: {}
        }
    }

    fetchData = async () => {
        UserService.getAllBook().
          then(response => {
            //   console.log((response.data.data.length/8+1).toFixed());
              localStorage.setItem("totalPage", (response.data.data.length/8+1).toFixed());
              localStorage.setItem("totalBook", (response.data.data.length));
              localStorage.setItem("bookPerPage", 8);

          }).catch(err => {
              console.log(err);
          })
        
          bookService.getPage().
          then(response => {
            //   console.log((response.data.data.length/8+1).toFixed());
              this.setState({
                posts: response.data.data
            });

          }).catch(err => {
              console.log(err);
          })
        
        
    }
        componentDidMount(){
            this.fetchData()
        }


    render() {
        return <div>
            {/* <header className="app-header"></header> */}

            <div className="app-card-list" id="app-CardBook-list">
                {
                    Object
                        .keys(this.state.posts)
                        // .map(key => <div>asd</div>)
                        .map(key => <CardBook key={key} index={key} details={this.state.posts[key]} />)
                        
                }
                                        

            </div>
            <Pagination/>
        </div>
    }
}




class Button extends React.Component {
    render() {
        return (
            <button className="button button-primary">
                
            </button>
        )
    }
}


class CardBookHeader extends React.Component {
    // componentDidMount() {
    //     // or simply just AOS.init();
    //     AOS.init({
    //         // initialise with other settings
    //         duration: 3000
    //     });
    // }
    render() {
        const { image, category } = this.props;
        
        return (
            <header  className="CardBook-favorite-header">
                {/* <h5 className="CardBook-header--title">{category}</h5> */}
                <img src={image} alt="" height={300} width={246} style={{borderTopLeftRadius: "20px",borderTopRightRadius: "20px"}}/>
            </header>
        )
    }
}


class CardBookBody extends React.Component {
    render() {
        return (
            <div className="CardBook-body">

                <h5 className="body-content" style={{textAlign:"center"}}>{this.props.title}</h5>

                {/* <p className="body-content">{this.props.text}</p> */}

                
                

            </div>
        )
    }
}

const MyContext = React.createContext();


// import React from 'react'
// data-aos={"flip-left"}
function CardBook(props) {
    const [state, update] = useStore()
    const id = props.details._id
    // const { id, setID } = state
    // const [state, update] = useContext(Context)
    // console.log(state);
    const change = () => {
        // update(updateBook(id))
        
        // alert(state.id)
    }
    return (
        <div>
            <>
            <Link to={`/book/${id}`}>              
    
                <div className="CardBook"  style={{cursor:"pointer"}} >
                    <CardBookHeader category={props.details.category} image={props.details.image} />
                    <CardBookBody title={props.details.name} text={props.details.description} link={props.details._id}/>
                </div >
                </Link>
            </>
        </div>
    )
}

// export { CardBook }
// class CardBook extends React.Component {
//     constructor() {
//         super();
//         this.data = 5;
//         this.state = ({
//             id: 0
//         })
//     }
//     componentDidMount() {
//         // or simply just AOS.init();
//         AOS.init({
//             // initialise with other settings
//             duration: 3000
//         });
//         this.setState({ id: this.props.details.id })
//         this.data = 6
//     }

//     detail = () => {

//         // console.log(this.state.id)
//         // alert(3)s
//         // <AboutBook id={this.state.id} />

//         alert(this.state.id);
//         // xem doan nay nha!!!
//         // <DescribeContent id={this.state.id} />
//     }
//     // detail = () => {
//     //     alert("Ad")
//     // }
//     render() {
//         // let value = this.context;
//         // console.log(value);
//         return (
//             <>
//                 {/* <div>

//                     {value}
//                 </div> */}
//                 <article article className="CardBook" data-aos={"flip-left"} onClick={this.detail} >
//                     <CardBookHeader category={this.props.details.category} image={this.props.details.image} />
//                     <CardBookBody title={this.props.details.title} text={this.props.details.text} />
//                 </article >
//             </>
//         )
//     }
// }
// CardBook.contextType = MyContext;

// export default Main;
export { Main, CardBook };