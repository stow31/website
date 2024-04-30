import { CSSTransition } from 'react-transition-group';
import { Link } from "react-router-dom";


function Menu(props){


    return(
        <div className="Menu-div">
            <CSSTransition
                in={props.toggled}
                timeout={1000}
                classNames="menu"
                unmountOnExit
            >
                <div className="Menu">
                    <p>
                        <Link to="/">Home</Link>
                    </p>
                    <p>
                        <Link to="/experience">Experience</Link>
                    </p>
                    <p>
                        <Link to="/skills">Skills</Link>
                    </p>
                    <p>
                        <Link to="/">About Me</Link>
                    </p>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Menu