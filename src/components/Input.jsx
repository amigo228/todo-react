import {useDispatch} from "react-redux";


const Input = (props) => {
    const dispatch = useDispatch();

    const inputHandler = (e) => {
        props.setStr(e.target.value);
    }

    const keyDownHandler = (e) => {

        if (e.keyCode === 13) {
            dispatch({type: "ADD_TODO", str: [props.str, false]});
            props.setStr("");
        }
    }

    return (
            <div className="hero-holder">
                <input onKeyDown={keyDownHandler} className="input-text" type="text" placeholder="What needs to be done?" onChange={inputHandler} value={props.str} />
            </div>
    );
}

export default Input;
