import './Scrollable.css';

const Scrollable = (props) => {
    return (
        <div className="scroll">
            { props.children};
        </div>
    );
}


export default Scrollable;