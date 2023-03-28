import "./Navigation.css";
function Navigation()
{
    return(
        <div className="Nav-parent">
            <ul>
                <li className="Nav-member">Items            </li>
                <li className="Nav-member">     About      </li>
                <li className="Nav-member">   Menu           </li>
                <li className="Nav-member"> Shop             </li>
                <li className="Nav-member"> Help          </li>
            </ul>
        </div>
    )
};

export default Navigation;