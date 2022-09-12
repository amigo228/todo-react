import {useDispatch, useSelector} from "react-redux";

const PointHolder = (props) => {
    const dispatch = useDispatch();

    const deleteHandler = (e) => {
        const index = Number(e.target.getAttribute('id'));
        dispatch({type: "REMOVE_TODO", index: index});
    }

    const checkHandler = (e) => {
        const index = Number(e.target.getAttribute('id'));
        dispatch({type: "CHECK_TODO", index: index});
    }

    const todosArray = useSelector(state => state.todo);

    const filtersFunc = (val) => {
        if(val === 1) {
            return todosArray.filter(item => item[1] === false);
        }
        else if (val === 2) {
            return todosArray.filter(item => item[1] === true);
        }
        else {
            return todosArray;
        }
    }

    if (Array.isArray(todosArray)) {
        return (
        <div className="point-holder">
        {
           filtersFunc(props.filter).map((item, index) => {
               return(
                   <div className="points" key={index}>
                       <span className={`state ${item[1] ? 'active' : ''}`}  onClick={checkHandler} id={index.toString()}></span>
                       <p className="task">{item[0]}</p>
                       <button className="delete" onClick={deleteHandler} key={index} id={index.toString()}></button>
                   </div>
               );
           })}
        </div>
        );
    }
    else {
        return null;
    }
}
export default PointHolder;