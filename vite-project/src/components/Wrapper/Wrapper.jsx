import PopBrowse from "../PopBrowse/PopBrowse"
import PopExit from "../PopExit/PopExit"
import PopNew from "../PopNew/PopNew"

function Wrapper({ children }) {
    return (
        <div className="wrapper">
            <PopExit />
            <PopNew />
            <PopBrowse />
            {children}
        </div>
    )
}

export default Wrapper