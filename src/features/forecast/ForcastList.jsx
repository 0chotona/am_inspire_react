import { useLocation } from "react-router-dom";
import ForcastItem from "./ForcastItem";


const ForcastList = () => {
    const location = useLocation();

    return (
        <div>목록보기
        {   location.state == null ?
            <ForcastItem forcast={"단기예보를 가져오지 못했습니다"} />
            :
            location.state.map( (forcast, idx) => {
                return (
                    <ForcastItem key={idx} forcast={forcast.category} />
                );
            })
        }
        </div>
    );
}

export default ForcastList;