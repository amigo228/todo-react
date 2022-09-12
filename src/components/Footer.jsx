import {useDispatch, useSelector} from "react-redux";

const Footer = (props) => {
    const dispatch = useDispatch();

    const clearCompletedHandler = () => {
        dispatch({type: "CLEAR_COMPLETED", check: false});
    }

    const showAllHandler = () => {
        props.setFilter(0);
    }

    const showActiveHandler = () => {
        props.setFilter(1);
    }

    const showCompletedHandler = () => {
        props.setFilter(2);
    }

    const todosArray = useSelector(state => state.todo);

    return (
        <>
            {
                todosArray.length > 0 ?
                    <div className="footer">
                        <div className="footer-holder">
                            <div className="item-count">
                                <p><span id="item-count">{todosArray.length}</span> item left</p>
                            </div>
                            <div className="btn-holder">
                                <button className="show-all-btn" onClick={showAllHandler}>All</button>
                                <button className="show-active-btn" onClick={showActiveHandler}>Active</button>
                                <button className="show-completed-btn" onClick={showCompletedHandler}>Completed</button>
                            </div>
                            <div className="btn-clear" onClick={clearCompletedHandler}>
                                <button>Clear completed</button>
                            </div>
                        </div>
                    </div>
                    :
                    null
            }
        </>
    );
}

export default Footer;